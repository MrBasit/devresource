import { AfterViewInit, Component, ViewChild } from '@angular/core';
import '../modals/categories';
import { FilterqueryService } from '../services/filterquery.service';
// import {MatTreeNestedDataSource} from '@angular/material/tree';
// import {NestedTreeControl} from '@angular/cdk/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements AfterViewInit{

  @ViewChild('InputCtrl') inputElement!: HTMLInputElement;

  apis: DevResources[];

  private _transformer = (node: SideBarNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
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
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: NodeTree) => node.expandable;


  constructor(private services: FilterqueryService){
    
    this.apis = APIs;
    this.dataSource.data = TREE_DATA;
  }
  ngAfterViewInit(): void {
    console.log(this.inputElement)
  }

  filter(query: string){
    this.services.setQuery(query);
  }

  
}

const APIs: DevResources[] = [
  {
    name: 'YOU MIGHT LIKE',
    categories: [{ name: 'Public APIs', url: 'https://publicapis.dev/'}, 
    { name: 'Find a Job', url: 'https://jobstache.com/?utm_source=dev_resources&utm_content=suggested'}]
  }
 
]

const categories: DevResources[] = [
  { 
    categories: [
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
    categories: [{name: 'icons'},{name: 'fonts'},{name: 'logos'}]}]
  } 

]

interface NodeTree {
  expandable: boolean;
  name: string;
  level: number;
}
interface SideBarNode {
  name: string;
  children?: SideBarNode[];
}
const TREE_DATA: SideBarNode[] = [
  {
    name: 'Parent',
    children: [{name: 'child'}, {name: 'child'}, {name: 'child'}],
  },
  {
    name: 'Parent',
    children: [
      {
        name: 'Parent II',
        children: [{name: 'child'}, {name: 'child'}],
      },
      {
        name: 'Parent II',
        children: [{name: 'child'}, {name: 'child'}],
      },
    ],
  },
];







