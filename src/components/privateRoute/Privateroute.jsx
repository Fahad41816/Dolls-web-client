import React, {   useContext } from 'react';
import { Authcontext } from '../../authProviderContext/authProvider';
import { Navigate } from 'react-router-dom';
 

const Privateroute = ({children}) => {

    const {user, loader} = useContext(Authcontext)

    if(loader){
        return (
            <div className='flex flex-col w-full items-center  justify-center h-96 '>
             <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-3">
        <div className="w-6 h-6 bg-blue-500 rounded-full animate-ping"></div>
        <div className="w-6 h-6 bg-blue-500 rounded-full animate-ping"></div>
        <div className="w-6 h-6 bg-blue-500 rounded-full animate-ping"></div>
        <div className="w-6 h-6 bg-blue-500 rounded-full animate-ping"></div>
        <div className="w-6 h-6 bg-blue-500 rounded-full animate-ping"></div>
        <div className="w-6 h-6 bg-blue-500 rounded-full animate-ping"></div>
        <div className="w-6 h-6 bg-blue-500 rounded-full animate-ping"></div>
      </div>
    </div>
            </div>
        )
    }

    if(user){
        return children
    }

    return <Navigate to={"/Login"} replace={true}></Navigate>
};

export default Privateroute;