import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './components/Layout/Layout.jsx'
import Error from './components/Errorpage/Error.jsx';
import Home from './components/Home/Home.jsx';
import Alltoys from './components/AllToys/Alltoys.jsx';
import Addtoys from './components/AddToys/Addtoys.jsx';
import Login from './components/Login/Login.jsx';
import Singup from './components/Singup/Singup.jsx';
import Blog from './components/Blog/Blog.jsx';
import AuthProvider from './authProviderContext/authProvider.jsx';
import Mytoys from './components/Mytoys/Mytoys.jsx';
import Privateroute from './components/privateRoute/Privateroute.jsx';
import Toydetails from './components/toydetails/Toydetails.jsx';
 



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch("https://dolls-web-server.vercel.app/Alltoys")
      },
      {
        path:"/Alltoy",
        element:<Alltoys></Alltoys>,
        loader: () => fetch("https://dolls-web-server.vercel.app/Alltoys")
      },
      {
        path:"/Addtoys",
        element:<Privateroute><Addtoys></Addtoys></Privateroute>
      },
      {
        path:"/Login",
        element:<Login></Login>

      },
      {
       path:"/singUp",
       element:<Singup></Singup>
      },
      {
       path:"/Blog",
       element:<Blog></Blog>
      },
      {
       path:"/Mytoys",
       element: <Privateroute><Mytoys></Mytoys></Privateroute>
        
      },
      {
       path:"/toyDetails/:id",
       element: <Privateroute><Toydetails></Toydetails></Privateroute>,
       loader: ({params}) => fetch(`https://dolls-web-server.vercel.app/toydetails/${params.id}`) 
      }
    ]
  },
  {
    path:"*",
    element:<Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
