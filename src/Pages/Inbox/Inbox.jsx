import React from 'react';
import Loading from '../../Components/Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMessage } from '@fortawesome/free-solid-svg-icons'
import 'react-chat-elements/dist/main.css'
import { Link } from 'react-router-dom';
import { useGetRoomQuery } from '../../features/RoomApi/RoomApi';
import { Helmet } from 'react-helmet-async';
const Inbox = () => {
  const {data,isLoading}=useGetRoomQuery(null,{pollingInterval:100})
  

  if (isLoading) {
    return(
        <div>
          <Loading></Loading>
        </div>
    )
  }

    return (
     <div className='flex flex-col items-center mt-[200px]'>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Message | Code Blog</title>
                <meta property="og:description" content="AL SAEF RATUL · Web Developer (Frontend-React.JS) · 1+ year in Web Application Development, Coding, Programming, Testing, Data Management, Project Management."/>
            </Helmet>
       {
        data.map(room=>(
           <Link to={`/inbox/${room._id}`}>
            <div key={room._id} className='text-3xl shadow-lg py-3 px-3 cursor-pointer text-blue-400'>
              <FontAwesomeIcon icon={faMessage}/>  {room.name}
            </div></Link>
        ))
       }
     </div>
    );
};

export default Inbox;