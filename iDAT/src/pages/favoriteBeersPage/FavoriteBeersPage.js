import { useDispatch, useSelector } from 'react-redux';
import FavoriteBeers from '../../components/favoriteBeers/FavoriteBeers'
import { Fragment } from 'react';
import { Button, Image } from 'react-bootstrap';
import { itemsActions } from '../../store/items-slice';
import classes from './FavoriteBeersPage.module.css'
import ModalWindow from '../../components/ui/modalWindow/ModalWindow';
import { uiActions } from '../../store/ui-slice';

const modalTitle = "Confirm Delete";
const modalBody = "Are you sure you want to remove all your favorites beers?";


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

    return (
        <Fragment>

            <div className={ classes.favoritesCards}>
            
                { isFavorite.length > 0 ? <div className={ classes.deleteAllFavorites }>
                                            <Button variant="outline-dark" className="mt-sm-4" size="nm" onClick={ deleteAllFavoritetHandler }>
                                                Delete All
                                            </Button> 
                                          </div> 
                                        :
                                        <div className="font-weight-bold text-center mt-sm-4">
                                            <Image src='Dashboard24H.JPG'></Image>
                                        </div>  

                }
           
                <ModalWindow  isShow={ deleteAllFavoriteVisible } title={ modalTitle } body= { modalBody } onCancel={ cancelModalHandler } onConfirm = { confirmModalHandler } 
                            onHide= { hideHandler}  isShowConfimButton= {true}/>                                

                <FavoriteBeers/>
            </div>

        </Fragment>
    );
  }
  
  export default FavoriteBeersPage;



  