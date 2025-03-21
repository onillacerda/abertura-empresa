import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyRequestFormComponent } from './company-request-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

describe('CompanyRequestFormComponent', () => {
  let component: CompanyRequestFormComponent;
  let fixture: ComponentFixture<CompanyRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatDialogModule,
        MatIconModule,
        SuccessDialogComponent,
        CompanyRequestFormComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should initialize form with empty values', () => {
    component['initForm']();
    expect(component.requestForm.value.nomeResponsavel).toBe('');
    expect(component.requestForm.value.cpf).toBe('');
  });

  xit('should validate required fields', () => {
    component['initForm']();
    component.requestForm.markAllAsTouched();
    expect(component.requestForm.valid).toBe(false);
  });

  xit('should submit form successfully', () => {
    const formData = {
      solicitante: {
        ds_responsavel: 'Test',
        nu_cpf: '12345678900',
        date_nascimento: '2000-01-01'
      },
      empresa: {
        ds_nome_fantasia: 'Test Company',
        endereco: {
          co_cep: 12345678,
          ds_logradouro: 'Test Street',
          co_numero: '123',
          ds_complemento: '',
          ds_bairro: 'Test Neighborhood',
          ds_municipio: 'Test City',
          ds_uf: 'SP'
        }
      }
    };

    component.requestForm.patchValue({
      nomeResponsavel: 'Test',
      cpf: '12345678900',
      dataNascimento: '2000-01-01',
      nomeFantasia: 'Test Company',
      cep: '12345678',
      endereco: 'Test Street',
      numero: '123',
      bairro: 'Test Neighborhood',
      cidade: 'Test City',
      estado: 'SP'
    });

    component.onSubmit();
  });
});