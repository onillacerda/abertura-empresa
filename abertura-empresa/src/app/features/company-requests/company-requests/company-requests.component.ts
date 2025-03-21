import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

interface CompanyRequest {
  id: string;
  solicitante: {
    ds_responsavel: string;
    nu_cpf: string;
    date_nascimento: string;
  };
  empresa: {
    ds_nome_fantasia: string;
    endereco: {
      co_cep: number;
      ds_logradouro: string;
      co_numero: string;
      ds_complemento: string | null;
      ds_bairro: string;
      ds_municipio: string;
      ds_uf: string;
    };
  };
}

@Component({
  selector: 'app-company-requests',
  templateUrl: './company-requests.component.html',
  styleUrls: ['./company-requests.component.css'],
  imports: [CommonModule, HttpClientModule, MatButton, RouterLink, MatIconModule]
})
export class CompanyRequestsComponent implements OnInit {
  requests: CompanyRequest[] = [];
  currentDate: string = new Date().toLocaleDateString();
  @ViewChild('detailsDialog') detailsDialog!: TemplateRef<any>;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchRequests();
  }

  fetchRequests(): void {
    this.http.get<CompanyRequest[]>('http://localhost:3000/empresas')
      .subscribe({
        next: (data) => {
          this.requests = data;
        },
        error: (error) => {
          console.error('Erro ao carregar pedidos:', error);
        }
      });
  }

  openDetails(request: CompanyRequest): void {
    this.dialog.open(this.detailsDialog, {
      data: request,
      width: '800px',
      panelClass: 'custom-dialog'
    });
  }
}