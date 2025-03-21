import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessDialogComponent } from './success-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('SuccessDialogComponent', () => {
  let component: SuccessDialogComponent;
  let fixture: ComponentFixture<SuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessDialogComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: jasmine.createSpy('close')
          }
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});