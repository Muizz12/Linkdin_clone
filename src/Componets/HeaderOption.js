import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './Headeroption.css'
function HeaderOption({ Avator, Icon, title, onClick }) {
    const Selector = useSelector(selectUser);

    return (
        <div className="headeroption" onClick={onClick}>
            {Icon && <Icon className="headeroption__icon" />}
            {
                Avator && <Avatar className="headeroption__icon" src={Selector?.photoURL}> {Selector?.email[0]}</Avatar>
            }
            <h3 className="headeroption__title">{title}</h3>

        </div>
    )
}

export default HeaderOption
