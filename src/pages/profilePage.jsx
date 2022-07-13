import React, { useEffect } from 'react';
function ProfilePage() {
    useEffect(()=>{
document.title =`${JSON.parse(localStorage.getItem('currentUser')).username} (${JSON.parse(localStorage.getItem('currentUser')).email})`;
    },[])
    return ( 
        <div className="w-6/12 border-2 m- border-red-500 h-[60vh]">
           
        </div>
     );
}

export default ProfilePage;