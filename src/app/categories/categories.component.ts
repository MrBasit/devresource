import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import '../modals/categories';
import { AllCardContent ,FilterqueryService } from '../services/filterquery.service';
@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  cardContent: Card[] = AllCardContent;
  filteredCategories?: Card[];
  aa = "any";

  constructor(private queryService: FilterqueryService ){
    this.cardContent = AllCardContent;
  }

  ngOnInit(): void {
    this.filter();
      this.filteredCategories =  this.cardContent.filter(val => { 
        console.log(val)
        return val.type?.toLowerCase() == this.queryService.queryText.toLowerCase();
      }
    );
    
  }

  filter(){
    this.queryService.query$.subscribe((query: any) => {

    this.filteredCategories =  this.cardContent.filter(val=> { 
      console.log(val)
       return val.type?.toLowerCase() == query.toLowerCase();
    });
    })
  }
}