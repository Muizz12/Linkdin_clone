import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Logins, selectUser } from '../features/userSlice';
import './Sidebar.css'
function Sidebar() {
    const Selector = useSelector(selectUser);
    function recentItems(topic) {
        return (
            <div className="sidebar__recentItem">
                <span className='sidebar__hash'>#</span>
                <p>{topic}</p>
            </div>
        )



    }
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://www.filmibeat.com/ph-big/2021/04/janhvi-kapoor-hot-pics_161794364311.jpg" alt="" />
                <Avatar className="sidebar__avatar" src={Selector.photoURL}>{Selector.email[0]}</Avatar>
                <h2>{Selector.displayName}</h2>
                <h4>{Selector.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__sts">
                    <p>Who you viewed</p>
                    <p className="sidebar__statNumber">23454</p>

                </div>
                <div className="sidebar__sts">
                    <p>Views on Post</p>
                    <p className="sidebar__statNumber">23454</p>

                </div>

            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItems("Reactjs")}
                {recentItems("Programming")}
                {recentItems("Sowftware Engineeering")}
                {recentItems("Desgin")}
                {recentItems("Reactjs")}


            </div>

        </div>
    )
}

export default Sidebar
