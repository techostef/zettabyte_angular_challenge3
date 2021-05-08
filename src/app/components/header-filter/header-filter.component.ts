import { StudentsTableListService } from './../../services/studentsTableList.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import headerFilterType from '../../enum/headerFilterType.enum';

@Component({
  selector: 'app-header-filter',
  templateUrl: './header-filter.component.html',
  styleUrls: ['./header-filter.component.scss']
})
export class HeaderFilterComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;
  @Input() type: string = headerFilterType.TEXT;
  @Input() options: any[] = [];

  filteredOptions: Observable<any[]>;
  
  myControl = new FormControl();

  @Output() onChangeValue: EventEmitter<any> = new EventEmitter();

  constructor(private studentsTableListService: StudentsTableListService) {
    
  }

  ngOnInit(): void {
    // if (this.type === headerFilterType.AUTOCOMPLATE) {
    //   const result = this.studentsTableListService.getCategoryUserType();
    //   this.options = ['All', ...result]
    // } else if (this.type === headerFilterType.SELECT) {
    //   this.options = this.mentorService.getCategoryCompanyName();
    // } else if (this.type === headerFilterType.STATUS) {
    //   const result = this.mentorService.getCategoryStatus();
    //   this.options = ['All', ...result]
    // }
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  keyUpInput(value): void {
    this.onChangeValue.emit(value);
  }

  displayFn(item: any): string {
    return item ? item : '';
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    const result = this.options.filter(option => {
      const lowerText = option.toLowerCase()
      if (lowerText === 'all') return true
      return lowerText.indexOf(filterValue) >= 0
    });
    return result
  }
}
