import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { AppRootState } from 'src/app/reducers';




@Component({
  selector: 'app-shop-view-shell',
  templateUrl: './shop-view-shell.component.html',
  styleUrls: ['./shop-view-shell.component.scss']
})
export class ShopViewShellComponent implements OnInit {

  userName$: string = '';
  public pageSize: number = 20;
  
  constructor(private store: Store<AppRootState>, private actions$: Actions) {}

  ngOnInit() {

  }

}
