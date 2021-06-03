import ModalWindow from './ui/ModalWindow';
import { itemsActions } from '../store/items-slice';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Form} from 'react-bootstrap';


const getModalBody = (description, brewers_tips, contributed_by, first_brewed, pairingFood) => {
    return   <Form.Group>
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
};

const createListOfFoodParing = (food_pairing) => {
    return food_pairing.map((data) => <li key={data}>{data}</li>);
};

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

    const pairingFood = createListOfFoodParing(food_pairing);
    const modalBody = getModalBody(description, brewers_tips, contributed_by, first_brewed, pairingFood);
    
    return (
        <ModalWindow  isShow={ isShowDetails } title={ name }  body= { modalBody } onCancel={ cancelModalHandler } 
                      onHide= { hideHandler}  isShowConfimButton= {false} size="xl" key={id}/>  
    );
};


export default BeerModal;