 
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
       <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
       </>
    );
};

export default Layout;