import React from 'react';
import { TbEdit } from "react-icons/tb";
function EditAccount() {
    return ( 
        <div className="w-4/12 border-2 h-5/6 flex flex-col justify-around ml-36 rounded-lg  fixed bg-white top-14   shadow-xl">
          <div><h1>Edit Profile</h1></div>
          <div>
            <h1>Profile Photo</h1>
            <div className="relative">
                <img src={JSON.parse(localStorage.getItem('currentUser')).profilePicture} alt="profile pic" className="h-20 w-20 border rounded-full" />
                <TbEdit className="text-2xl absolute left-12 bg-white rounded-full cursor-pointer top-16" />
            </div>
          </div>
        </div>
     );
}

export default EditAccount;