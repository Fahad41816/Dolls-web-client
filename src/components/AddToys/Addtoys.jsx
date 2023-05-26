import React, { useContext } from 'react';
import { Authcontext } from '../../authProviderContext/authProvider';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Addtoys = () => {

    document.title = "DollVib || Add toy"


    const {user} = useContext(Authcontext)

    const addtoToyproduct = (event) => {

        event.preventDefault()

        const form = event.target;
        const toyPhoto = form.pictureUrl.value;
        const toyname = form.toyname.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const toySubcategory = form.toySubcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const userData = {
            toyPhoto,
            toyname,
            sellerName,
            sellerEmail,
            toySubcategory,
            price,
            rating,
            quantity,
            description
        } 

        fetch('https://dolls-web-server.vercel.app/Addtoy', {
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)   
        })
        .then(res => res.json())
        .then(()=>{
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Toy added',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(err => {console.log(err)})


        form.reset()

    }


    return (
        <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add Product</h1>
      <form onSubmit={addtoToyproduct} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pictureUrl">
            Picture URL of the Toy
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pictureUrl"
            type="text"
            required
            name='pictureUrl'
            placeholder="Enter picture URL"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="toyName">
            Toy Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="toyName"
            type="text"
            required
            name='toyname'
            placeholder="Enter toy name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sellerName">
            Seller Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="sellerName"
            value={user.displayName}
            type="text"
            required
            name='sellerName'
            placeholder="Enter seller name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sellerEmail">
            Seller Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="sellerEmail"
            type="email"
            required
            value={user.email}
            name='sellerEmail'
            placeholder="Enter seller email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="toySubcategory">
            Toy Sub-category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="toySubcategory"
            type="text"
            required
            name='toySubcategory'
            placeholder="Enter toy sub-category"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            required
            name='price'
            placeholder="Enter price"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
            Rating
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rating"
            type="number"
            name='rating'
            required
            placeholder="Enter rating"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
            Available Quantity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="quantity"
            type="number"
            name='quantity'
            required
            placeholder="Enter available quantity"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Detail Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            rows="4"
            required
            name='description'
            placeholder="Enter detail description"
          ></textarea>
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
    );
};

export default Addtoys; 