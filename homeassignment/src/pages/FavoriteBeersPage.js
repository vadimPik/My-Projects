import { useDispatch, useSelector } from 'react-redux';
import FavoriteBeers from '../components/FavoriteBeers'
import { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { itemsActions } from '../store/items-slice';
import classes from './FavoriteBeersPage.module.css'
import ModalWindow from '../components/ui//ModalWindow';
import { uiActions } from '../store/ui-slice';


const FavoriteBeersPage = (props) => {
    const dispatch = useDispatch();
    const deleteAllFavoriteVisible = useSelector((state) => state.ui.deleteAllFavoriteVisible);
    const isFavorite = useSelector(state => state.beers.items.filter(item => item.isFavorite === true));

    const deleteAllFavoritetHandler = () => {
        dispatch(uiActions.changeDeleteAllModal(true));
    };
    
    const cancelModalHandler = () => {
        dispatch(uiActions.changeDeleteAllModal(false));
    };

    const confirmModalHandler = () => {
        dispatch(itemsActions.removeAllFavoriteItems());
        dispatch(uiActions.changeDeleteAllModal(false));
    };


    const hideHandler = () => {
        dispatch(uiActions.changeDeleteAllModal(false));
    }

    const modalTitle = "Confirm Delete";
    const modalBody = "Are you sure you want to remove all your favorites beers?";

    return (
        <Fragment>

            {/* { isFavorite.length > 0 && <div className={ classes.deleteAllFavorites }>
                                        <Button variant="outline-dark" size="lg" onClick={ deleteAllFavoritetHandler }>
                                            Delete All
                                        </Button> </div> 
            } */}

            <div className={ classes.deleteAllFavorites }>
                { isFavorite.length > 0 && <Button variant="outline-dark" size="lg" onClick={ deleteAllFavoritetHandler }>
                                                Delete All
                                            </Button> 
                }
            </div> 

 

            <ModalWindow  isShow={ deleteAllFavoriteVisible } title={ modalTitle } body= { modalBody } onCancel={ cancelModalHandler } onConfirm = { confirmModalHandler } 
                          onHide= { hideHandler}  isShowConfimButton= "true"/>                                

            <FavoriteBeers/>
            

        </Fragment>
    );
  }
  
  export default FavoriteBeersPage;



  