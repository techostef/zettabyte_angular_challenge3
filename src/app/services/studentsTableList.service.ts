import { ICrossCorrectors } from './../data/crossCorrector';
import { ISchoolList } from './../data/schoolList';
import { StudentsTableList, IStudentsTableList } from './../data/studentsTableList';
import keyFilterStudent from '../enum/keyFilterStudent.enum';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

type typeKeyFilterStudent = keyof typeof keyFilterStudent;

export interface IFilterStudentsTableList {
  fullname?: string,
  schoolOrigin?: string,
  schoolCorrecting?: string,
  crossCorrector?: string,
}

@Injectable({
  providedIn: 'root'
})
export class StudentsTableListService {
    studentsTableListOri: IStudentsTableList[] = []
    studentsTableList: IStudentsTableList[] = []
    filter: IFilterStudentsTableList = {};
    constructor() {
        this.studentsTableListOri = StudentsTableList;
        this.studentsTableList = StudentsTableList;
    }
    studentsTableListOriChange: Subject<IStudentsTableList[]> = new Subject<IStudentsTableList[]>();
    studentsTableListChange: Subject<IStudentsTableList[]> = new Subject<IStudentsTableList[]>();
    filterChange: Subject<IFilterStudentsTableList> = new Subject<IFilterStudentsTableList>();

    private proceedData(): void {
      console.log('this.studentsTableListOri', this.studentsTableListOri)
      console.log('this.filter', this.filter)
      const newData = this.studentsTableListOri.filter((item) => {
        let valid = true;
        const fullname = item?.student_id.first_name + ' ' + item.student_id.last_name;
        if (fullname
            .toLocaleLowerCase()
            .indexOf(this.filter?.fullname?.toLocaleLowerCase() ?? '') === -1)
            return false
        if (item?.school_origin_id?.short_name
          .toLocaleLowerCase()
          .indexOf(this.filter?.schoolOrigin?.toLocaleLowerCase() ?? '') === -1)
          return false
        const schoolCorrecting = item?.school_correcting_id?.short_name ?? ''
        if (schoolCorrecting
          .toLocaleLowerCase()
          .indexOf(this.filter?.schoolCorrecting?.toLocaleLowerCase() ?? '') === -1)
          return false
        const crossCorrector1 = item?.school_correcting_corrector_id?.first_name ?? ''
        const crossCorrector2 = item?.school_correcting_corrector_id?.last_name ?? ''
        const crossCorrectorFull = crossCorrector1 + ' ' + crossCorrector2
        console.log('crossCorrectorFull', crossCorrectorFull)
        if (crossCorrectorFull
          .toLocaleLowerCase()
          .indexOf(this.filter?.crossCorrector?.toLocaleLowerCase() ?? '') === -1)
          return false
        return valid;
      })
      console.log('newData', newData)
      this.studentsTableList = newData;
      this.studentsTableListChange.next(newData);
    }

    updateSchoolCorrecting(id, item: ISchoolList): void {
        const newData = this.studentsTableListOri.map((itemStudent) => ({ ...itemStudent }))
        const idx = newData.findIndex((itemStudent) => itemStudent._id === id);
        if (idx === -1) return;
        newData[idx].school_correcting_id = {...item?.school};
        newData[idx].school_correcting_corrector_id = {
          _id: null,
          first_name: null,
          last_name: null
        };
        this.studentsTableListOri = newData;
        this.studentsTableList = newData;
        this.studentsTableListOriChange.next(newData);
        this.studentsTableListChange.next(newData);
    }

    updateCrossCorrector(id, item: ICrossCorrectors): void {
        const newData = this.studentsTableListOri.map((itemStudent) => ({ ...itemStudent }))
        const idx = newData.findIndex((itemStudent) => itemStudent._id === id);
        if (idx === -1) return;
        newData[idx].school_correcting_corrector_id = {
          ...item.student_id, _id: item._id
        };
        this.studentsTableListOri = newData;
        this.studentsTableList = newData;
        this.studentsTableListOriChange.next(newData);
        this.studentsTableListChange.next(newData);
    }

    updateFilter(key: typeKeyFilterStudent | string, search: string): void {
      this.filter[key] = search;
      this.filterChange.next(this.filter)
      this.proceedData()
    }

    resetFilter(): void {
      this.filter = {};
      this.filterChange.next(this.filter)
      console.log('this.filter', this.filter)
      this.proceedData()
    }

}
