
import { itemsActions } from './items-slice';
//import axios from 'axios';
import { uiActions } from './ui-slice';
import { API_URL } from '../api.model'

export const getBeerData = () => {
    return async (dispatch) => {
      const beerData = async () => {
        // const response = await fetch(API_URL.getBeerData);

        const response = await fetch('https://api.punkapi.com/v2/beers');

        if (!response.ok) {
          throw new Error('Could not fetch beer data!');
        }
  
        const data = await response.json();
  
        return data;
      };
  
      try {
        const allBeerData = await beerData();

        allBeerData.map(item => {
              item.isFavorite = false;
              item.Rank = '';
              item.isDetailsModalVisible = false;
            });

        dispatch(
            itemsActions.replaceAllItems({
            items: allBeerData || [],
          })
        
        );

        dispatch(
            uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Beer data Loaded Successfuly!',
          })
        );

      } catch (error) {
        dispatch(
            uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Fetching beer data failed!',
          })
        );
      }
    };
  };