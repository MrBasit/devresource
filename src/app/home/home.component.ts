import { Component, ElementRef, ViewChild } from '@angular/core';
import { AllCardContent,FilterqueryService } from '../services/filterquery.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

 @ViewChild("menu") menu: ElementRef;
 
 isEdit: boolean;
  dataSource:Card[]=[];
  sortedData=[];

  spinner: boolean;
  constructor(private service: FilterqueryService){

    setTimeout(() => {
      this.spinner = true;
      this.dataSource=AllCardContent.map(_=>_);
      this.dataSource = this.dataSource.sort((a,b)=>{
        let aa = new Date(a.date);
        let bb = new Date(b.date);
        if (aa>bb) return 1;
        if (aa<bb) return -1;
        else return 0;
      });
      while(this.dataSource.length>0){
        let part = this.dataSource.filter(_=>_.date==this.dataSource[0].date);
        this.sortedData.splice(0,0,part)
        part.forEach(e => {
          this.dataSource.splice(this.dataSource.indexOf(e),1);
        });
      }
    }, 2000);

  }

  Edit(){
    console.log(this.menu);
    this.isEdit = !this.isEdit;

    if(this.isEdit){
      this.menu.nativeElement.style.visibility = 'visible';

    }
    else{
      this.menu.nativeElement.style.visibility = 'hidden';
    }

  }

}