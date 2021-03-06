import Beers from '../../components/beers/Beers'
import { Fragment, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { InputGroup, FormControl, Form, Row, Col, Button } from 'react-bootstrap';
import SearchBeer from '../../components/ui/search/SearchBeer'
import { uiActions } from '../../store/ui-slice';
import ModalWindow from '../../components/ui/modalWindow/ModalWindow'
import classes from './BrowseBeersPage.module.css';



let searchParam;
const modalTitle = "Input empty";
const modalBody = "Please Enter food for start searching beer";

const BrowseBeersPage = (props) => {
     const dispatch = useDispatch();

     const searchValue = useSelector((state) => state.ui.searchValue);
     const isSearchEmptyModalVisible = useSelector((state) => state.ui.isSearchEmptyModalVisible);
    
    const history = useHistory();
    const location = useLocation();
    const beerSearchInputRef = useRef();

    useEffect(() => {
        searchParam = new URLSearchParams(location.search).get('search');
        
        if (searchParam && searchParam !== '' ){
            if (searchParam !== searchValue) {
                dispatch(uiActions.changSearchValue(searchParam));
            }
        }else {
            dispatch(uiActions.changSearchValue(''));
        }

        //eslint-disable-next-line
    }, []);

    const cancelModalHandler = () => {
        dispatch(uiActions.changeSearchEmptyWindowVisble(false));
    };

    const hideHandler = () => {
        dispatch(uiActions.changeSearchEmptyWindowVisble(false));
    };

    const searchClickHandle = () => {
        searchParam = beerSearchInputRef.current.value;
        history.push('/browse?search=' + searchParam);

        if (searchParam && searchParam !== '' ) {
            if (searchParam !== searchValue ) {
                dispatch(uiActions.changSearchValue(searchParam));
            }
        } else {
            dispatch(uiActions.changeSearchEmptyWindowVisble(true));
            dispatch(uiActions.changSearchValue(''));
        }
    };

    return (
        <Fragment>
            <div className={classes.browseCards}>
                <Form className="mt-sm-4 pl-sm-5">
                    <Row className="align-items-center ">
                        <Col xs="auto">
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Food Pairing"
                                ref = { beerSearchInputRef }
                            />
                        </Col>
                        <Col xs="auto">
                            <Button variant="outline-dark" size="nm" className="mb-2" onClick={ searchClickHandle } >
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>

                <ModalWindow  isShow={ isSearchEmptyModalVisible } title={ modalTitle } body= { modalBody } onCancel={ cancelModalHandler } 
                    onHide= { hideHandler}  isShowConfimButton= {false}/>   

                { searchValue !== '' && <SearchBeer searchParam={ searchParam } location={ location }/>}

                <Beers />
            </div>
      </Fragment>
    );
}

export default BrowseBeersPage;