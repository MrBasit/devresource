import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagewebsiteComponent } from './managewebsite.component';

describe('ManagewebsiteComponent', () => {
  let component: ManagewebsiteComponent;
  let fixture: ComponentFixture<ManagewebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagewebsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagewebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
