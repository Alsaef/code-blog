import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/Auth/authSlice';
import toast from 'react-hot-toast';
import DefultHelmet from '../../DefultHelmet/DefultHelmet';
const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user:{email,isLoading,isError,error}}=useSelector(state=>state.auth)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const onSubmit = data => {
     const {email,password}=data
     
     dispatch(login({email:email,password:password}))
         
        console.log(data)
    };
 
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
        <div>
          <DefultHelmet></DefultHelmet>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
   
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">Sign in <span className='text-green-500'>Account</span></h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#" method="POST">
      <div>
        <label  className="block text-sm font-medium leading-6 text-balance">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email"  {...register("email", {required: true})} className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-cyan-600 shadow-sm ring-1 ring-inset outline-none ring-green-500  sm:text-sm sm:leading-6"/>
          {errors.email && <p className="text-red-500 text-sm mt-1">email is required</p>}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label  className="block text-sm font-medium leading-6 text-black">Password</label>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" {...register("password", {required: true})} className="block w-full rounded-md border-0 bg-white/5 py-1.5  shadow-sm ring-1 ring-inset outline-none ring-green-500  sm:text-sm sm:leading-6"/>
          {errors.password && <p className="text-red-500 text-sm mt-1">password is required</p>}
        </div>
      </div>
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Sign in</button>
      </div>
    </form>
     <div className='py-2 flex justify-center'> 
      <Link to='/reset-password'><button   className='text-green-400 '>Reset Password</button></Link>
     </div>
  <Link to='/singup'><p className='mt-2 underline cursor-pointer '>You Have Don't Account</p></Link>
  </div>
</div>
        </div>
    );
};

export default LoginPage;