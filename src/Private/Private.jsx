import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Components/Loading/Loading';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const {user:{email,role},isLoading}=useSelector(state=>state.auth)
    if (isLoading&&!email) {
      return ( <Loading></Loading>)
    }
    if (!isLoading&&!email){
        return<Navigate to='/login' replace={true}></Navigate>
    }
    return children
};

export default Private;