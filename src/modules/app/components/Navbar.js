import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import {
    HomeOutlined,
    ContactsOutlined,
    LoginOutlined,
  } from '@ant-design/icons';

const NavbarUi = () => {
    const [current,setCurrent] = useState('');
    
      const handleClick = e => {    
        setCurrent(e.key);
      };
    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          <HomeOutlined/>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <LoginOutlined />
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu>
    )
}

export default NavbarUi;