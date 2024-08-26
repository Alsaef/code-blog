import React from 'react';
import images from '../../assets/creator.png';
import { FaGithub, FaFacebook, FaLinkedin, FaIntercom, FaInternetExplorer } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Components/footer/Footer';
import { Helmet } from 'react-helmet-async';
const Creator = () => {
   
    return (
        <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Creator Detils | Code Blog</title>
                <meta property="og:description" content="AL SAEF RATUL · Web Developer (Frontend-React.JS) · 1+ year in Web Application Development, Coding, Programming, Testing, Data Management, Project Management."/>
            </Helmet>
            <div className="h-screen dark:bg-gray-700 bg-gray-200 pt-12">

                       <h2 className='text-center text-3xl uppercase py-2 font-semibold'>Creator <span className='text-green-500'>Details</span></h2>
                <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <div className="border-b px-4 pb-6">
                        <div className="text-center my-4">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={images} />
                                </div>
                            </div>

                            <div className="py-2">
                                <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">Al Saef <span className='text-green-500'>Ratul</span></h3>
                                       <p className='text-xl py-2'>MERN STACK <span className='text-green-500'>DEVELOPER</span></p>    
                            </div>
                        </div>
                        <hr className='border' />
                        <div className="flex gap-3 py-2 items-center justify-center">
                            <a target='blank' href="https://www.facebook.com/profile.php?id=100064069724626"><button className='btn  hover:bg-green-500 bg-green-500 mx-1 text-white text-2xl'><FaFacebook /></button></a>
                            <a target='blank' href="https://github.com/Alsaef"><button className='btn  hover:bg-green-500 bg-green-500 mx-1 text-white text-2xl'><FaGithub /></button></a>
                            <a target='blank' href="https://www.linkedin.com/in/al-saef-ratul-b0a380276/"> <button className='btn  hover:bg-green-500 bg-green-500 mx-1 text-white text-2xl'><FaLinkedin /></button></a>
                            <a target='blank' href="https://developer-ratul.netlify.app/"> <button className='btn bg-green-500 hover:bg-green-500 mx-1 text-white text-2xl'><FontAwesomeIcon icon={faEarth} /></button></a>
                            
                        </div>
                    </div>
                </div>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default Creator;