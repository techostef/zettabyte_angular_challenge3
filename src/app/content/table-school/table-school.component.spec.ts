import { TestBed } from '@angular/core/testing';
import { TableSchoolComponent } from './table-school.component';

describe('TableSchoolComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TableSchoolComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TableSchoolComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
