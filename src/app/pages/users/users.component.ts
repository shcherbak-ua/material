import { DialogComponent } from './../../shared/components/dialog/dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users = [];
  objectDeleteFlag = false;
  constructor(private data: DataService, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.users = this.data.getUsers();
  }
  removeItem(email: string) {
    const dialogRef = this.dialog.open(DialogComponent,{
      width: '250',
      data: {flag: this.objectDeleteFlag}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed');
      this.objectDeleteFlag = result;
      if(this.objectDeleteFlag){
        console.log(email);
        this.data.removeUser(email);
      }
    })

  }
}
