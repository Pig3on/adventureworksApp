import React from 'react'
import { useSelector } from 'react-redux'
import { getCurrentUserSelector } from '../redux/selectors'
import { Link } from 'react-router-dom';


const image = {
    width: 50,
    height: 50,
}
function UserBadge() {
    const user = useSelector(getCurrentUserSelector);
    if(!user) {
        return (
            <Link to="/register">Register</Link> 
        )
    }
    return (
        <div>
            {`${user.username}'s Profile`} 
            <img style={image} alt="Users Avatar" src={user.img}/>
        </div>
    )
}

export default UserBadge
