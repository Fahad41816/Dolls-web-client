import React, { useEffect, useState } from 'react';

const Gellery = () => {


    const [pic, setpic] = useState([]);
console.log(pic)

    useEffect(() => {
       
        fetch('gellery.json').then(res => res.json()).then(data => setpic(data))

    }, []);

    return (
        <div className='w-full mt-20  flex flex-col items-center justify-center'>
           
           <div data-aos="fade-up">

            <h1 className='text-4xl  text-center font-bold '>gellery <span className=' text-blue-600'>section</span></h1>
        </div>
          

        <div data-aos="fade-up">
            <div className=' mt-20 grid grid-cols-2   xl:grid-cols-3 '>
           
                 {
                    pic.map((allpic) => (
                           
                       <div className='border flex items-center justify-center' key={allpic.id}>
                            <img src={allpic.image} alt="" />
                       </div>
                          
                    ))
                 }
                </div>
            </div>
              

        </div>

    );
};

export default Gellery;