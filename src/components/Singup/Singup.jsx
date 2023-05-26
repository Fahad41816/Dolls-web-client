import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../authProviderContext/authProvider';


const Singup = () => {

    document.title = "DollVibe || SingUp"

const {createAccountWithEmailpass,addNameAndPhoto, seterror, error,  Success, setSuccess} = useContext(Authcontext)

     const navigate = useNavigate()


     useEffect(() => {
        seterror(null)
        setSuccess(null)
     }, []);
 
    const singupValuehandler = (event) => {

        event.preventDefault()
         
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const Url = form.url.value;

        
        createAccountWithEmailpass(email, password).then(res =>{                    
            addNameAndPhoto(name, Url).then(res=>{
                console.log("name url update" )
                .catch((err)=> {
                    console.log(err)
                })
            })
            seterror(null)
            setSuccess("Account create successfully!!")
            setTimeout(() => {
                navigate('/')
               }, 500);       
            console.log(res.user)
        
        })       
        .catch((err => {
           console.log(err)
           seterror(err.message)
           setSuccess(null)

           setTimeout(() => {
            seterror(null)
           }, 2000);
            
        }))

        form.reset()

    }




    return (
        <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg max-w-md mx-auto">
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
              <form onSubmit={singupValuehandler}>

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
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name='name'
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your name"
                  />
                </div>
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
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name='password'
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="Url" className="block text-gray-700 font-bold mb-2">
                    photo url
                  </label>
                  <input
                    type="text"
                    id="Url"
                    name='url'
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your photo url"
                  />
                </div>
                <h1>Have account? <Link className='text-blue-600 font-semibold' to={'/Login'}> Log in</Link> </h1>
                <div className="flex mt-10 items-center justify-between">
                  <button
                    className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Singup;