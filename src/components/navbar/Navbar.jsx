import React, { useContext } from 'react';
import Logo from '../../assets/image/Logo.jpg'
import { Link } from 'react-router-dom';
import { Authcontext } from '../../authProviderContext/authProvider';

 

const Navbar = () => {


    const {user, userLogOut} = useContext(Authcontext)


    const logOut = () => {

        userLogOut()

    }
    return (
        <div>
            <div className="navbar shadow   w-full sticky top-0 z-50  xl:px-10 ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={"/"}  className=" font-extrabold">Home</Link></li>
                        <li><Link to={"/Alltoy"}>All Toys</Link></li>
                        <li><Link to={"/Addtoys"}>Add A Toy</Link></li>
                        <li><Link to={"/Mytoys"}> My Toys</Link></li>
                        {/* <li><Link to={"/Blog"}>Blog</Link></li> */}
                        {user ? <> <Link onClick={logOut} className="btn">Log out</Link></> : <Link to={"/Login"} className="btn">Log in</Link>}
                    </ul>
                    </div>
                    <a className="normal-case text-xl ms-3 flex items-center justify-center">
                        <img className=' w-16' src={Logo} alt="" />
                        <h2 className='font-bold xl:font-extrabold xl:text-2xl '>Doll <span>Vibe</span> </h2>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/Alltoy"}>All Toys</Link></li>
                        <li><Link to={"/Addtoys"}>Add A Toy</Link></li>
                        <li><Link to={"/Mytoys"}> My Toys</Link></li>
                        {/* <li><Link to={"/Blog"}>Blog</Link></li> */}
                      
                         
                    </ul>
                </div>


               

                <div className="navbar-end">

                {user ? <> <Link onClick={logOut} className="btn  hidden  xl:flex">Log out</Link></> : <Link to={"/Login"} className="btn hidden  xl:flex">Log in</Link>}
                
                {user ? <>
                <div className=' ms-5'>  
                    <div className="tooltip tooltip-bottom  tooltip-primary" data-tip={user.displayName}>
                        <div>
                            <img className=' w-16 h-16 rounded-full bg-cove bg-center' src={user.photoURL}  />
                        </div>
                    </div>                    
                </div></>:<></>}

                   
                </div>
            </div>

        </div>
    );
};

export default Navbar;