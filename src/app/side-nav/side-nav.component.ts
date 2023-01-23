import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import '../modals/categories';
import { FilterqueryService } from '../services/filterquery.service';
// import {MatTreeNestedDataSource} from '@angular/material/tree';
// import {NestedTreeControl} from '@angular/cdk/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { devOnlyGuardedExpression } from '@angular/compiler';
import { MatCardTitleGroup } from '@angular/material/card';
@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements AfterViewInit, OnInit{

  @ViewChild('InputCtrl') inputElement!: HTMLInputElement;
 
  apis;

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


  constructor(private services: FilterqueryService){
    this.apis = APIs;
    this.dataSource.data =  categories;
    
  }

  ngOnInit(): void {
    this.services.setCategories(categories)
    this.services.setAPI(APIs)

    
    
  }

  ngAfterViewInit(): void {
    console.log(this.inputElement)
    this.services.categoriesDataSource$.subscribe(x => console.log(x));
  }

  filter(query: string){
    this.services.setQuery(query);
  }
  childClick(nodeName:string){
    this.filter(nodeName);
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










