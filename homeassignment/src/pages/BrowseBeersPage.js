import Beers from '../components/Beers'
import { Fragment, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InputGroup, FormControl, Form, Row, Col, Button } from 'react-bootstrap';

const BrowseBeersPage = (props) => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchCartData());
    //   }, [dispatch]);

    const beerSearchInputRef = useRef();

    const searchClickHandle = () => {
        const searchInput = beerSearchInputRef.current.value;
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
                        <Button variant="outline-dark" size="nm" type="submit" className="mb-2" onClick={ searchClickHandle }>
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