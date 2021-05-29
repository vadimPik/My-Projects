import { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import BrowseBeersPage from './pages/BrowseBeersPage';
import FavoriteBeersPage from './pages/FavoriteBeersPage';
import Navigation from './components/layout/Navigation';
import { useSelector, useDispatch } from 'react-redux';
import { getBeerData } from './store/beer-actions';
import Notification from './components/ui/Notification/Notification';


function App() {

  const notification = useSelector((state) => state.notification.notification);

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

      </Fragment>
  
    </div>
  );
}

export default App;
