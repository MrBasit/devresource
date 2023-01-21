import { Component } from '@angular/core';
import { AllCardContent,FilterqueryService } from '../services/filterquery.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

 
  dataSource:Card[]=[];
  sortedData=[];
  constructor(private service: FilterqueryService){
    this.dataSource=AllCardContent.map(_=>_);
    while(this.dataSource.length>0){
      let part = this.dataSource.filter(_=>_.date==this.dataSource[0].date);
      this.sortedData.splice(0,0,part)
      part.forEach(e => {
        this.dataSource.splice(this.dataSource.indexOf(e),1);
      });
    }
  }

}