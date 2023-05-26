import React from 'react';
import { Link } from 'react-router-dom';

const error = () => {
  document.title = "DollVibe || Error"
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="mt-6 text-center">
            <h2 className="text-3xl font-extrabold text-red-600">Oops! Something went wrong.</h2>
            <p className="mt-2 text-sm text-gray-500">
              Please try again later or contact support if the problem persists.
            </p>
          </div>
          <div className="mt-6">
             <Link to={"/"}> <button
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Go Back
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default error;
