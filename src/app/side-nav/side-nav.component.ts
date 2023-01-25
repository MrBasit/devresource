import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import '../modals/categories';
import { FilterqueryService } from '../services/filterquery.service';
import {FlatTreeControl} from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { MatDialog } from '@angular/material/dialog';
import { NewwebsiteComponent } from '../dialogform/newwebsite/newwebsite.component';
import { ManagewebsiteComponent } from '../dialogform/managewebsite/managewebsite.component';
@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements AfterViewInit, OnInit{

  apis;

  dialogData!: DevResources[];

  @ViewChild('InputCtrl') inputElement!: ElementRef;
  @ViewChild('ctrlsearch') search!: ElementRef;
  @ViewChild('sidenav') sidenav!: ElementRef;
  @Output() sidenavigation: EventEmitter<boolean> = new EventEmitter();

  private _transformer = (node: DevResources, level: number) => {
    return {
      expandable: !!node.categories && node.categories.length > 0,
      name: node.name,
      level: level,
    };
  };
  treeControl = new FlatTreeControl<NodeTree>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.categories,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: NodeTree) => node.expandable;


  constructor(private services: FilterqueryService, private dialog: MatDialog){
    this.apis = APIs;
    this.dataSource.data =  categories;
    
  }

  ngOnInit(): void {
    this.services.categoriesDataSource$.subscribe(res => {
      this.dialogData = res;
    })
    this.services.setCategories(categories)
    this.services.setAPI(APIs)
   }

  ngAfterViewInit(): void {
    console.log(this.inputElement)
    console.log(this.search)
    this.services.categoriesDataSource$.subscribe(x => console.log(x));
  }

  filter(query: string){
    if(this.search.nativeElement.className == 'search' && this.inputElement.nativeElement.value != ""){
      this.sidenavigation.emit();
      this.services.setQuery(query);
      this.inputElement.nativeElement.value = "";
    }
    else{
      if( this.inputElement.nativeElement.value != ""){
        this.services.setQuery(query);
        this.inputElement.nativeElement.value = "";

      }

    }
    
  }
  childClick(nodeName:string){
    this.filter(nodeName);
  }

  openAddPopUp(){
    this.dialog.open(NewwebsiteComponent)
  }

  openManagePopUp(){

    this.dialog.open(ManagewebsiteComponent, {
      data : this.dialogData
    })
  }
  
}

interface NodeTree {
  expandable: boolean;
  name: string;
  level: number;
}


const categories: DevResources[] = [
  { name: 'Assets', 
    categories: [{name: 'audio'},{name: 'icons'},{name: 'fonts'},{name: 'logos'}]
  }, 

  { name: 'Community',
  categories: [{name: 'audio'},{name: 'icons'},{name: 'fonts'},{name: 'logos'}]
  }, 

  {name: 'Indie Hacking',
  categories: [{name: 'audio'},{name: 'icons'}]},

  { name: 'Insfrastructure',
  categories: [{name: 'audio'},{name: 'icons'},{name: 'fonts'},{name: 'logos'}]}, 

  { name: 'Jobs',
  categories: [{name: 'fonts'},{name: 'logos'}]}, 

  {name: 'Programming',
  categories: [{name: 'icons'},{name: 'fonts'},{name: 'logos'}]}
]

const APIs: DevResources[] = [
  {
    name: 'YOU MIGHT LIKE',
    categories: [{ name: 'Public APIs', url: 'https://publicapis.dev/'}, 
    { name: 'Find a Job', url: 'https://jobstache.com/?utm_source=dev_resources&utm_content=suggested'}]
  }
 
]










