import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

  const ShopCategory = (props) => {

    const {tabsdata, DisneyPrinces, frozenDolls, animation} = props
    
  return (
      <>

    <div>
    <div data-aos="fade-up">

        <h1 className='text-4xl text-center font-bold '> Shop by <span className='text-blue-600'>category</span> </h1>

    </div>
    </div>
     
    <div className='w-full flex items-center justify-center'>
        <Tabs className="flex flex-col items-center justify-center mt-14" forceRenderTabPanel defaultIndex={1}>
            <TabList>
              <Tab>Disney dolls</Tab>            
            </TabList>
            <TabPanel>
              <Tabs forceRenderTabPanel>
                <TabList className="flex items-center justify-center">
                  <Tab onClick={DisneyPrinces}>Disney princes</Tab>
                  <Tab onClick={frozenDolls}>frozen dolls</Tab>
                  <Tab onClick={animation}>animation characters</Tab>
                </TabList>
                <TabPanel >
                    <div className='grid gap-4 grid-cols-1 xl:grid-cols-2  items-center justify-center'>

                    {
                      tabsdata.map(data=> (


                        <div key={data._id} className="card  w-auto xl:w-96  mt-10 shadow-xl">
                          <figure><img className='w-full h-52 object-cover  object-top' src={data.toyPhoto} alt="Shoes" /></figure>
                          <div className="card-body">
                            <h2 className="card-title">{data.toyname}</h2>
                            <div> <span className='font-bold'>price: </span> ${data.price}</div>
                            <div> <span className='font-bold'>rating: </span>{data.rating}</div>

                            <Link to={`/toyDetails/${data._id}`}>
                              <div className="card-actions justify-start">
                                <button className="btn btn-primary">View details</button>
                              </div>
                            </Link> 
                           
                          </div>
                      </div>
                      ))
                    }
                      
                    </div>
                </TabPanel>
                <TabPanel>

                  <div className='grid gap-4 grid-cols-1 xl:grid-cols-2 items-center justify-center'>

                    {
                      tabsdata.map(data=> (


                        <div key={data._id} className="card  w-auto xl:w-96  mt-10 shadow-xl">
                          <figure><img className='w-full h-52 object-cover  object-top' src={data.toyPhoto} alt="Shoes" /></figure>
                          <div className="card-body">
                            <h2 className="card-title">{data.toyname}</h2>
                            <div> <span className='font-bold'>price: </span> ${data.price}</div>
                            <div> <span className='font-bold'>rating: </span>{data.rating}</div>
                            
                            <Link to={`/toyDetails/${data._id}`}>
                              <div className="card-actions justify-start">
                                <button className="btn btn-primary">View details</button>
                              </div>
                            </Link> 
                          </div>
                      </div>
                      ))
                    }
                      
                  </div>                 
                </TabPanel>
                <TabPanel>

                    <div className='grid gap-4 grid-cols-1 xl:grid-cols-2 items-center justify-center'>

                          {
                            tabsdata.map(data=> (


                              <div key={data._id} className="card  w-auto xl:w-96  mt-10 shadow-xl">
                                <figure><img className='w-full  h-52 object-cover  object-top' src={data.toyPhoto} alt="Shoes" /></figure>
                                <div className="card-body">
                                  <h2 className="card-title">{data.toyname}</h2>
                                  <div> <span className='font-bold'>price: </span> ${data.price}</div>
                                  <div> <span className='font-bold'>rating: </span>{data.rating}</div>
                                  
                                  <Link to={`/toyDetails/${data._id}`}>
                                    <div className="card-actions justify-start">
                                      <button className="btn btn-primary">View details</button>
                                    </div>
                                  </Link> 
                                </div>
                            </div>
                          ))
                        }  
                      </div>                  
                  </TabPanel>
              </Tabs>
            </TabPanel>    
          </Tabs>
    </div>
  
  </>
    );
};

export default ShopCategory; 