import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Alltoys = () => {

  document.title = "DollVibe || All toy"

    const alltoys = useLoaderData()
    console.log(alltoys)

    const [Toy, setToy] = useState(alltoys);


    // search funtion 
    const searchHandler = (event) => {

        event.preventDefault()
        const search = event.target.search.value
        console.log(search)
        const filterdata = Toy.filter(data => data.toyname == search) 

         setToy(filterdata)
        

    }
  

    return (
      <div data-aos="zoom-in-up">
        <div className="overflow-x-auto my-10 p-5">

        <div className='text-center '><h1 className=' text-4xl font-bold'> All <span className='text-blue-600'>toys</span></h1></div>

        <div className='flex mt-10 items-center justify-center mb-10 '>
           <div className='border p-2 rounded-lg w-fit flex'>
            <form onSubmit={searchHandler}>
             <input type="text" name='search' required placeholder="search..." className=" outline-none ps-5 w-96   rounded-s-lg   border-none max-w-xs" />
                <button className='btn btn-primary' type='submit'>Search</button>
            </form>
           </div>
        </div>

        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {Toy.map(data => (
                <tr key={data._id}>
                     
                    <td>{data.sellerName}</td>
                    <td>{data.toyname}</td>
                    <td>{data.toySubcategory}</td>
                    <td>$ {data.price}</td>
                    <td className='ps-10'>{data.quantity}</td>
                    <td> 
                    <Link to={`/toyDetails/${data._id}`}>
                    <button  className='btn btn-sm'>view details</button></Link>
                     </td>
                    
                </tr>
            ))}

            
          </tbody>
        </table>
      </div>
      </div>  
    );
};

export default Alltoys; 