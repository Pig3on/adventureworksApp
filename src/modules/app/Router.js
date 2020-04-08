import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Navbar from './components/Navbar';
import { CustomerScreen } from '../customer';
import { ItemList } from '../items';
import RegisterScreen from '../auth/screens/RegisterScreen';
import LoginScreen from '../auth/screens/LoginScreen';


  export const MainRouter = () => {
      return(
          <Router>
              <Navbar />
              <Switch>
                <Route exact path="/">
                 <CustomerScreen />
                </Route>
                <Route component={RegisterScreen} exact path="/register" />
                <Route component={LoginScreen} exact path="/login" />
                <Route component={RegisterScreen} exact path="/edit" />
                <Route exact component={ItemList} path="/billitems/:id" />
                <Route path="/login">
                   <div>LoginRoute</div>
                </Route>
              </Switch>
          </Router>
      )
  }