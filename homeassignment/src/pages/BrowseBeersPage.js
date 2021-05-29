import Beers from '../components/Beers'
import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function BrowseBeersPage() {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchCartData());
    //   }, [dispatch]);


    return (
        <Fragment>
            <div>Browse Beers</div>

          <Beers />
      </Fragment>
    );
}

export default BrowseBeersPage;