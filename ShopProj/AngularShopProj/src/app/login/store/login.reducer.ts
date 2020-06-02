import * as fromLoginActions from './login.actions';
import { UserDetails } from '../login.model';

export type Action = fromLoginActions.All;

const INITIAL_STATE: UserDetails = {
    UserID: null,
    FirstName: null,
    LastName: null,
    Address: null,
    CreditCardNumber: null,
    CvvNumber: null,
    ExpiredInDate: null,
    LastLoginDate: null,
    ErrorMessage: null
};

export function LoginReducer(state: UserDetails = INITIAL_STATE, action: Action): UserDetails {
    switch (action.type) {

        case fromLoginActions.LOGIN_SUCCESS: {
            return { ...state, ...action.payload };
        }

        case fromLoginActions.LOGIN_FAILED: {
            return { ...state, ...action.payload };
        }

        case fromLoginActions.LOGIN_CLEAR: {
            return {
                UserID: null,
                FirstName: null,
                LastName: null,
                Address: null,
                CreditCardNumber: null,
                CvvNumber: null,
                ExpiredInDate: null,
                LastLoginDate: null,
                ErrorMessage: null
            };
        }

        case fromLoginActions.ADD_USER: {
            return { ...state, ...action.payload };
        }

        case fromLoginActions.ADD_USER_FAILED: {
            return { ...state, ErrorMessage: state.ErrorMessage};
        }

        case fromLoginActions.ADD_USER_SUCCESS: {
            return { ...state, ...action.payload };
        }

        default: {
            return state;
        }

    }
}
