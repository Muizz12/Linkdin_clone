import { createSvgIcon } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css';
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOptions from './InputOptions';
import Posts from './Posts';
import { auth, db } from '../fiebase';
import firebase from 'firebase';
import { selectUser, userSlice } from '../features/userSlice';
import { useSelector } from 'react-redux';
function Feed() {
    const Selector = useSelector(selectUser)
    const [posts, setposts] = useState([])
    const [input, setinput] = useState('')
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setposts(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data(),
                    }

                )))

            })


    }, [])
    const sendpost = (event) => {
        event.preventDefault();
        db.collection('posts').add({
            name: Selector.displayName,
            description: Selector.email,
            message: input,
            photoURL: Selector.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        })
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} type="text" onChange={(e) => setinput(e.target.value)} />
                        <button onClick={sendpost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputoptions">
                    <InputOptions title="Photo" Icon={ImageIcon} color="#70B5F9" />
                    <InputOptions title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
                    <InputOptions title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
                    <InputOptions title="Write article" Icon={CalendarViewDayIcon} color="#7FC15E" />
                </div>
            </div>
            {posts.map(({ id, data: { name, description, message, photoURL } }) => (
                <Posts
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoURL={photoURL}
                />
            ))}

        </div>
    )
}

export default Feed
