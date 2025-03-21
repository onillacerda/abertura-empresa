import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyRequestsComponent } from './company-requests.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CompanyRequestsComponent', () => {
  let component: CompanyRequestsComponent;
  let fixture: ComponentFixture<CompanyRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        CompanyRequestsComponent
      ],
      providers: [
        {
          provide: 'API_URL',
          useValue: 'http://localhost:3000'
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});