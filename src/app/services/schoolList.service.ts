import { IStudentsTableList } from './../data/studentsTableList';
import { ISchoolList, SchoolList } from './../data/schoolList';
import { Injectable } from '@angular/core';

export interface IFilterStudentsTableList {
  name?: string,
  userType?: string,
  entity?: string,
  status?: string,
}

@Injectable({
  providedIn: 'root'
})
export class SchoolListService {
  
  schooList: ISchoolList[] = []
  constructor() {
      this.schooList = SchoolList;
  }

  getSchoolById(id): ISchoolList {
    return this.schooList.find((itemSchool) => itemSchool?.school?._id === id)
  }

  getSchoolOptions(item: any): ISchoolList[] {
    return this.schooList.filter((itemSchool) => itemSchool?.school?._id !== item._id)
  }

  getTableSchool(studentsTableList: IStudentsTableList[]) {
    const newData: any = this.schooList.map((item) => ({...item}))
    for(let i = 0; i < newData.length; i ++) {
      const item = newData[i];
      const studentList = studentsTableList.filter((itemStud) => itemStud.school_origin_id._id === item.school._id)
      const correctionList = studentsTableList.filter((itemStud) => itemStud.school_correcting_id._id === item.school._id)
      item.correctionCount = correctionList.length;
      item.studentCount = studentList.length;
      item.diff = item.correctionCount - item.studentCount;
    }
    return newData;
  }

  getCategory(): string[]{
    let category = []
    this.schooList.forEach((itemSchool) => {
      category.push(itemSchool.school.short_name);
    })
    return category;
  }
}
