import classes from './BeerCard.module.css';
// import { Card, Col} from 'react-bootstrap';
import { Container, CardGroup, Card, Row, Col, Dropdown, DropdownButton, SplitButton,  ButtonGroup, Form, ListGroup} from 'react-bootstrap';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { MdStar } from 'react-icons/md';
import { IoStarOutline, IoStar } from  'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { itemsActions } from '../../store/items-slice';
import { Fragment } from 'react';
import BeerDropDownList  from './BeerDropDownList';
import ModalWindow from './ModalWindow';



const BeerCard = (props) => {
  const dispatch = useDispatch();

  const { name, image_url, id, description, brewers_tips, contributed_by, first_brewed, food_pairing } = props.item;

  //const isFavorite = useSelector(state => state.beers.items.filter(item => item.id === props.item.id).isFavorite);
  const isFavorite = useSelector(state => state.beers.items.filter(item => item.id === id)[0].isFavorite);
  const isShowDetails = useSelector(state => state.beers.items.filter(item => item.id === id)[0].isDetailsModalVisible);


  let starIcon;
  let dropDownRank;
    
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
        // cardTitle: {
        //     textalign: 'center'
        // }
      }

      
      
    // if (isLoggedIn) {
    //    starIcon = <IoStarOutline size="1.8em" className= { classes.starIcon }/>;
    // } else {
    //   // Clicked
    //    starIcon = <IoStar color="#FFFF00" size="1.8em" className= { classes.starIcon}/>;
    // }

          
  //  if (props.isNeedRank) {
  //     dropDownRank =  
  //     <Fragment>
  //       <span className={ classes.rankTtile }>Rank</span>

  //       <BeerDropDownList id={id} onClick={ dropDownClickHandler } />

  //     </Fragment>;

  //  } else {
  //     dropDownRank = null;
  //  }


    if (isFavorite) {
      // Clicked
      starIcon = <IoStar color="#FFFF00" size="1.8em" />;
   } else {
      // Not Clicked
      starIcon = <IoStarOutline size="1.8em" />;
   }

   const dropDownClickHandler = (event) => {
      event.stopPropagation();
   };


    const toggleFavoriteHandler = (event) => {
      event.stopPropagation();
      dispatch(itemsActions.toggleFavorites(id));
    };

    const detailsClickHandler = () => {
      dispatch(itemsActions.changeDetailsWindowVisble({id: id, isVisible: true}));
    };

    const confirmModalHandler = () => {

    };

    const cancelModalHandler = () => {
      dispatch(itemsActions.changeDetailsWindowVisble({id: id, isVisible: false}));
    };

    const hideHandler = () => {
      dispatch(itemsActions.changeDetailsWindowVisble({id: id, isVisible: false}));
    };

  // const modalBody = "Name:"+  {props.see.name}<br> +  "Age: " +  {props.see.age} <br>;

    const pairingFood = food_pairing.map((data) => <li>{data}</li>);
 
    const modalBody =   <Form.Group column sm="2">
                          <Form.Label className="font-weight-bold">Desctiption</Form.Label>
                          <Col>
                            <Form.Control plaintext readOnly defaultValue={ description } />
                          </Col>  

                          <Form.Label className="font-weight-bold">Brewers tips</Form.Label>
                          <Col>
                            <Form.Control plaintext readOnly defaultValue={ brewers_tips } />
                          </Col> 

                          <Form.Label className="font-weight-bold">Contributed By</Form.Label>
                          <Col>
                            <Form.Control plaintext readOnly defaultValue={ contributed_by } />
                          </Col> 

                          <Form.Label className="font-weight-bold">First Brewed</Form.Label>
                          <Col>
                            <Form.Control plaintext readOnly defaultValue={ first_brewed } />
                          </Col> 

                          <Form.Label className="font-weight-bold">Food Pairing</Form.Label>
                          <Col>
                          <ul>{ pairingFood }</ul>
                            {/* <Form.Control plaintext readOnly defaultValue={ pairingFood } /> */}
                          </Col>  
                        </Form.Group>;


    return (
            <div style={styles.cardParent }>
            
            <Col>
                <Card  key={id} className="shadow-lg bg-white"  style={styles.card} onClick={ detailsClickHandler }> 

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



            <ModalWindow  isShow={ isShowDetails } title={ name }  body= { modalBody } onCancel={ cancelModalHandler } onConfirm = { confirmModalHandler } 
                          onHide= { hideHandler}  isShowConfimButton= {false} size="xl"/>                            

            </div>
    );
  };
  
  export default BeerCard;