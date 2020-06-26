import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopapDialogModalComponent } from './popap-dialog-modal.component';

describe('PopapDialogModalComponent', () => {
  let component: PopapDialogModalComponent;
  let fixture: ComponentFixture<PopapDialogModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopapDialogModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopapDialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
