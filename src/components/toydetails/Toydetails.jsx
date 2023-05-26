import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Toydetails = () => {

    document.title = "DollVibe || Toy details"

    const details = useLoaderData()
    
console.log(details)
    return (
    <div className=" mx-auto p-10 my-10">

        <div className='text-center my-10'><h1 className='text-4xl font-bold '>Toy <span className='text-blue-600'>Details</span></h1></div>

        <div className="card lg:card-side bg-base-100 flex items-center justify-around shadow-xl">
            <figure><img className='w-96 h-96 object-cover object-top' src={details[0].toyPhoto} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title"><span className='font-bold'> Name:</span> {details[0].toyname}</h2>
                <div> <span className='font-bold'> SellerName:</span> {details[0].sellerName}</div>
                <div> <span className='font-bold'> Seller email:</span> {details[0].sellerEmail}</div>
                <div> <span className='font-bold'> Price:</span> {details[0].price}</div>
                <div> <span className='font-bold'> Quantity:</span> {details[0].quantity}</div>
                <div> <span className='font-bold'> Rating:</span> {details[0].rating}</div>
                <div> <span className='font-bold'> toy Sub category:</span> {details[0].toySubcategory}</div>
                <div> <span className='font-bold'> Description:</span> {details[0].description}</div>
                
            </div>
        </div>
    </div>
    );
};

export default Toydetails;