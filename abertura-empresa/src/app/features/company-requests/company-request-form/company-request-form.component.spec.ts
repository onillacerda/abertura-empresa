import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRequestFormComponent } from './company-request-form.component';

describe('CompanyRequestFormComponent', () => {
  let component: CompanyRequestFormComponent;
  let fixture: ComponentFixture<CompanyRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyRequestFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
