import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterqueryService {

  query$ = new Subject();

  constructor() { }

  public setQuery(query: string){
    this.query$.next(query)
  }
}
