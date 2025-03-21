import { Routes } from '@angular/router';
import { CompanyRequestsComponent } from './features/company-requests/company-requests/company-requests.component';
import { CompanyRequestFormComponent } from './features/company-requests/company-request-form/company-request-form.component';

export const routes: Routes = [
  { path: 'pedidos', component: CompanyRequestsComponent },
  { path: 'pedidos/novo', component: CompanyRequestFormComponent },
  { path: 'pedidos/editar/:id', component: CompanyRequestFormComponent },
  { path: '', redirectTo: '/pedidos', pathMatch: 'full' }
];