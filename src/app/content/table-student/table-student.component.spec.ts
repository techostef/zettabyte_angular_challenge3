import { TestBed } from '@angular/core/testing';
import { TableStudentComponent } from './table-student.component';

describe('TableStudentComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TableStudentComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TableStudentComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
