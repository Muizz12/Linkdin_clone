import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Logins } from '../features/userSlice';
import { auth } from '../fiebase';

import './Login.css'
function Login() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [name, setname] = useState('')
    const [picture, setpicture] = useState('')
    const dispatch = useDispatch();

    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch(Logins({
                    email: user.user.email,
                    uid: user.user.uid,
                    displayName: user.user.displayName,
                    photoURL: user.user.photoURL
                }))
            }).catch((error) => {
                alert(error)
            })

    };





    const register = () => {
        if (!name) {
            return alert('Enter full Name')
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                user.user.updateProfile({
                    displayName: name,
                    photoURL: picture,
                }).then(() => {
                    dispatch(Logins({
                        email: user.user.email,
                        uid: user.user.uid,
                        displayName: name,
                        photoURL: picture,

                    })

                    );

                })
            })
            .catch((error) => {
                alert(error)
            })

    };
    console.log("pic", picture);
    return (
        <div className='login'>
            <img
                src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png"
                alt="Linkedin main logo"
            />
            <form>
                <input value={name} onChange={(event) => setname(event.target.value)} type='text' placeholder='Full Name Required' />
                <input value={picture} onChange={(event) => setpicture(event.target.value)} type="text" placeholder='Profile pic URL' />
                <input value={email} onChange={(event) => setemail(event.target.value)} type="Email" placeholder='Enter your Email' />
                <input value={password} onChange={(event) => setpassword(event.target.value)} type="Password" placeholder='Enter your Password' />
                <button type="submit" onClick={login}>Signin</button>
            </form>
            <p>Not a Member
                <span className='login__register' onClick={register} > {" "}Register Now</span>
            </p>
        </div>
    )
}

export default Login
