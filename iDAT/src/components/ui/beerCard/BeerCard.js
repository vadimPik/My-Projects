import classes from './BeerCard.module.css';
import { Card, Col} from 'react-bootstrap';
import { IoStarOutline, IoStar } from  'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { itemsActions } from '../../../store/items-slice';
import { Fragment } from 'react';
import BeerDropDownList  from '../beerDropDownList/BeerDropDownList';
import BeerModal from '../../beerModal/BeerModal';
import { uiActions } from '../../../store/ui-slice'



const styles = {
  card: {
    backgroundColor: '#B7E0F2',
    borderRadius: 30,
    padding: '3rem',
    overflow: 'hidden',
    margin: '15px',
    width: '280px',
    height: '350px',
    maxheight: '40vh'
  },
  cardImage: {
    objectFit: 'cover',
    height: '12rem',
    width: '3.5rem',
  
    display: 'block',
    margin: '0 auto'
  },
  cardParent: {
      height: '25rem',
      width: '23rem'
  },
  starIcon: {
     margintop: '-43rem',
     marginleft: '15rem'
  }
}

const getFavoriteIcon = (isFavorite) => {
    if (isFavorite) {
      // Clicked
      return <IoStar color="#FFFF00" size="1.8em" />;
    } else {
      // Not Clicked
      return <IoStarOutline size="1.8em" />;
    }
};

const getHoverStyle = (isHover) => {
    if (isHover) {
      return "shadow-lg bg-white";
    } else {
      return "bg-white"
    };
};


const BeerCard = (props) => {
  const dispatch = useDispatch();

  const { name, image_url, id } = props.item;

  const isFavorite = useSelector(state => state.beers.items.find(item => item.id === id).isFavorite);
  const isHover = useSelector(state => state.beers.items.find(item => item.id === id).isHover);

  const starIcon = getFavoriteIcon(isFavorite); 
  const cardStyle = getHoverStyle(isHover);

  const dropDownClickHandler = (event) => {
      event.stopPropagation();
  };

  const toggleFavoriteHandler = (event) => {
    event.stopPropagation();
    dispatch(itemsActions.toggleFavorites(id));

    dispatch(
      uiActions.showNotification({
      status: 'success',
      title: 'Success!',
      message: 'Beer added to favorites',
    }));
  };

  const detailsClickHandler = () => {
    dispatch(itemsActions.changeDetailsWindowVisble({id: id, isVisible: true}));
  };

  const mouseOverHandler = () => {
    dispatch(itemsActions.toggleHover(id));
  };

  const mouseOutHandler = () => {
    dispatch(itemsActions.toggleHover(id));
  };

  return (
          <div style={styles.cardParent }>
          
          <Col>
              <Card  key={id} className={ cardStyle }   style={styles.card} onClick={ detailsClickHandler } onMouseOver={ mouseOverHandler } onMouseOut={ mouseOutHandler } > 

                { props.isNeedRank  &&   
                    <Fragment>
                      <span className={ classes.rankTtile }>Rank</span>
                      <BeerDropDownList id={id} onClick={ dropDownClickHandler } />
                    </Fragment> }
              

                <button className= { classes.starIcon } onClick={toggleFavoriteHandler}>
                  { starIcon }
                </button>

                <Card.Img variant="top" src={image_url}  style={styles.cardImage}/>
                <Card.Body className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold text-center">{name} </Card.Title>
                </Card.Body>
              </Card>
          </Col>

          <BeerModal item={props.item} key={props.item.id}/>                       

          </div>
    );
  };
  
  export default BeerCard;