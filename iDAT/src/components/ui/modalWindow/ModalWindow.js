import classes from './ModalWindow.module.css';
import { Container, CardGroup, Card, Row, Col, Dropdown, DropdownButton, SplitButton,  ButtonGroup, Form, Button, Tabs, Tab} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { itemsActions } from '../../../store/items-slice';
import Modal from 'react-bootstrap/Modal';
import { Fragment } from 'react';
import  XmlRender from '../xmlRender/XmlRender';
import React, {useState, useEffect} from 'react'

const styles = {
  mymodal: {
    padding: '1rem',
    width: '1000rem',
    zindex: '10',
    position: 'fixed',
    top: '20vh',
    left: 'calc(50% - 15rem)'
  }
}

const ModalWindow = (props) => {

      return (
       <div> 
            <Modal dialogClassName={classes.detailsModal} scrollable={true} show={ props.isShow } onHide={ props.onHide } size={ props.size }>
            {  !props.isShowTabs &&<Modal.Header closeButton>
                <Modal.Title>{ props.title }</Modal.Title>
                </Modal.Header> }
                <Modal.Body>
                {  props.isShowTabs &&  
                // <div style={{  position: '-webkit-sticky', position: 'sticky', top: '0' }}>
                  <div >
                  <Tabs className="fixed-top" className={classes.sticky} defaultActiveKey="message" id="uncontrolled-tab-example" className="mb-3">
                      <Tab eventKey="message" title="Message">
                        <div>{props.HL7result}</div>
                      </Tab>
                      <Tab eventKey="hdm" title="HDM">
                        <XmlRender hdrfile={props.HDMresult}/>
                      </Tab>
                      <Tab eventKey="cdr" title="CDR">
                        <XmlRender hdrfile={props.CDRresult}/>
                      </Tab>
                      <Tab className="fixed-top" eventKey="history" title="History">

                      </Tab>
                      <Tab eventKey="error" title="Error">
                        <div>message with the same Message ID is already loaded successfully in CDR</div>
                      </Tab>
                  </Tabs>
                  </div>}
                  { props.body }</Modal.Body>
                <Modal.Footer>
                    {/* <div className={classes.buttonLocation}>
                      <div >
                        <Button variant="primary" onClick={ props.onCancel }>Replay</Button>
                      </div>
                      <div >
                        <Button variant="primary" onClick={ props.onCancel }>Undo</Button>
                      </div>
                      <div >
                        <Button variant="primary" onClick={ props.onCancel }>Export</Button>
                      </div>
                    </div> */}

                    <Button variant="primary" onClick={ props.onCancel }>Replay</Button>
                    <Button variant="primary" onClick={ props.onCancel }>Undo</Button>
                    <Button variant="primary" onClick={ props.onCancel }>Export</Button>
                    <Button variant="secondary" onClick={ props.onCancel }>Close</Button>
                    {  props.isShowConfimButton && <Button variant="primary" onClick= { props.onConfirm } >Confirm</Button>}
                </Modal.Footer>
            </Modal>
        </div>
      );
};

  export default ModalWindow;