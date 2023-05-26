import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../authProviderContext/authProvider';
import { Link, useNavigate } from 'react-router-dom';
import PNGimage from '../../assets/image/google-logo-9831.png'



const Login = () => {


    document.title = "DollVibe || Login"

    //    password show hide state and funtion
       const [passwordVisible, setPasswordVisible] = useState(false);
       const togglePasswordVisibility = () => {
         setPasswordVisible(!passwordVisible);
       };

    //    context value 
        const {LOgInWithUser,LogInWithGoogle, seterror, error,  Success, setSuccess} = useContext(Authcontext)

        useEffect(() => {
            seterror(null)
            setSuccess(null)
         }, []);

        const navigate = useNavigate()



  const loginvaluehandler = (event) => {
    
    event.preventDefault()         
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;

    LOgInWithUser( email, password).then(res => {
        console.log(res.user)
        seterror(null)
        setSuccess("Login successfull!!")        
       setTimeout(() => {
        navigate('/')
       }, 500);
    }).catch(err => {
        console.log(err)
        seterror(err.message)
        setSuccess(null)
    })

    form.reset()

  }

  const loginGoogle = () => {
    LogInWithGoogle()
    .then(res => {
        console.log(res.user)
        seterror(null)
        setSuccess("Login successfull!!")        
       setTimeout(() => {
        navigate('/')
       }, 500);
    }).catch((err)=>{
        console.log(err)
        seterror(err.message)
        setSuccess(null)
    })
  }
 
    return (
         
        <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg max-w-md mx-auto">
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">Login</h1>
              <form onSubmit={loginvaluehandler}>

                {Success ? <div className="alert alert-success shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{Success}</span>
                    </div>
                    </div>: <></>}
                {error ? <div className="alert alert-error shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{error}</span>
                            </div>
                        </div> : <></>}

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name='email'
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4 relative">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                  Password
                </label>
                <div className="flex items-center">
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    id="password"
                    name='password'
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                    placeholder="Enter your password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5 text-gray-600 absolute right-0 top-0 mt-2 mr-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                            <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                        </svg>
                    )}
                  </svg>
                </div>
              </div>
                <h1>Have not account? <Link className='text-blue-600 font-semibold' to={"/singUp"} > Sing Up </Link></h1>
                <a
                    href="#"
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  >
                    Forgot Password?
                  </a>
                <div className="flex  mt-6 items-center justify-between">
                  <button
                    className="bg-blue-500   w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                  
                </div>
                <div>
                    <button type='button' onClick={loginGoogle} className='btn  hover:bg-slate-200  mt-10   bg-white border-none shadow-xl w-full  mx-auto text-black '>  login with <img className=' w-16 ms-2' src={PNGimage}     /></button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
        
    );
};

export default Login;

 