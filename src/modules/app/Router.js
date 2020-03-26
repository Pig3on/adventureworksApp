import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Navbar from './components/Navbar';
import { CustomerScreen } from '../customer';


  export const MainRouter = () => {
      return(
          <Router>
              <Navbar />
           
              <Switch>
              <Route exact path="/">
                 <CustomerScreen />
                </Route>
                <Route path="/contacts">
                    <div>Another route</div>
                </Route>
                <Route path="/login">
                   <div>LoginRoute</div>
                </Route>
              </Switch>
          </Router>
      )
  }