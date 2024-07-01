import React, { useEffect } from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase.config';
import { useDispatch } from 'react-redux';
import { getUser, setUser, toggle } from './features/Auth/authSlice';
import DisableDeveloperTools from './Security/DevTools';

const App = () => {
const dispatch=useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if (user) {
        dispatch(getUser(user.email))
        console.log(user)
      }else{
        dispatch(toggle())
      }
    })
  },[])

  return (
    <div>
 <DisableDeveloperTools/>
       <RouterProvider router={router} />
    </div>
  );
};

export default App;