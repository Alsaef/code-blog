import React from 'react';

const Error = () => {
    const handelReload=()=>{
        window.location.reload()
    }
    return (
        <div>
             <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-600">500</h1>
        <p className="text-2xl font-semibold mt-4">Internal Server Error</p>
        <p className="mt-2 text-gray-600">Something went wrong on our end. Please try again later.</p>
        <button
          onClick={handelReload}
          className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
        >
          Reload Page
        </button>
      </div>
    </div>
        </div>
    );
};

export default Error;