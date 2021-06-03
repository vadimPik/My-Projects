
import { itemsActions } from './items-slice';
import { uiActions } from './ui-slice';

// In this project i used "redux-toolkit"- it is a redux package for react that wrap the state and give a ability to write "normal" - without the ability to change the state wrongly.
//Documentation: https://redux-toolkit.js.org/introduction/getting-started

  export const getSearchedBeerData = (searchParam) => {

    return async (dispatch) => {
      const beerData = async () => {

        const response = await fetch('https://api.punkapi.com/v2/beers?food=' + searchParam);

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
              item.isHover = false;
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