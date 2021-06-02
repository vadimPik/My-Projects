import Beers from '../components/Beers'
import { Fragment, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { InputGroup, FormControl, Form, Row, Col, Button } from 'react-bootstrap';

let searchParam;

const BrowseBeersPage = (props) => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchCartData());
    //   }, [dispatch]);
    

    const history = useHistory();
    const location = useLocation();
    const beerSearchInputRef = useRef();

    const searchParam = new URLSearchParams(location.search).get('search');

    useEffect(() => {
        dispatch(getSearchedBeerData(searchParam));
      }, [dispatch, searchParam]);

    const searchClickHandle = () => {
        const searchParamInput = beerSearchInputRef.current.value;
        history.push('/browse?search=' + searchParamInput);

        useEffect(() => {
            dispatch(getSearchedBeerData(searchParamInput));
          }, [dispatch]);
    };

    return (
        <Fragment>

            <Form className="mt-sm-4 pl-sm-5">
                <Row className="align-items-center ">
                    <Col xs="auto">
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            placeholder="Food Pairing"
                            ref = { beerSearchInputRef }
                            //value = "ddd"
                        />
                    </Col>
                    <Col xs="auto">
                        {/* <Button variant="outline-dark" size="nm" type="submit" className="mb-2" onClick={ searchClickHandle }> */}
                        <Button variant="outline-dark" size="nm" className="mb-2" onClick={ searchClickHandle }>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>

          <Beers />
      </Fragment>
    );
}

export default BrowseBeersPage;