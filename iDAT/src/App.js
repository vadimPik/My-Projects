import { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import BrowseBeersPage from './pages/browseBeersPage/BrowseBeersPage';
import FavoriteBeersPage from './pages/favoriteBeersPage/FavoriteBeersPage';
import Navigation from './components/layout/navigation/Navigation';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './components/ui/Notification/Notification';
import { BrowserRouter as Router } from 'react-router-dom';
import classes from './App.module.css';

import 'react-bootstrap-drawer/lib/style.css';
import React, { useState } from 'react';
import {
	Col,
	Collapse,
	Container,
	Row,
} from 'react-bootstrap';
import { Drawer, } from 'react-bootstrap-drawer';

function App() {
  const notification = useSelector((state) => state.ui.notification);

  return (
    <div className={classes.flexcontainer}>

    {/* <div className={classes.flexchild}> */}
      <Navigation/>
    {/* </div> */}

    <div className={classes.flexchild}>
      <Fragment>
      {/* {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )} */}

        <Switch>
          <Route path='/' exact render={() => {
                                          return (
                                            <Redirect to="/dashboard" /> 
                                          )
                                        }} >
          </Route>
          <Route path='/message' exact>
            <BrowseBeersPage />
          </Route>
          <Route path='/dashboard' exact>
            <FavoriteBeersPage />
          </Route>
        </Switch>
  
        </Fragment>
      </div>
  
    </div>
  );
};

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navigation />
//       </div>
//     </Router>
//   );
// }

export default App;
