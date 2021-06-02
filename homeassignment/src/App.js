import { Fragment, useEffect } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import BrowseBeersPage from './pages/BrowseBeersPage';
import FavoriteBeersPage from './pages/FavoriteBeersPage';
import Navigation from './components/layout/Navigation';
import { useSelector, useDispatch } from 'react-redux';
import { getBeerData } from './store/beer-actions';
import Notification from './components/ui/Notification/Notification';
import History from './components/History';


function App() {

  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getBeerData());
    }, [dispatch]);


  return (
    <div> 
     <Navigation/>

     <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      
      {/* <Router history={History}> */}
      <Switch>
        <Route path='/' exact>
          <BrowseBeersPage />
        </Route>
        <Route path='/browse' exact>
          <BrowseBeersPage />
        </Route>
        <Route path='/favorites' exact>
          <FavoriteBeersPage />
        </Route>
      </Switch>
      {/* </Router> */}


      </Fragment>
  
    </div>
  );
}

export default App;
