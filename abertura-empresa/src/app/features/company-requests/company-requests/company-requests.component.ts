import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
  imports: [CommonModule, HttpClientModule]
})
export class CompanyRequestsComponent implements OnInit {
  requests: CompanyRequest[] = [];
  currentDate: string = new Date().toLocaleDateString();

  constructor(private http: HttpClient) {}

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
}