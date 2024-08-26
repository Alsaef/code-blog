import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useCreateBlogMutation } from '../../../features/blogApi/blogApi';
import { useNavigate } from 'react-router-dom';
const AdminHome = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const [createblog,{isLoading,isSuccess}]=useCreateBlogMutation()
    const navigate=useNavigate()
    const onSubmit = data => {
        const {name,photo,detils,code,category}=data 
        const blog={
            name:name,
            category:category,
            image:photo,
            detils:detils,
            codeExample:code
        }
        console.log(blog)
        createblog(blog)
        reset()
    };
    useEffect(()=>{
        if (!isLoading&&isSuccess) {
            toast.success('success',{id:'createBlog'})
            navigate('/')
        }
    },[isLoading,isSuccess])
    return (
        <div>
           <div className=" min-h-screen flex items-center justify-center ">

<div className="bg-white p-8 rounded shadow-md max-w-md w-full mx-auto">
    <h2 className="text-2xl font-semibold mb-4">Blog <span className='bg-green-500 p-2 rounded-lg text-white'>Post</span></h2>

    <form onSubmit={handleSubmit(onSubmit)}>
      
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input {...register("name", {required: true})} type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md"/>
            </div>
            <div>
                <label  className="block text-sm font-medium text-gray-700">PhotoUrl</label>
                <input {...register("photo", {required: true})} type="text" id="photo" name="photo" className="mt-1 p-2 w-full border rounded-md"/>
            </div>
        </div>

       
        <div className="mt-4">
            <label  className="block text-sm font-medium text-gray-700">Category</label>
            <select {...register("category", { required: true })} className="select select-success w-full max-w-xs mt-2">
  <option value='' disabled>Pick your favorite language</option>
  <option value='javascript' >JavaScript</option>
  <option value='python' >Python</option>
  <option value='react js'>React Js</option>
</select>
        </div>
        <div className="mt-4">
            <label  className="block text-sm font-medium text-gray-700">Detils</label>
            <textarea {...register("detils", {required: true})} type="text" id="detils" name="detils" cols='50' className="mt-1 p-2 w-full border rounded-md"/>
        </div>

       
        <div className="mt-4">
            <label for="password" className="block text-sm font-medium text-gray-700">Code</label>
            <textarea {...register("code", {required: false})} type="text" id="code" name="code" cols='50' className="mt-1 p-2 w-full border rounded-md"/>
        </div>


        <div className="mt-6">
            <button type="submit" className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-500">Post</button>
        </div>
    </form>
</div>

</div>
        </div>
    );
};

export default AdminHome;