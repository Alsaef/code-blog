import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, Outlet } from 'react-router-dom';
import DefultHelmet from '../DefultHelmet/DefultHelmet';

const DashbordLayout = () => {
  const {user:{email,name,role,image}}=useSelector(state=>state.auth)
    return (
        <div>
          <DefultHelmet></DefultHelmet>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-[290px] min-h-full bg-green-200 text-content">
    


{
  role==='admin'&&<>
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
      name&&
      <div>
          <h2 className='text-xl text-black py-1'>{name}</h2><p className='text-xl btn  bg-green-200  hover:bg-green-200   text-black'>{role}</p>
      </div>
      }
      </div>
      </div>
      
            <li><Link to='/dashboard/adminhome'>Admin Home</Link></li>
            <li><Link to='/dashboard/manage'>Blog Manage</Link></li>
            <li><Link to='/dashboard/usermanage'>User Manage</Link></li>
            <li><Link to='/dashboard/createRoom'>Create Room</Link></li>
            </>
}

<hr className='border border-black'/>
      <li><Link to='/'>Home</Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashbordLayout;