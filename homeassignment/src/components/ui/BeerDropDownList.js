import classes from './BeerDropDownList.module.css';
import { Container, CardGroup, Card, Row, Col, Dropdown, DropdownButton, SplitButton,  ButtonGroup, Form} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { itemsActions } from '../../store/items-slice';

const BeerDropDownList = (props) => {
    const itemRank = useSelector(state => state.beers.items.find(item => item.id === props.id).Rank);
    const dispatch = useDispatch();



const dropDownValueSelectedHandler = (event) => {
    dispatch(itemsActions.addRankValue({id: props.id, rankValue: event}));
};


      return (
        <DropdownButton id="dropdown-rank" className={ classes.dropDownList } variant="outline-dark" focusFirstItemOnShow="true" onSelect={dropDownValueSelectedHandler} title={ itemRank } onClick={ props.onClick }  >
        
        <Dropdown.Item eventKey="1">1</Dropdown.Item>
        <Dropdown.Item eventKey="2">2</Dropdown.Item>
        <Dropdown.Item eventKey="3">3</Dropdown.Item>
        <Dropdown.Item eventKey="4">4</Dropdown.Item>
        <Dropdown.Item eventKey="5">5</Dropdown.Item>
        <Dropdown.Divider />
        
        </DropdownButton>

      );
};

  export default BeerDropDownList;