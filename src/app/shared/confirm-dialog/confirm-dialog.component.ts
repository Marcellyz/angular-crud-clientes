import { Component, Inject} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogActions } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  imports: [MatDialogContent, MatDialogActions,MatButtonModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss'
})
export class ConfirmDialogComponent {

  constructor(public matDialog: MatDialogRef<ConfirmDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:string) { }

  onCancel(): void {
    this.matDialog.close(false);
  }

  onConfirm(): void {
    this.matDialog.close(true);
  }

}
