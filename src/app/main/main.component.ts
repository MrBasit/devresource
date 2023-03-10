import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FilterqueryService } from '../services/filterquery.service';
@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  query!: string;
  isOpen: boolean;

  @ViewChild("sidenav",{static: false, read: ElementRef}) sideNav;

  constructor(private service: FilterqueryService){
    this.service.query$.subscribe(x => {
      this.query = x as string;
    })
  }
 
  ngOnInit(): void {
     this.service.isOpenSiveNav$.subscribe((val: boolean) => {
      this.isOpen = val;
     })
  }

  ngAfterViewInit(): void {
    console.log(this.sideNav)
   }

  close(){
    this.sideNav.nativeElement.classList.remove('display-side-nav');
    this.service.isOpenSiveNav$.next(false);

  }

  hideSideNav(){
    this.sideNav.nativeElement.classList.remove('display-side-nav');
    this.service.isOpenSiveNav$.next(false);
  }

}
