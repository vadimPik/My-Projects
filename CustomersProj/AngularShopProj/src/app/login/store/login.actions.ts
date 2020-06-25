import { Action } from '@ngrx/store';
import { User, UserDetails } from '../login.model';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN SUCCESS';
export const LOGIN_FAILED = 'LOGIN FAILED';
export const LOGIN_CLEAR = 'LOGIN CLEAR';

export const ADD_USER = '(LOGIN) ADD USER';
export const ADD_USER_SUCCESS = '(LOGIN) ADD USER SUCCESS';
export const ADD_USER_FAILED = '(LOGIN) ADD USER FAILED';

export class LoginAction implements Action {
    readonly type = LOGIN;
  
    constructor(public payload: User) { }
}

export class LoginSuccessAction implements Action {
    readonly type = LOGIN_SUCCESS;
  
    constructor(public payload: UserDetails) { }
}


export class LoginFailedAction implements Action {
    readonly type = LOGIN_FAILED;
  
    constructor(public payload: UserDetails) { }
}

export class LoginClearAction implements Action {
    readonly type = LOGIN_CLEAR;
  
    constructor(public payload: Response) { }
}

export class AddUserAction implements Action {
    readonly type = ADD_USER;
  
    constructor(public payload: UserDetails) { }
}

export class AddUserSuccessAction implements Action {
    readonly type = ADD_USER_SUCCESS;
  
    constructor(public payload: UserDetails) { }
}

export class AddUserFailedAction implements Action {
    readonly type = ADD_USER_FAILED;
  
    constructor(public payload: string) { }
}

export type All
  = LoginAction
  | LoginSuccessAction
  | LoginFailedAction
  | LoginClearAction
  | AddUserAction
  | AddUserSuccessAction
  | AddUserFailedAction
