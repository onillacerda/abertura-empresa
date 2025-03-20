import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyRequestsComponent } from './company-requests/company-requests.component';

const routes: Routes = [
  { path: '', component: CompanyRequestsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRequestsRoutingModule {
  constructor() {
    console.log('CompanyRequestsRoutingModule loaded');
  }
}