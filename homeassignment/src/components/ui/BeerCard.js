import classes from './BeerCard.module.css';
// import { Card, Col} from 'react-bootstrap';
import { Container, CardGroup, Card, Row, Col, Dropdown, DropdownButton, SplitButton,  ButtonGroup, Form, ListGroup} from 'react-bootstrap';
import { IoStarOutline, IoStar } from  'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { itemsActions } from '../../store/items-slice';
import { Fragment } from 'react';
import BeerDropDownList  from './BeerDropDownList';
import BeerModal from '../BeerModal';
import { uiActions } from '../../store/ui-slice'



const BeerCard = (props) => {
  const dispatch = useDispatch();

  const { name, image_url, id } = props.item;

  const isFavorite = useSelector(state => state.beers.items.find(item => item.id === id).isFavorite);
  const isHover = useSelector(state => state.beers.items.find(item => item.id === id).isHover);


  let starIcon;
  let cardStyle;

    const styles = {
        card: {
          backgroundColor: '#B7E0F2',
          borderRadius: 30,
          padding: '3rem',

         // backgroundcolor: '#ffffff',
         // borderradius: '20px 20px 20px 100x',
          overflow: 'hidden',
         // webkitboxshadow: '0px 12px 18px -6px rgba(0,0,0,0.3)',
         // boxshadow: '0px 12px 18px -6px rgba(0,0,0,0.3)',
          margin: '15px',
         // marginbottom: '10px',

          width: '280px',
          height: '350px',
          maxheight: '40vh'
        },
        cardImage: {
          objectFit: 'cover',
          //borderRadius: 40,
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

    if (isFavorite) {
      // Clicked
      starIcon = <IoStar color="#FFFF00" size="1.8em" />;
    } else {
        // Not Clicked
        starIcon = <IoStarOutline size="1.8em" />;
    }

    if (isHover) {
      cardStyle = "shadow-lg bg-white";
    } else {
      cardStyle = "bg-white"
    }

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