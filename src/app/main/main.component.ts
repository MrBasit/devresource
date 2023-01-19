import { Component } from '@angular/core';
import { FilterqueryService } from '../services/filterquery.service';
@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  query!: string;
  constructor(private service: FilterqueryService){
    this.service.query$.subscribe(x => {
      this.query = x as string;
      console.log(x)
    })
  }

}
