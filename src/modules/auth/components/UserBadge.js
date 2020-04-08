import React from 'react'
import { useSelector } from 'react-redux'
import { getCurrentUserSelector } from '../redux/selectors'
import { Link } from 'react-router-dom';


import {
    UserAddOutlined,
  } from '@ant-design/icons';
const image = {
    width: 50,
    height: 50,
}
function UserBadge() {
    const user = useSelector(getCurrentUserSelector);
    if(!user) {
        return (
            <div>
                <UserAddOutlined />
                <Link to="/register">Register</Link> 
            </div> 
        )
    }
    return (
          <Link to="/edit">
            <div>
            {`${user.username}'s Profile`} 
                <img style={image} alt="Users Avatar" src={user.img}/>
            </div>
        </Link>
    )
}

export default UserBadge
