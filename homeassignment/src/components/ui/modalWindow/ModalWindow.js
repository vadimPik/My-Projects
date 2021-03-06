import classes from './ModalWindow.module.css';
import { Container, CardGroup, Card, Row, Col, Dropdown, DropdownButton, SplitButton,  ButtonGroup, Form, Button} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { itemsActions } from '../../../store/items-slice';
import Modal from 'react-bootstrap/Modal';
import { Fragment } from 'react';

const ModalWindow = (props) => {

      return (
        <div className={ classes.modal }>

            <Modal show={ props.isShow } onHide={ props.onHide } size={ props.size }>
                <Modal.Header closeButton>
                <Modal.Title>{ props.title }</Modal.Title>
                </Modal.Header> 
                <Modal.Body>{ props.body }</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ props.onCancel }>Close</Button>
                    {  props.isShowConfimButton && <Button variant="primary" onClick= { props.onConfirm } >Confirm</Button>}
                </Modal.Footer>
            </Modal>
        </div>
      );
};

  export default ModalWindow;