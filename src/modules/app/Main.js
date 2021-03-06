import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from './components/Navbar';
import { CustomerScreen } from '../customer';
import { ItemList } from '../items';
import RegisterScreen from '../auth/screens/RegisterScreen';
import LoginScreen from '../auth/screens/LoginScreen';
import { createBrowserHistory } from 'history';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;
export const history = createBrowserHistory();
export const MainApp = () => {
  return (
    <BrowserRouter history={history}>
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content style={{ padding: '0 50px' }} >
          <Switch>
            <Route exact path="/" component={CustomerScreen} />
            <Route component={RegisterScreen} exact path="/register" />
            <Route component={LoginScreen} exact path="/login" />
            <Route exact path="/edit">
              <RegisterScreen edit />
            </Route>
            <Route exact component={ItemList} path="/billitems/:id" />
          </Switch>
        </Content>
        <Footer style={{ position: 'sticky' }}>
          &copy; Algebra
            </Footer>
      </Layout>
    </BrowserRouter>
  )
}