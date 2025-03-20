import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'empresas',
    loadChildren: () => import('./features/company-requests/company-requests.module')
      .then(m => m.CompanyRequestsModule)
  },
  { path: '', redirectTo: 'empresas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }