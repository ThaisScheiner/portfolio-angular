import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogActions, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  imports: [
    CommonModule,
    MatDialogModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})


export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}
}
