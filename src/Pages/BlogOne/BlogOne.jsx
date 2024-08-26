import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLoaderData } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import Comment from '../../Components/Comment/Comment';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useCreateCommentMutation, useGetCommentQuery } from '../../features/comment/commentApi';
import { Helmet } from 'react-helmet-async';
const BlogOne = () => {
    const blogData=useLoaderData()
	const [isLoading,setLoading]=useState(true)
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const {user:{email}}=useSelector(state=>state.auth)
    const [createComment]=useCreateCommentMutation()
    const {data:commentData}=useGetCommentQuery(null,{pollingInterval:500})
  const onSubmit = data => {
   
    
        const newComment={
            comments:data.comment,
            email:email,
            postId:blogData._id
        
           } 
           createComment(newComment)
           console.log(newComment)
           reset() 
    
   
};
    console.log(blogData)
	useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 300);  // is your prefer
      }, []);

      if (isLoading) {
         return(
          <Loading></Loading>
         )
      }
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>{blogData.name} | Code Blog</title>
                <meta name="description" content={blogData.detils}/>
                <meta property="og:image" content={blogData.image} />
            </Helmet>
            <div className="bg-gray-100  flex items-center justify-center">
	<div className=" p-8 rounded-lg  max-w-md">
	<Link to='/'>	<button className='btn'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
</span> Home</button></Link>
		
		<div className="mb-4">
			<p className='text-3xl py-3'>{blogData.name}</p>
			<p className="text-gray-800">{blogData.detils}</p>
             {
				blogData.codeExample.length>0&&<p className='text-2xl py-2 font-semibold'>Example</p>
			 }
                    {
                        blogData.codeExample.length > 0 && (
                            <div className="mockup-code">
                                <pre className="text-green-500 flex flex-col items-start px-2">

                                    <code>{blogData.codeExample}</code>
                                    
                                    </pre>
                            </div>
                        )
                    }

			
		</div>
	
		<div className="mb-4">
			<img src={blogData.image} alt="Post Image" className="w-[100%]  object-cover rounded-md"/>
		</div>
		
	
		<hr className="mt-2 mb-2"/>
		<p className="text-gray-800 font-semibold">Comment</p>
		<hr className="mt-2 mb-2"/>
		<div className="mt-4">
		
			
		
		<div>

			<div className='my-4 overscroll-y'>
             
           {
            commentData?.filter(comment=>comment.postId===blogData._id).map(comment=> <Comment key={comment._id} comment={comment}></Comment>)
           }
			</div>

		{
            email?<form onSubmit={handleSubmit(onSubmit)} className="mb-6">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label for="comment" className="sr-only">Your comment</label>
                <textarea  {...register("comment", {required: true})} id="comment" rows="6"
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..." required></textarea>
            </div>
            <button type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 focus:ring-green-500 dark:focus:ring-green-500 hover:bg-green-500">
                comment
            </button>
        </form>:<p className='text-xl text-center font-semibold'><Link to='/login'>Please login if you want to comment on the blog <span className='text-green-500 underline'>Login</span></Link></p>
        }
		</div>
		
			
		</div>
	</div>
</div>
        </div>
    );
};

export default BlogOne;