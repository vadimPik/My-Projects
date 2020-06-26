import {AppRootState} from '../../../reducers';

export const customersListSelector = (state: AppRootState) => state.customerList.Customers;
export const numberOfCustomersSelector = (state: AppRootState) => state.customerList.TotalCustomers;
