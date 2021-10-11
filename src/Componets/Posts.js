import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOptions from './InputOptions'
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import './Posts.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
function Posts({ name, description, message, photoURL }) {
    return (
        <div className="posts">
            <div className="posts__header">
                <Avatar src={photoURL} />
                <div className="posts__info">
                    <h2>{name}</h2>
                    <p>{description}</p>

                </div>
            </div>
            <div className="posts__body">
                <p>{message}</p>
            </div>
            <div className="posts__button">
                <InputOptions title='Like' Icon={ThumbUpAltOutlinedIcon} color='gray' />
                <InputOptions title='Comment' Icon={ChatOutlinedIcon} color='gray' />
                <InputOptions title='Share' Icon={ShareOutlinedIcon} color='gray' />
                <InputOptions title='Send' Icon={SendOutlinedIcon} color='gray' />

            </div>

        </div>
    )
}

export default Posts
