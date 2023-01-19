import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-newwebsite',
  templateUrl: './newwebsite.component.html',
  styleUrls: ['./newwebsite.component.scss']
})
export class NewwebsiteComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['Assets > Audio', 'Assets > fonts'];
  filteredOptions?: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
}
}
