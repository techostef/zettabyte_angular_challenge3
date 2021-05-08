import { CrossCorrectors, ICrossCorrectors } from './../data/crossCorrector';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CrossCorrectorsService {
    crossCorrectors: ICrossCorrectors[] = []
    constructor() {
        this.crossCorrectors = CrossCorrectors;
    }
    crossCorrectorsChange: Subject<ICrossCorrectors[]> = new Subject<ICrossCorrectors[]>();
    getCrossById(id): ICrossCorrectors {
      return this.crossCorrectors.find((item) => item?._id === id)
    }
    getCrossOption(item: any): ICrossCorrectors[] {
      return this.crossCorrectors.filter((itemCross) => itemCross?.school_origin_id?._id === item?._id)
    }
    getCategory(): string[]{
      let category = []
      this.crossCorrectors.forEach((item) => {
        category.push(item.student_id.first_name + ' ' + item.student_id.last_name);
      })
      return category;
    }
}
