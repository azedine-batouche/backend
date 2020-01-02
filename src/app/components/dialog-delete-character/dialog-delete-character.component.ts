import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Data } from '@angular/router';

@Component({
  selector: 'app-dialog-delete-character',
  templateUrl: './dialog-delete-character.component.html',
  styleUrls: ['./dialog-delete-character.component.css']
})
export class DialogDeleteCharacterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogDeleteCharacterComponent>, @Inject(MAT_DIALOG_DATA) public data: Data) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
