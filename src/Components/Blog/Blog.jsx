import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Blog = ({blog}) => {
    return (
    <div>
            <div className='flex lg:flex-row flex-col lg:gap-10 gap-4 items-center my-6'>
            <div>
            <img src={blog.image} alt="" className="w-24  lg:w-48 "/>

            </div>
          <div>
            <h2 className='text-3xl font-semibold py-2'>{blog.name}</h2>
          <p>{blog.detils?.slice(0,140)}.....</p>
         <Link to={`/blog/${blog._id}`}> <button className='text-xl text-green-500 mt-2'>Read More <FontAwesomeIcon icon={faArrowRight}/></button></Link>
          </div>
        </div>
    </div>
    );
};

export default Blog;