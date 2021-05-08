import { ISchoolList } from './../../data/schoolList';
import { CrossCorrectorsService } from '../../services/crossCorrectors.service';
import { SchoolListService } from '../../services/schoolList.service';
import { IStudentsTableList } from '../../data/studentsTableList';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsTableListService } from '../../services/studentsTableList.service';

@Component({
  selector: 'app-table-school-component',
  templateUrl: './table-school.component.html',
  styleUrls: ['./table-school.component.scss'],
  animations: [
    // animation triggers go here
  ]
})

export class TableSchoolComponent implements AfterViewInit {
  schoolList: any = [];
  dataSource: any;
  _mentorsSubscribe: any;
  // dataSource: any = {};
  filterColumn: any = {
    name: '',
    userType: '',
    entity: '',
    status: '',
  };
  displayedColumns = [
    'schools',
    'students',
    'corrections',
    'diff',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private studentsTableListService: StudentsTableListService,
    private schoolListService: SchoolListService,
    private crossCorrectorsService: CrossCorrectorsService,
  ) { 
    this.schoolList = schoolListService.getTableSchool(this.studentsTableListService.studentsTableList);
    this.dataSource = new MatTableDataSource<IStudentsTableList>(this.schoolList);
    studentsTableListService.studentsTableListOriChange.subscribe((value) => {
      this.schoolList = schoolListService.getTableSchool(value);
      this.dataSource = new MatTableDataSource<IStudentsTableList>(this.schoolList);
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort; // For sort
  }
}

