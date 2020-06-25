import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopViewShellComponent } from './shop-view-shell.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ProductListComponent } from '../product-list/product-list.component';

describe('ShopViewShellComponent', () => {
  let component: ShopViewShellComponent;
  let fixture: ComponentFixture<ShopViewShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopViewShellComponent, ShoppingListComponent, ProductListComponent ]
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
