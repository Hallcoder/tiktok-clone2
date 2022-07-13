import React, { useEffect } from 'react';
import {TbEdit} from 'react-icons/tb';
function ProfilePage() {
    const {username,profilePicture} = JSON.parse(localStorage.getItem('currentUser'))
    useEffect(()=>{
document.title =`${JSON.parse(localStorage.getItem('currentUser')).username} (${JSON.parse(localStorage.getItem('currentUser')).email})`;
    },[])
    return ( 
        <div className="w-6/12  border-2 ml-[14em] border-red-500 h-[60vh]">
           <div className="flex ml-12 mt-12">
            <div id="image">
                <img src={profilePicture} alt="" className="h-20 w-20 rounded-full border" />
            </div>
            <div>
                <h1 className="font-bold text-5xl">{username}</h1>
                <h4 className="font-bold text-2xl">{username}</h4>
                <div className='flex items-center border-2 h-10 rounded-md w-36'>
             <TbEdit className="text-2xl"/> Edit profile
                </div>
            </div>
           </div>
           <div className="flex w-4/12 ml-12 justify-around">
                <p>0 followers</p>
                <p>0 following</p>
                <p>0 likes</p>
           </div>
        </div>
     );
}

export default ProfilePage;