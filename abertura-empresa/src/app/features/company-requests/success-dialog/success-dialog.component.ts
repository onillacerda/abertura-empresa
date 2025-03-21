import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-success-dialog',
  template: `
    <div class="dialog-content">
      <div class="success-icon">
        <mat-icon>check_circle</mat-icon>
      </div>
      <h3>Solicitação cadastrada com sucesso!</h3>
      <button mat-raised-button (click)="dialogRef.close()">
        Ok
      </button>
    </div>
  `,
  styles: [`
    .dialog-content {
      padding: 20px;
      text-align: center;
      border-radius: 4px;
    }
    h3 {
      margin-bottom: 20px;
      color: #666;
    }
    .success-icon {
      color: #4caf50;
      margin-top: 16px;
    }
    button {
      border-radius: 4px;
    }
  `],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule]
})
export class SuccessDialogComponent {
  constructor(public dialogRef: MatDialogRef<SuccessDialogComponent>) {}
}