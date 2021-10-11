import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessIcon from '@material-ui/icons/Business';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../features/userSlice';
import { auth } from '../fiebase';
function Header() {
    const dispatch = useDispatch();
    const logoutapp = () => {
        auth.signOut();
        dispatch(Logout());
    };
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />

                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={GroupIcon} title="My Network" />
                <HeaderOption Icon={BusinessIcon} title='Business' />
                <HeaderOption Icon={ChatIcon} title="My Chat" />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption Avator={true} alt="me" onClick={logoutapp} />

            </div>

        </div>
    )
}

export default Header
