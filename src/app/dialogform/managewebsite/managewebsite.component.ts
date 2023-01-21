import { AfterViewInit, Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-managewebsite',
  templateUrl: './managewebsite.component.html',
  styleUrls: ['./managewebsite.component.scss']
})
export class ManagewebsiteComponent implements OnInit{

  dataSource!: DevResources[];
  constructor(@Inject(MAT_DIALOG_DATA) private data: DevResources[]){

  }

  ngOnInit(): void {
    this.dataSource = this.data;
  }
}
