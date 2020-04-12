import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import {browserHistory} from 'react-router';
import Navbar from './components/Navbar';
import { CustomerScreen } from '../customer';
import { ItemList } from '../items';
import RegisterScreen from '../auth/screens/RegisterScreen';
import LoginScreen from '../auth/screens/LoginScreen';

import { Layout } from 'antd';

import { createBrowserHistory } from 'history';

const { Header, Footer, Sider, Content } = Layout;

export const history = createBrowserHistory();

  export const MainRouter = () => {
      return(
          <Router history={history}>
            <Layout>
             <Header>
               <Navbar />
             </Header>
            <Content style={{ padding: '0 50px' }} >
            <Switch>
                <Route exact path="/">
                 <CustomerScreen />
                </Route>
                <Route component={RegisterScreen} exact path="/register" />
                <Route component={LoginScreen} exact path="/login" />
                <Route  exact path="/edit">
                    <RegisterScreen edit />
                </Route>
                <Route exact component={ItemList} path="/billitems/:id" />
             
              </Switch>
            </Content>
            <Footer>
              &copy; Algebra
            </Footer> 
            </Layout>
          </Router>
      )
  }