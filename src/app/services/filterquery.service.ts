import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterqueryService {

  query$ = new Subject();
  queryText:string="";
  categoriesDataSource$ = new Subject<DevResources[]>();
  apiDataSource$ = new Subject<DevResources[]>();

  constructor() { 
  }

  public setQuery(query: string){
    this.query$.next(query)
    this.queryText=query;

  }

  public setCategories(categories: DevResources[]){
    this.categoriesDataSource$.next(categories)
  }
  public setAPI(APIs: DevResources[]){
    this.apiDataSource$.next(APIs)
  }
}

export let AllCardContent:Card[]=[
  {
    image: 'https://www.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg',
    type: 'icons',
    path: 'assets/icon',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur',
    date:"2024-07-21"
  },
  {
    image: 'https://www.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg',
    type: 'fonts',
    path: 'assets/fonts',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur',
    date:"2024-06-22"
  },
  {
    image: 'https://www.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg',
    type: 'icons',
    path: 'assets/icon',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur',
    date:"2024-07-21"
  },
  {
    image: 'https://www.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg',
    type: 'fonts',
    path: 'assets/fonts',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur',
    date:"2024-06-21"
  },
  {
    image: 'https://www.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg',
    type: 'icons',
    path: 'assets/icon',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur',
    date:"2024-07-21"
  },
  {
    image: 'https://www.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg',
    type: 'fonts',
    path: 'assets/fonts',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur',
    date:"2024-06-21"
  },
  {
    image: 'https://www.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg',
    type: 'icons',
    path: 'assets/icon',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur',
    date:"2024-07-21"
  },
  {
    image: 'https://www.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg',
    type: 'fonts',
    path: 'assets/fonts',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur',
    date:"2024-06-21"
  },

  {
    image: 'https://www.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg',
    type: 'audio',
    path: 'assets/icon',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur',
    date:"2024-2-21"
  },
  {
    image: 'https://www.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg',
    type: 'audio',
    path: 'assets/fonts',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur',
    date:"2024-06-21"
  }
]

