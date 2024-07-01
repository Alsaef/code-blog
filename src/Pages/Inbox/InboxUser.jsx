import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Loading from '../../Components/Loading/Loading';
import { Helmet } from 'react-helmet';
import { useGetMessageQuery, useSendMessageMutation } from '../../features/messageApi/messageApi';
const InboxUser = () => {
    const room=useLoaderData()
    const [sendMessage]=useSendMessageMutation()
    const{data,isLoading,isError}=useGetMessageQuery(null,{pollingInterval:400})
    const {user:{email,name,_id}}=useSelector(state=>state.auth)
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const currentDate = new Date()
    const onSubmit = data =>{
        const {message,}=data
        const messages={
            name:name,
            email:email,
            roomId:room._id,
            sendDate:new Date(),
            MessageContent:message
        }
        reset()
    console.log(messages)
    sendMessage(messages)
    };

    if (isLoading) {
        return(
            <Loading></Loading>
        )
    }
     
    return (
        <div className='h-screen flex flex-col justify-center items-center'>

<Helmet>
                <meta charSet="utf-8" />
                <title>{room.name} | Code Blog</title>
                <meta property="og:description" content="AL SAEF RATUL · Web Developer (Frontend-React.JS) · 1+ year in Web Application Development, Coding, Programming, Testing, Data Management, Project Management."/>
            </Helmet>
        <div className="max-w-lg w-full bg-gray-100 p-6 rounded-lg shadow-lg">
    
           
            <div className="mb-4  overflow-y-scroll">

               <div className='mt-2'>
               {
                   data?.filter(message=>message.roomId==room._id).map((message,index)=><div key={message._id} className={`chat justify-between ${email==message.email?'chat-end':'chat-start'}`}>
                    <p>{message.name}</p>
                   <div key={index} className="chat-bubble">{message.MessageContent}</div>
                 </div>
                   )
                }
               
               </div>
            </div>
    
           
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex mt-4'>
                    <input type="text" placeholder="Type here"  {...register("message", {required: true})} className="input input-bordered flex-1 mr-2" />
                    <button className='btn btn-black'>Send</button>
                </div>
            </form>
    
        </div>
    
    </div>
    
    );
};

export default InboxUser;