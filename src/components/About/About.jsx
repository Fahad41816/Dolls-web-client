import React from 'react';
import Image from '../../assets/image/tengyart-FTumOdB4lsI-unsplash.jpg'

const About = () => {
    return (
      
    <div className="  py-10">

<div data-aos="fade-up">

        <h1 className="text-3xl text-center font-bold mb-4">About <span className=' text-blue-600'>Us</span></h1>
</div>

      

        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex flex-col items-center justify-center xl:flex-row">
            <div className="p-6 flex-1">

              <p className="text-gray-600">
                Welcome to our doll store! We are dedicated to providing high-quality dolls that
                bring joy to children and collectors alike.
              </p>
              <p className="text-gray-600 mt-4">
                Our dolls are carefully crafted with attention to detail and made from the finest
                materials. We offer a wide range of dolls, including classic dolls, fashion dolls,
                and specialty dolls for various occasions.
              </p>
              <p className="text-gray-600 mt-4">
                Whether you're looking for a playmate for your child or a unique addition to your
                doll collection, we have the perfect doll for you. Each doll has its own distinct
                personality and style, making them truly special and captivating.
              </p>
              <p className="text-gray-600 mt-4">
                We believe in fostering imagination and creativity through play. Our dolls inspire
                storytelling and imaginative adventures, allowing children to develop important
                social and emotional skills.
              </p>
              <p className="text-gray-600 mt-4">
                Browse our collection and find the perfect doll that will bring smiles and
                cherished memories for years to come.
              </p>
            </div>
            <div className="p-6 flex-1">
              <img  src={Image} alt="Dolls" className="w-full h-96 image-full  bg-center bg-cover rounded-lg" />
            </div>
          </div>
          </div> 
        </div>
      </div>

       
    );
};

export default About;