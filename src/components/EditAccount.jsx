import React, { useEffect, useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TbEdit } from "react-icons/tb";
import { Input } from '@chakra-ui/react'
function EditAccount() {
  const [image, setimage] = useState();
  useEffect(() => {
    setimage(JSON.parse(localStorage.getItem("currentUser")).profilePicture);
  }, []);
  const setImage = (e) => {
    console.log("setting image");
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setimage(reader.result);
    };
  };
  return (
    <div className="w-4/12 border-2  h-5/6 flex flex-col ml-36 rounded-lg  fixed bg-white top-14   shadow-xl">
      <div className="flex h-20 mb-8 items-center">
        <h1 className="font-bold text-xl w-4/12">Edit Profile</h1>
        <div className="w-10/12 ml-auto mr-auto flex justify-end">
          <FontAwesomeIcon
            className="font-bold font-sans text-2xl bg-gray-100 rounded-full p-4 h-6 w-6 hover:cursor-pointer"
            icon={faClose}
            // onClick={Display}
          />
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <h1>Profile Photo</h1>
        <div className="relative">
          <img
            src={image}
            alt="profile pic"
            className="h-20 w-20 border rounded-full"
          />
          <label htmlFor="profileImage">
            <TbEdit className="text-2xl absolute left-12 bg-white rounded-full cursor-pointer top-16" />
          </label>
          <input
            type="file"
            name="file"
            id="profileImage"
            onChange={(e) => setImage(e)}
            className="hidden"
          />
        </div>
        <form action="post" className='mt-8'>
            <div className='w-11/12'>
              <div className="flex items-center justify-around">
                  <label htmlFor="username" className="w-3/12 text-sm">Username:</label>
                  <div className="w-9/12"><Input variant='filled' value={JSON.parse(localStorage.getItem('currentUser')).username} className="text-red-500" /></div>
              </div>
              <p className="text-xs ml-10 text-gray-500">{`www.tiktak.com/@${JSON.parse(localStorage.getItem('currentUser')).username}`}</p>
              <p className="text-xs ml-10 text-gray-500">Usernames can only contain letters, numbers, underscores, and periods. Changing your username will also change your profile link.</p>
            </div>
            <div className="flex items-center justify-around">
                <label htmlFor="name" className="w-2/12 text-sm">Name:</label>
                <div className='w-9/12'><Input variant='flushed' value={JSON.parse(localStorage.getItem('currentUser')).username} /></div>
            </div>
            <div className="flex items-center justify-around">
                <label htmlFor="Bio" className="w-2/12 text-sm">Bio:</label>
                <div className='w-9/12'><textarea name="bio" id="Bio" className='border border-gray-100 rounded-sm bg-gray-100' placeholder='Bio...' style={{resize:'none'}} cols="43" rows="4"></textarea></div>
            </div>
        </form>
      </div>
    </div>
  );
}

export default EditAccount;
