import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { createAccount } from '../../features/Auth/authSlice';
import { useCreateUserMutation } from '../../features/Auth/authApi';
import DefultHelmet from '../../DefultHelmet/DefultHelmet';
const SingUp = () => {
    const apiKey=import.meta.env.VITE_PHOTOKEY
    console.log(apiKey)
    const {user:{email,isLoading}}=useSelector(state=>state.auth)
   const [createUser]=useCreateUserMutation()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const ImageApi=`https://api.imgbb.com/1/upload?key=${apiKey}`// add your api key
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const onSubmit = data => {
        const formData= new FormData();
        formData.append('image',data.image[0])
        fetch(ImageApi,{
         method:"POST",
         body:formData
        })
        .then(res=>res.json())
        .then(imageResponse=> {
            console.log(imageResponse)
            if(imageResponse.success){
                const ImageUrl=imageResponse.data.display_url
                const {name,email,password}=data
                const users={
                    name:name,
                    email:email,
                    image:ImageUrl,
                    role:'user'
                }
               console.log(users)
                dispatch(createAccount({email:email,password:password}))
                createUser(users)
                reset()
              }
        })    
     
    
    };


    useEffect(()=>{
      if (!isLoading&&email) {
        navigate('/')
      }
    },[isLoading,email])

    return (
        <div>
          <DefultHelmet></DefultHelmet>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
   
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">Sign up  <span className='text-green-500'>Account</span></h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#" method="POST">
      <div>
        <label className="block text-sm font-medium leading-6 text-balance">Name</label>
        <div className="mt-2">
          <input id="name" name="name" type="text" {...register("name", {required: true})} className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-cyan-600 shadow-sm ring-1 ring-inset outline-none ring-green-500  sm:text-sm sm:leading-6"/>
          {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 text-balance">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email"   {...register("email", {required: true})}  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-cyan-600 shadow-sm ring-1 ring-inset outline-none ring-green-500  sm:text-sm sm:leading-6"/>
          {errors.email && <p className="text-red-500 text-sm mt-1">email is required</p>}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium leading-6 text-black">Password</label>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password"   {...register("password", {required: true})}  className="block w-full rounded-md border-0 bg-white/5 py-1.5  shadow-sm ring-1 ring-inset outline-none ring-green-500  sm:text-sm sm:leading-6"/>
          {errors.password && <p className="text-red-500 text-sm mt-1">password is required</p>}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium leading-6 text-black">Select Profile</label>
        </div>
        <div className="mt-2">
        <input type="file"  {...register("image", {required: true})}  className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
        {errors.image && <p className="text-red-500 text-sm mt-1">image is required</p>}
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Sign up</button>
      </div>
    </form>

    <Link to='/login'><p className='mt-2 underline cursor-pointer '>You Have Account</p></Link>
  </div>
</div>
        </div>
    );
};

export default SingUp;