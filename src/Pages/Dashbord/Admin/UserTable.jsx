import React from 'react';
import { useGetUsersQuery } from '../../../features/Auth/authApi';
import Loading from '../../../Components/Loading/Loading';
import { Link } from 'react-router-dom';
const UserTable = () => {
    const {data,isSuccess,isLoading,isError}=useGetUsersQuery(null,{pollingInterval:500})

    if (isLoading) {
        return (
            <Loading></Loading>
        )
    }
    return (
        <div>
            <h2 className='text-center my-4 text-xl'>User Manage</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
        data.filter(user=>user.role==='user').map(user=>(
            <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user.image} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{user.name}</div>
                  <div className="text-sm opacity-50">{user.role}</div>
                </div>
              </div>
            </td>
            <td>
             {
                user.email
             }
              
            </td>
            <td>Purple</td>
          </tr>
        ))
      }
     
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default UserTable;