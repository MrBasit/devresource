import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewwebsiteComponent } from './newwebsite.component';

describe('NewwebsiteComponent', () => {
  let component: NewwebsiteComponent;
  let fixture: ComponentFixture<NewwebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewwebsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewwebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
