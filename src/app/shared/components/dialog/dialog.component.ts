import { UsersComponent } from './../../../pages/users/users.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancel(): void {
    this.dialogRef.close();
  }
  onOK() {
    this.data.flag = true;
    console.log(this.data.flag);
    this.dialogRef.close();

  }
  ngOnInit(){}
}
