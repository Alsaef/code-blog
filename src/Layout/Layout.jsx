import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBug, faCoffee, faDashboard, faHome, faMessage, faSave, faUser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { logout } from '../features/Auth/authSlice';
import Loading from '../Components/Loading/Loading';
import { Helmet } from 'react-helmet-async';
const Layout = () => {
  const [isLoading,setLoading]=useState(true)
    const {user:{email,name,role,image}}=useSelector(state=>state.auth)
    const dispatch=useDispatch()
    const handelLogOut=()=>{
        signOut(auth).then(()=>{
          dispatch(logout())
        }).catch(error=>{
          console.log(error)
        })
      }

      useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1200);  // is your prefer
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
                <title>Code Blog</title>
                <meta property="og:description" content="AL SAEF RATUL · Web Developer (Frontend-React.JS) · 1+ year in Web Application Development, Coding, Programming, Testing, Data Management, Project Management."/>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <div className='lg:bg-none md:bg-none sm:bg-[#5FCB71] bg-[#5FCB71] px-2'>
                    <label htmlFor="my-drawer-2" className="btn text-white bg-[#5FCB71] hover:bg-[#5FCB71]  drawer-button lg:hidden"><FontAwesomeIcon icon={faBars}/></label>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-[275px] min-h-full bg-[#5FCB71] text-base-content">
                        <h2 className='text-center text-3xl pb-3 font-semibold text-white'>Code Blog</h2>
                        <div className='text-center py-3'>

                            <div className="avatar">
                              {
                                image?<>
                                  <div className="w-24 rounded-full">
                                    <img src={image} />
                                </div>
                                </>:<>
                                <div className="w-24 rounded-full">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                                </div>
                                </>
                              }

                            </div>
                            <div className='py-2'>
                           {
                            name?<>
                            <div>
                                <h2 className='text-xl text-white py-3'>{name}</h2>
                            </div>
                            <div>
                            <h2 onClick={handelLogOut} className=' btn  bg-[#5FCB71] hover:bg-[#5FCB71] text-white cursor-pointer'>Logout</h2>
                            </div>
                            </>:<Link to='/login'><h2 className='text-2xl btn  bg-[#5FCB71] hover:bg-[#5FCB71] text-white cursor-pointer'>Login</h2></Link>
                           }
                            </div>
                        </div>
                        <hr className='border'/>
                     <div className='py-3'>
                     <li className='font-semibold  text-white'><Link to='/'> <FontAwesomeIcon icon={faHome} /> Blog Home</Link></li>
                        <li className='font-semibold  text-white'><Link to='/creator'><FontAwesomeIcon icon={faUser} /> Creator Details</Link></li>
                        <li className='font-semibold  text-white'><Link to='/message'><FontAwesomeIcon icon={faMessage} />Message</Link></li>
                      {
                        role==='admin'&&  <li className='font-semibold  text-white'><Link to='/dashboard/adminhome'><FontAwesomeIcon icon={faDashboard} />Dashbord</Link></li>
                      }
                     </div>
                    </ul>

                </div>
  
            </div>
        </div>
    );
};

export default Layout;