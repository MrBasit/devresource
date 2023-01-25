import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ManagewebsiteComponent } from '../dialogform/managewebsite/managewebsite.component';
import { NewwebsiteComponent } from '../dialogform/newwebsite/newwebsite.component';
import { FilterqueryService } from '../services/filterquery.service';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  dialogRef!: MatDialog;
  dialogData!: DevResources[];
  isOpen: boolean;
  constructor(private dialog: MatDialog, private services: FilterqueryService){}
  
  ngOnInit(): void {
    this.services.categoriesDataSource$.subscribe(x => {
      this.dialogData = x;
    })
  }

  openDialog(){
     const dialog = this.dialog.open(NewwebsiteComponent);
  }

  openDialog2(){
    
    const dialog = this.dialog.open(ManagewebsiteComponent, {
      data: this.dialogData,
      width: '35vw'
    });
  }

  OpenSideNav(){
    this.services.isOpenSiveNav$.next(!this.isOpen);
    console.log("navbar")
  }
  

  


}
