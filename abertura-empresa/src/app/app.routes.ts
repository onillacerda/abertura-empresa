import { Routes } from '@angular/router';
import { CompanyRequestsComponent } from './features/company-requests/company-requests/company-requests.component';

export const routes: Routes = [
  { path: 'empresas', component: CompanyRequestsComponent },
  { path: '', redirectTo: 'empresas', pathMatch: 'full' }
];