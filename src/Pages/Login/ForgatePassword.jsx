import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.config';
import toast from 'react-hot-toast';
import { sendPasswordResetEmail } from "firebase/auth";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ForgatePassword = () => {
    const {user:{email,isLoading,isError,error}}=useSelector(state=>state.auth)
    const [isEmail, setisEmail] = useState('');
    const navigate=useNavigate()
    const handelForgate = () => {
        sendPasswordResetEmail(auth, isEmail).then(() => {
            toast.success('Password reset email sent successfully!', { id: 'ForgotPassword' });
        }).catch(() => {
            console.log(error)
            toast.error(error, { id: 'ForgotPassword' });
        })
    }
    useEffect(()=>{
        if (!isLoading&&email) {
          navigate('/')
          toast.success('success',{id:'LoginUser'})
        }
        if (!isLoading&&!email&&isError) {
          navigate('/')
          toast.error(error,{id:'LoginUser'})
        }
        
      },[isLoading,email,isError,error])
    return (
        <div className='mt-10'>
            <div className='mx-auto w-[50%]'>
                <label className="block text-sm font-medium leading-6 text-balance">Email address</label>
                <div className="mt-2">
                    <input id="email" onChange={(e)=>{setisEmail(e.target.value)}} name="email" type="email" className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-cyan-600 shadow-sm ring-1 ring-inset outline-none ring-green-500  sm:text-sm sm:leading-6" />
                </div>
                <button onClick={handelForgate} className='py-2 text-green-700 underline'>Forgate Password</button>
            </div>
        </div>
    );
};

export default ForgatePassword;