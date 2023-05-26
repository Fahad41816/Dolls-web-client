import React, { useEffect, useState } from 'react';
import Style from './Home.module.css'
import Herobanner from '../.././assets/image/horebanner.jpg'
import Gellery from '../Gellery/Gellery';
import ShopCategory from '../tabs/ShopCategory';
import About from '../About/About';
import Contact from '../contact/Contact';
import { useLoaderData } from 'react-router-dom';


const Home = () => {

    document.title = "DollVibe || Home"


    const loaderData = useLoaderData()
    console.log(loaderData) 
    const [tabData, settabData] = useState(loaderData);
    const [categorydata, setcategorydata] = useState([]);

    console.log("tab data",categorydata)

    useEffect(() => {
         const filterData = loaderData.filter(data => data.toySubcategory == "Disney Princess")
          
         setcategorydata(filterData);
    }, []);



    const DisneyPrinces = () => {

        const filterData = tabData.filter(data => data.toySubcategory == "Disney Princess")
        setcategorydata(filterData);
 
       
    }
    const frozenDolls = () => {
        
        const filterData = tabData.filter(data => data.toySubcategory == "frozen dolls")
         setcategorydata(filterData);
       
    }
    const animation = () => {
        
        const filterData = tabData.filter(data => data.toySubcategory == "animation characters")
         setcategorydata(filterData);
    }

    
    return (
       <>
         <div className={`${Style.herosection}`}>
          
            <h1 className='text-white text-2xl  xl:ms-10 font-serif xl:font-extrabold xl:text-8xl '>Find Your <br /> Perfect <span className='text-blue-300  font-thin'>Doll</span></h1>

          

        </div>
        <div>
            <Gellery></Gellery>
        </div>
        <div className=' mt-24'>
            <ShopCategory tabsdata={categorydata} DisneyPrinces={DisneyPrinces} frozenDolls={frozenDolls} animation={animation} ></ShopCategory>
        </div>
        <div className=' mt-24'>
            <About></About>
        </div>
        <div className=' mt-24'>
           <Contact></Contact>
        </div>

       </>
    );
};

export default Home;