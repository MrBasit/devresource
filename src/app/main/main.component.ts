import { Component, OnInit } from '@angular/core';
import { FilterqueryService } from '../services/filterquery.service';
@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  query!: string;
  isOpen: boolean;
  constructor(private service: FilterqueryService){
    this.service.query$.subscribe(x => {
      this.query = x as string;
      console.log(x)
    })
  }
  ngOnInit(): void {

    this.service.isOpenSiveNav$.subscribe((val: boolean) => {
      this.isOpen = val;
      console.log(this.isOpen)
     })
    
  }

}
