import { Fragment, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { render } from "react-dom";
import BrowseBeersPage from './pages/BrowseBeersPage';
import FavoriteBeersPage from './pages/FavoriteBeersPage';
import Navigation from './components/layout/Navigation';
import { useSelector, useDispatch } from 'react-redux';
import { getBeerData } from './store/beer-actions';
import Notification from './components/ui/Notification/Notification';

import useBeerFatch from './hooks/useBeerFatch';


function App() {

  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(getBeerData());
  //   }, [dispatch]);

  //useBeerFatch(pageNumber);


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
      <Router>
      <Switch>
        <Route path='/' exact render={() => {
                                        return (
                                          <Redirect to="/browse" /> 
                                        )
                                      }} >
        </Route>
        <Route path='/browse' exact>
          <BrowseBeersPage />
        </Route>
        <Route path='/favorites' exact>
          <FavoriteBeersPage />
        </Route>
      </Switch>
      </Router>


      </Fragment>
  
    </div>
  );
}

export default App;
