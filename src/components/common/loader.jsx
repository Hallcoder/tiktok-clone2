import React from 'react';
function Loader({message}) {
    return (  
        <div className="w-4/12 border-2 h-2/6 flex items-center flex-col justify-center ml-36 rounded-lg  fixed bg-white top-40   shadow-xl">
            <div className="w-2/12 m-auto h-14 rounded-full border-b-4 border-t-4 border-red-600 text-gray-500 animate-spin ">
            </div>
            <p>{message}</p>
        </div>
    );
}

export default Loader;