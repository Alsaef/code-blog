import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Blog from '../../Components/Blog/Blog';
import { useGetBlogsQuery } from '../../features/blogApi/blogApi';
import Loading from '../../Components/Loading/Loading';
import Footer from '../../Components/footer/Footer';
const Home = () => {
   
    const [searchBlog,setSearchBlog]=useState('')
    const {data,isLoading}=useGetBlogsQuery(searchBlog ||'',{pollingInterval:500})
    if (isLoading) {
        return <>
        <Loading></Loading>
        </>
    }
    
    const handleSelectChange = (e) => {
        setSearchBlog(e.target.value);
      };
   
    return (
        <div className=''>
           
          <div className=" bg-gray-50 lg:py-16 py-10 flex flex-col items-center justify-center relative overflow-hidden">
      <div className='pb-5'>
<h2 className='text-3xl text-center font-semibold'>Search Our Blog For Your <span className='text-green-500'>Development</span></h2>

      </div>
  <input value={searchBlog} onChange={(e)=>setSearchBlog(e.target.value)} type="text" placeholder="Search Here..." id='search blog' className="py-3 px-5 w-[50%] rounded shadow font-thin focus:outline-none  focus:shadow-green-500 duration-100 border"/>
<div className='absolute lg:right-[17rem] lg:top-[130px] md:right-[211px]  md:top-[110px] sm:right-[208px] sm:top-[110px]
right-[125px] top-[9rem]'>
<FontAwesomeIcon icon={faSearch}/>
</div>
</div>
<section className='mt-15'>
<h2 className='text-4xl text-center py-3 font-semibold'>Our <span className='text-green-500'>Blog</span></h2>
<div className='px-3 py-5 mx-auto w-[90%]'>
{
    data.length>0&&<>
    <select className="select select-success w-full max-w-xs" value={searchBlog} onChange={handleSelectChange}>
  <option value=''>Pick your favorite language</option>
  <option value='javascript' >JavaScript</option>
  <option value='react js'>React Js</option>
</select>
    </>
}
{
    data.length===0?<div className='flex flex-col items-center'><p className='text-xl text-red-500 font-semibold'>Blog Not Found</p></div>:data?.map(blog=><Blog key={blog._id} blog={blog}></Blog>)
}
</div>
</section>
   {
    data.length>0&&  <Footer></Footer>
   }
        </div>
    );
};

export default Home;