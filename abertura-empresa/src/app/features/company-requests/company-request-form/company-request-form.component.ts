import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CompanyRequest } from '../company-requests/company-requests.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
export class CompanyRequestFormComponent implements OnInit {
  @Input() request: CompanyRequest | null = null;
  @Output() formClosed = new EventEmitter<boolean>();
  requestForm!: FormGroup;
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    if (this.request) {
      this.patchForm();
    }
  }

  private initForm(): void {
    this.requestForm = this.fb.group({
      nomeResponsavel: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
      dataNascimento: ['', [Validators.required]],
      nomeFantasia: ['', [Validators.required]],
      cep: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      endereco: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: [''],
      bairro: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]]
    });
  }

  private patchForm(): void {
    if (this.request) {
      this.requestForm.patchValue({
        nomeResponsavel: this.request.solicitante.ds_responsavel,
        cpf: this.request.solicitante.nu_cpf,
        dataNascimento: this.request.solicitante.date_nascimento,
        nomeFantasia: this.request.empresa.ds_nome_fantasia,
        cep: this.request.empresa.endereco.co_cep,
        endereco: this.request.empresa.endereco.ds_logradouro,
        numero: this.request.empresa.endereco.co_numero,
        complemento: this.request.empresa.endereco.ds_complemento,
        bairro: this.request.empresa.endereco.ds_bairro,
        cidade: this.request.empresa.endereco.ds_municipio,
        estado: this.request.empresa.endereco.ds_uf
      });
    }
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.requestForm.valid) {
      const dataNascimento = new Date(this.requestForm.value.dataNascimento);
      const dataFormatada = dataNascimento.toISOString().split('T')[0];

      const formData = {
        solicitante: {
          ds_responsavel: this.requestForm.value.nomeResponsavel,
          nu_cpf: this.requestForm.value.cpf,
          date_nascimento: dataFormatada
        },
        empresa: {
          ds_nome_fantasia: this.requestForm.value.nomeFantasia,
          endereco: {
            co_cep: parseInt(this.requestForm.value.cep),
            ds_logradouro: this.requestForm.value.endereco,
            co_numero: this.requestForm.value.numero,
            ds_complemento: this.requestForm.value.complemento,
            ds_bairro: this.requestForm.value.bairro,
            ds_municipio: this.requestForm.value.cidade,
            ds_uf: this.requestForm.value.estado
          }
        },
        id: this.request?.id || Date.now().toString()
      };
  
      if (this.request) {
        // Atualizar pedido existente
        this.http.put(`http://localhost:3000/empresas/${this.request.id}`, formData)
          .subscribe({
            next: () => {
              this.router.navigate(['/pedidos']);
            },
            error: (error) => {
              console.error('Erro ao atualizar pedido:', error);
            }
          });
      } else {
        // Criar novo pedido
        this.http.post('http://localhost:3000/empresas', formData)
          .subscribe({
            next: () => {
              this.router.navigate(['/pedidos']);
            },
            error: (error) => {
              console.error('Erro ao criar pedido:', error);
            }
          });
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/pedidos']);
  }
}