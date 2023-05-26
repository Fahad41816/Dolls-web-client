import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../authProviderContext/authProvider';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
 
import { BiEdit, BiTrash } from "react-icons/bi";

const Mytoys = () => {

    document.title = "DollVibe || My toys"

    // sweet alert 
    const MySwal = withReactContent(Swal)

    // context api 
    const {user} = useContext(Authcontext)

    // all state
    const [mytoy, setmytoy] = useState([]); 
    const [price, setprice] = useState(); 
    const [quantity, setquantity] = useState(); 
    const [id, setid] = useState();

   

    // mytoy all data fetch 
    useEffect(() => {
        fetch(`https://dolls-web-server.vercel.app/Mytoys?email=${user.email}`)
        .then(res => res.json())
        .then(data => setmytoy(data))
        .catch((err) => {
            console.log(err)
        });
    }, []);


    // edit handler 
    const  edittoyhandler= (id,price, quantity) => {

        setprice(price)
        setquantity(quantity)
        setid(id)



    }
    // edit fution handler 
    const edithandleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateuser = {
            price,
            quantity,
            description
        }

        fetch(`https://dolls-web-server.vercel.app/MytoysUpdate/${id}`,
        {
            method:"PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateuser)   
        }
        )
        .then(res => res.json())
        .then(()=>{
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your toys update',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch(err => {
            console.log(err)
        })

        form.reset()
        

    }


// delet toys handler 
    const deletToyHandler = (id) => {        
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://dolls-web-server.vercel.app/MytoysDelete/${id}`,
                {
                    method:"DELETE",
                    
                })
                .then(res => res.json())
                .then(()=> {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )

                   const filterData = mytoy.filter(data => data._id !== id);
                   setmytoy(filterData)

                })
                .catch(err => console.log(err))             
            }
          })       

    }

    // toast 
    const notify = () => toast("Data Sort");

    // sort data 
    const sortallData = () => {

        notify()

        fetch(`https://dolls-web-server.vercel.app/MytoysSort?email=${user.email}`)
        .then(res => res.json())
        .then(data => setmytoy(data))
        .catch((err) => {
            console.log(err)
        });

    }



    if(mytoy.length == 0){
        return (

            <div className='mt-60 flex items-center justify-center'>
                <h1 className='text-5xl mb-96'>You have no toys!!</h1>
            </div>

        )
    }

    return (
         
        <div className="overflow-x-auto p-5  w-full">

        <div className='text-center mt-10'><h1 className=' text-4xl font-bold'> My <span className='text-blue-600'>toys</span></h1></div>
        <div className=' text-end'>
            <button onClick={sortallData} className='btn '>Sort</button>
            <ToastContainer position="top-center" position="top-center"
    autoClose={true}
    newestOnTop
    closeOnClick
    rtl
    pauseOnFocusLoss
    draggable
    theme="light" />
        </div>
        <table className="table mt-10 w-full">
          {/* head */}
          <thead>
            <tr>              
              <th>Picture </th>
              <th>Name</th>
              <th>Seller name</th>
              <th>Sub-catefory</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {mytoy.map(data => (

                <tr key={data._id}>              
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={data.toyPhoto} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {data.toyname}
              </td>
              <td>{data.sellerName}</td>
              <td>{data.toySubcategory}</td>
              <td>{data.price}</td>
              <td>{data.rating}</td>
              <td>{data.quantity}</td>
              <td className=' w-24'><div >{data.description.slice(0,20)}...</div></td>
              <td>
                    <div className='flex gap-3'>
                        <label htmlFor="my-modal-6"><BiEdit onClick={() => {edittoyhandler(data._id, data.price,data.quantity)}} className="text-green-500 cursor-pointer text-xl"></BiEdit></label>
                                
                        <BiTrash onClick={() => {deletToyHandler(data._id)}} className='text-red-600 cursor-pointer text-xl' ></BiTrash>
                    </div>
              </td>               
            </tr>     

            ))}           
             
          </tbody>    

        </table>


            {/* modal  */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                     
                <div className="max-w-md mx-auto">
                    <form className="bg-white  px-8 pt-6 pb-8 mb-4" onSubmit={edithandleSubmit}>
                        <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Price
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="price"
                            required
                            type="number"
                            defaultValue={price}
                            name="price"
                            placeholder="Enter your name"
                           
                        />
                        </div>
                        <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        available quantity
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="quantity"
                            type="number"
                            required
                            defaultValue={quantity}
                            name="quantity"
                            placeholder="Enter your email"
                             
                        />
                        </div>
                        <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Detail description
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            type="text"
                            required
                            name="description"
                            placeholder="Enter your password"
                           
                        />
                        </div>
                        
                        <div>
                            <button className='btn btn-primary' type='submit'>Submit</button>
                        </div>
                        
                    </form>
                    <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn">Close</label>
                    </div>
                </div>

                </div>
            </div>

      </div>
      
    );
};

export default Mytoys;