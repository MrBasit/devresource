import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterqueryService {

  query$ = new Subject();
  categoriesDataSource$ = new Subject<DevResources[]>();
  apiDataSource$ = new Subject<DevResources[]>();

  constructor() { 
  }

  public setQuery(query: string){
    this.query$.next(query)
  }

  public setCategories(categories: DevResources[]){
    this.categoriesDataSource$.next(categories)
  }
  public setAPI(APIs: DevResources[]){
    this.apiDataSource$.next(APIs)
  }
}

