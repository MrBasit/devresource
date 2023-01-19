import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NewwebsiteComponent } from '../dialogform/newwebsite/newwebsite.component';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  dialogRef!: MatDialog;
  constructor(private dialog: MatDialog){}

  openDialog(){
     const dialog = this.dialog.open(NewwebsiteComponent,{
      width: '30%',
      height: '60vh'
     });
  }


}
