import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import {
  HomeOutlined,
  LoginOutlined
} from '@ant-design/icons';
import { UserBadge, useAuth } from '../../auth';
import { useDispatch } from 'react-redux';
import { logout } from '../../auth/redux/actions';


const NavbarUi = () => {
  const [current, setCurrent] = useState('');
  const { isLoggedIn } = useAuth();
  const handleClick = e => {
    setCurrent(e.key);
  };

  const dispatch = useDispatch();
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme={"dark"}>
      <Menu.Item key="home">
        <HomeOutlined />
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <UserBadge />
      </Menu.Item>
      {
        !isLoggedIn ? <Menu.Item key="login">
          <LoginOutlined />
          <Link to="/login">Login</Link>
        </Menu.Item> :
          <Menu.Item>
            <div onClick={() => { dispatch(logout()) }}>Logout</div>
          </Menu.Item>
      }


    </Menu>
  )
}

export default NavbarUi;