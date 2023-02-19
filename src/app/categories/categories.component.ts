import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  spinner: boolean = false;

  constructor(private queryService: FilterqueryService, private dialog: MatDialog ){
    this.cardContent = AllCardContent;

  }

  ngOnInit(): void {
      
    setTimeout(() => {
      this.spinner = true;
      this.filter();
      this.filteredCategories =  this.cardContent.filter(val => {   
            return val.type?.toLowerCase() == this.queryService.queryText.toLowerCase();
          }
        );
    }, 2000);
  }
  
  filter(){
      this.queryService.query$.subscribe((query: any) => {
        this.filteredCategories =  this.cardContent.filter(val=> { 
         return val.type?.toLowerCase() == query.toLowerCase();
      });
      })
  }
}