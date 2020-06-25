import { AppRootState } from 'src/app/reducers';

export const loginSelector = (state: AppRootState) => state.userDetails;