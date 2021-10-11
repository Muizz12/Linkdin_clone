import React, { useEffect } from 'react';
import './app.css';
import Feed from './Componets/Feed';
import Header from './Componets/Header';
import Sidebar from './Componets/Sidebar';
import { Logins, Logout, selectUser } from './features/userSlice';
import Login from './Componets/Login';
import { useDispatch, useSelector } from "react-redux"
import { auth } from './fiebase';
import Widgets from './Componets/Widgets';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(Logins({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
        }))

      } else {
        dispatch(Logout())

      }
    })

  }, [])
  return (
    <div className="app">
      <Header />
      {
        !user
          ?
          (
            <Login />
          )
          :
          (
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          )

      }




      {/* leftBar */}
      {/* feed */}
      {/* rightbar */}

    </div>
  );
}

export default App;
