import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRequestsComponent } from './company-requests/company-requests.component';
import { CompanyRequestsRoutingModule } from './company-requests-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    CompanyRequestsRoutingModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule,
    CompanyRequestsComponent
  ]
})
export class CompanyRequestsModule { }