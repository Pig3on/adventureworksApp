import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import {
    HomeOutlined,
    LoginOutlined
  } from '@ant-design/icons';
import { UserBadge } from '../../auth';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../auth/redux/actions';
import { getCurrentUserSelector } from '../../auth/redux/selectors';

const NavbarUi = () => {
    const [current,setCurrent] = useState('');
    
      const handleClick = e => {    
        setCurrent(e.key);
      };
      const currentUser = useSelector(getCurrentUserSelector);

      const dispatch = useDispatch();
    return (
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          <HomeOutlined/>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
            <UserBadge />
        </Menu.Item>
        {
          currentUser === null ?  <Menu.Item key="login">
          <LoginOutlined/>
          <Link to="/login">Login</Link>
        </Menu.Item> :
          <Menu.Item>
          <div onClick={()=> {dispatch(logout())}}>Logout</div>
        </Menu.Item>
        }
      
       
      </Menu>
    )
}

export default NavbarUi;