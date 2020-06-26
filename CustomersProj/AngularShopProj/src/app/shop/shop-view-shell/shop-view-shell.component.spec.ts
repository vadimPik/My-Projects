import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopViewShellComponent } from './shop-view-shell.component';
import { CustomersListComponent } from '../shopping-list/customers-list.component';


describe('ShopViewShellComponent', () => {
  let component: ShopViewShellComponent;
  let fixture: ComponentFixture<ShopViewShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopViewShellComponent, CustomersListComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopViewShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
