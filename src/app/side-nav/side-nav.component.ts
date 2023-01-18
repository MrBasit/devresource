import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import '../modals/categories';
import { FilterqueryService } from '../services/filterquery.service';
@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements AfterViewInit{

  @ViewChild('InputCtrl') inputElement!: ElementRef;

  subcategories: DevResources[];

  constructor(private services: FilterqueryService){
    
    this.subcategories = subCategories;
  }

  ngAfterViewInit(): void {
    console.log(this.inputElement)
  }

  filter(query: string){
    console.log(query);
    this.services.setQuery(query);
    this.inputElement.nativeElement.value == "";
  }

  
}

const subCategories: DevResources[] = [
  {
    name: 'YOU MIGHT LIKE',
    categories: [{ name: 'Public APIs', url: 'https://publicapis.dev/'}, 
    { name: 'Find a Job', url: 'https://jobstache.com/?utm_source=dev_resources&utm_content=suggested'}]
  },
  { 
    name: 'CATEGORIES',
    categories: [
    { name: 'Assets'}, { name: 'Community'}, {name: 'Indie Hacking'},
    { name: 'Insfrastructure'}, { name: 'Jobs'}, {name: 'Programming'}]
  } 

]







