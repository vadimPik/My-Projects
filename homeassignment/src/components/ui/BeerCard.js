import classes from './BeerCard.module.css';
// import { Card, Col} from 'react-bootstrap';
import { Container, CardGroup, Card, Row, Col, Dropdown, DropdownButton, SplitButton,  ButtonGroup, Form} from 'react-bootstrap';
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

  const { name, image_url, id } = props.item;

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

          
   if (props.isNeedRank) {
      dropDownRank =  
      // <Select aria-label="Default select example">
      //   <option>Open this select menu</option>
      //   <option value="1">One</option>
      //   <option value="2">Two</option>
      //   <option value="3">Three</option>
      // </Select>;


      <Fragment>
        <span className={ classes.rankTtile }>Rank</span>

        <BeerDropDownList id={id} onClick={ dropDownClickHandler } />
{/* 
        <DropdownButton id="dropdown-basic-button" className={ classes.dropDownList } variant="outline-dark" focusFirstItemOnShow="true" onSelect={dropDownValueSelectedHandler} title="" size="lm">
        
        <Dropdown.Item>1</Dropdown.Item>
        <Dropdown.Item>2</Dropdown.Item>
        <Dropdown.Item>3</Dropdown.Item>
        <Dropdown.Item>4</Dropdown.Item>
        <Dropdown.Item>5</Dropdown.Item>
        
        </DropdownButton> */}
      </Fragment>;

   } else {
      dropDownRank = null;
   }


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

    const modalBody = "Are you sure you want to remove all your favorites beers?";


    return (
            <div style={styles.cardParent }>
            
            <Col  >
              
                {/* <Card  key={id} className="box" style={styles.card}> */}

                <Card  key={id} className="shadow-lg bg-white"  style={styles.card} onClick={ detailsClickHandler }> 

                 {/* <DropdownButton id="dropdown-basic-button" className= { classes.dropDownList } title="Dropdown button"  size="sm">
 
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
               
                </DropdownButton>  */}

                
                {/* {!isLoggedIn ? (
                  <IoStarOutline size="1.8em" className= { classes.starIcon }/>
                ) : (
                   <IoStar color="#FFFF00" size="1.8em" className= { classes.starIcon }/>
                )} */}

{/* <Form.Select size="sm">
    <option>Large select</option>
  </Form.Select> */}
                    
                  { dropDownRank }
               

                <button className= { classes.starIcon } onClick={toggleFavoriteHandler}>
                  { starIcon }
                </button>

                {/* <IoStarOutline size="1.8em" className= { classes.starIcon }/>

                <IoStar color="#FFFF00" size="1.8em" className= { classes.starIcon }/>
                 */}

                <Card.Img variant="top" src={image_url}  style={styles.cardImage}/>
                <Card.Body className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold text-center">{name} </Card.Title>
                    {/* <Card.Title style={styles.cardImage}>{props.item.name} </Card.Title> */}
                </Card.Body>
                
                 {/* <BsStar
                      // style={ styles.starIcon }
                      className= { classes.starIcon }/> */}

                </Card>
            </Col>
            {/* <Col className= { classes.starIcon }>
                <BsStar
                  // style={ styles.starIcon }
                  className= { classes.starIcon }/>
            </Col> */}

            <ModalWindow  isShow={ isShowDetails } title={ name }  body= { modalBody } onCancel={ cancelModalHandler } onConfirm = { confirmModalHandler } 
                          onHide= { hideHandler}  isShowConfimButton= {false}/>                            

               
            </div>

    );
  };
  
  export default BeerCard;