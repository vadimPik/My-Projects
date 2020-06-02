import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from './login.model';
import { LoginAction } from './store/login.actions';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    private store: Store<any>) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.login = this.fb.group({
      userName: new FormControl('', [this.credentialValidator.bind(this)]),
      password: new FormControl('', [this.credentialValidator.bind(this)]),
    });
  }

  //Validate that the input not empty
  credentialValidator(control: AbstractControl): { [key: string]: boolean } {
    if (control.value.trim() !== '') {
      return null;
    }

    return { credentialNotValid: true };
  }

  onFormKeyDown(event): void {
    if (this.login.valid && event.keyCode === 13) {
      this.onLogin();
    }
  }

  onLogin(): any {
    try {
      const loginValues: User = {
        userName: this.login.value.userName,
        password: this.login.value.password
      };

      this.store.dispatch(new LoginAction(loginValues));
      
    } catch (exception) {
    }
  }

}
