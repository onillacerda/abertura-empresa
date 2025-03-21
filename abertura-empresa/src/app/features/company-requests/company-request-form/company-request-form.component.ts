import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CompanyRequest } from '../company-requests/company-requests.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-request-form',
  templateUrl: './company-request-form.component.html',
  styleUrls: ['./company-request-form.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  standalone: true
})
export class CompanyRequestFormComponent {
  @Input() request: CompanyRequest | null = null;
  @Output() formClosed = new EventEmitter<boolean>();
  requestForm!: FormGroup;
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router) {
    this.initForm();
  }

  private initForm() {
    this.requestForm = this.fb.group({
      nomeResponsavel: [''],
      cpf: [''],
      dataNascimento: [''],
      nomeFantasia: [''],
      endereco: [''],
      complemento: [''],
      bairro: [''],
      cidade: [''],
      estado: ['']
    });

    if (this.request) {
      this.requestForm.patchValue({
        nomeResponsavel: this.request.solicitante.ds_responsavel,
        cpf: this.request.solicitante.nu_cpf,
        dataNascimento: this.request.solicitante.date_nascimento,
        nomeFantasia: this.request.empresa.ds_nome_fantasia,
        endereco: this.request.empresa.endereco.ds_logradouro,
        complemento: this.request.empresa.endereco.ds_complemento,
        bairro: this.request.empresa.endereco.ds_bairro,
        cidade: this.request.empresa.endereco.ds_municipio,
        estado: this.request.empresa.endereco.ds_uf
      });
    }
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.requestForm.valid) {
      const formData = this.requestForm.value;
      // Implementar lógica de submit
      this.router.navigate(['/pedidos']);
    }
  }

  cancel() {
    this.router.navigate(['/pedidos']);
  }
}