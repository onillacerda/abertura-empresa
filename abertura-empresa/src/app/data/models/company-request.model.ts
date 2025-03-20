export interface CompanyRequest {
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