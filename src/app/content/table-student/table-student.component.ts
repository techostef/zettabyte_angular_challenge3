import { IFilterStudentsTableList } from './../../services/studentsTableList.service';
import { ISchoolList } from './../../data/schoolList';
import { CrossCorrectorsService } from '../../services/crossCorrectors.service';
import { SchoolListService } from '../../services/schoolList.service';
import { IStudentsTableList } from '../../data/studentsTableList';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsTableListService } from '../../services/studentsTableList.service';
import keyFilterStudent from 'src/app/enum/keyFilterStudent.enum';

@Component({
  selector: 'app-table-student-component',
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.scss'],
  animations: [
    // animation triggers go here
  ]
})

export class TableStudentComponent implements AfterViewInit {
  dataSource: any;
  schoolListCategory: string[];
  crossCorrectorCategory: string[];
  _mentorsSubscribe: any;
  // dataSource: any = {};
  filterColumn: IFilterStudentsTableList = {};
  displayedColumns = [
    'fullname',
    'schoolOrigin',
    'schoolCorrecting',
    'crossCorrector',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private studentsTableListService: StudentsTableListService,
    private schoolListService: SchoolListService,
    private crossCorrectorsService: CrossCorrectorsService,
  ) { 
    this.filterColumn = this.studentsTableListService.filter;
    this.schoolListCategory = this.schoolListService.getCategory();
    this.crossCorrectorCategory = this.crossCorrectorsService.getCategory();
    const studentsTableList = studentsTableListService.studentsTableList
    this.dataSource = new MatTableDataSource<IStudentsTableList>(studentsTableList);
    studentsTableListService.studentsTableListChange.subscribe((value) => {
      console.log('value', value)
      this.dataSource = new MatTableDataSource<IStudentsTableList>(value);
      this.dataSource.paginator = this.paginator; // For pagination
    })

    studentsTableListService.filterChange.subscribe((value) => {
      this.filterColumn = value;
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; // For pagination
    // this.dataSource.sort = this.sort; // For sort
  }

  onChangeFilterFullname(value): void {
    this.studentsTableListService.updateFilter(keyFilterStudent.fullname, value);
  }

  onChangeFilterSchoolOrigin(value): void {
    this.studentsTableListService.updateFilter(keyFilterStudent.schoolOrigin, value);
  }

  onChangeFilterSchoolCorrecting(value): void {
    this.studentsTableListService.updateFilter(keyFilterStudent.schoolCorrecting, value);
  }

  onChangeFilterCrossCorrector(value): void {
    this.studentsTableListService.updateFilter(keyFilterStudent.crossCorrector, value);
  }

  onResetFilter(): void {
    this.studentsTableListService.resetFilter();
  }

  onChangeSchoolCorrecting(item, item2: IStudentsTableList) {
    const school = this.schoolListService.getSchoolById(item.value)
    this.studentsTableListService.updateSchoolCorrecting(item2._id, school);
  }

  onChangeCrossCorrector(item, item2: IStudentsTableList) {
    const cross = this.crossCorrectorsService.getCrossById(item.value)
    this.studentsTableListService.updateCrossCorrector(item2._id, cross);
  }

  getCrossOption(item: any, item2: IStudentsTableList) {
    return this.crossCorrectorsService.getCrossOption(item)
  }

  getSchoolOption(item: any) {
    return this.schoolListService.getSchoolOptions(item)
  }
}

