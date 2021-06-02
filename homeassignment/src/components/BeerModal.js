import ModalWindow from './ui/ModalWindow';
import { Fragment } from 'react';
import { itemsActions } from '../store/items-slice';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CardGroup, Card, Row, Col, Dropdown, DropdownButton, SplitButton,  ButtonGroup, Form, ListGroup} from 'react-bootstrap';



const BeerModal = (props) => {
    const dispatch = useDispatch();

    const { name, id, description, brewers_tips, contributed_by, first_brewed, food_pairing } = props.item;

    const isShowDetails = useSelector(state => state.beers.items.find(item => item.id === id).isDetailsModalVisible);

    const cancelModalHandler = () => {
        dispatch(itemsActions.changeDetailsWindowVisble({id: id, isVisible: false}));
    };
  
    const hideHandler = () => {
        dispatch(itemsActions.changeDetailsWindowVisble({id: id, isVisible: false}));
    };


    const pairingFood = food_pairing.map((data) => <li key={data}>{data}</li>);
 
    const modalBody =   <Form.Group>
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
                          </Col>  
                        </Form.Group>;

    return (
        <ModalWindow  isShow={ isShowDetails } title={ name }  body= { modalBody } onCancel={ cancelModalHandler } 
                      onHide= { hideHandler}  isShowConfimButton= {false} size="xl" key={id}/>  
    );

};


export default BeerModal;