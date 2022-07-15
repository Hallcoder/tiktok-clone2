import React, { useEffect, useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TbEdit } from "react-icons/tb";
import Joi from 'joi';
import axios from "axios";
import TextField from '@mui/material/TextField';
function EditAccount({handleClose}) {
  const [image, setimage] = useState();
  const [account,setAccount] = useState({
    username:'',
    bio:''
  });
  let schema = Joi.object({
    bio:Joi.string().max(80),
    username:Joi.string().required()
  })
  useEffect(() => {
    const {profilePicture,username} =  JSON.parse(localStorage.getItem("currentUser"));
    setimage(profilePicture);
    let acc = {...account}
    acc.username = username;
    setAccount(acc);
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
  const handleChange = ({target:input}) => {
   let acc = {...account};

   acc[input.name] = input.value;
   setAccount(acc);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
        username:account.username,
        profilePicture:image,
        bio:account.bio
    }
    console.log(data);
    axios.put('https://tiktak-bapp.herokuapp.com/user/updateInfo',{data,user:localStorage.getItem('currentUser')})
         .then(res => res)
         .then(data =>{
          console.log(data.data)
          localStorage.removeItem('currentUser')
          localStorage.setItem('currentUser',JSON.stringify(data.data.data));
          window.location.reload()
        })
         .catch(err => console.log(err))
  }
  return (
    <div className="w-4/12 border-2  h-5/6 flex flex-col ml-36 rounded-lg  fixed bg-white top-14   shadow-xl">
      <div className="flex h-20 mb-8 items-center">
        <h1 className="font-bold text-xl w-4/12">Edit Profile</h1>
        <div className="w-10/12 ml-auto mr-auto flex justify-end">
          <FontAwesomeIcon
            className="font-bold font-sans text-2xl bg-gray-100 rounded-full p-4 h-6 w-6 hover:cursor-pointer"
            icon={faClose}
            onClick={handleClose}
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
        <form action="post" onSubmit={(e) => handleSubmit(e)} className='mt-8'>
            <div className='w-11/12'>
              <div className="flex items-center justify-around">
                  <label htmlFor="username" className="w-3/12 text-sm">Username:</label>
                  <div className="w-9/12"><TextField className='h-14' onChange={(e) => handleChange(e)} value={account.username}  id="outlined-basic"  name='username' variant="outlined" /></div>
              </div>
              <p className="text-xs ml-10 text-gray-500">{`www.tiktak.com/@${account.username}`}</p>
              <p className="text-xs ml-10 text-gray-500">Usernames can only contain letters, numbers, underscores, and periods. Changing your username will also change your profile link.</p>
            </div>
            <div className="flex items-center justify-around">
                <label htmlFor="name" className="w-2/12 text-sm">Name:</label>
                <div className='w-9/12'><TextField className='h-14' onChange={(e) => handleChange(e)} id="outlined-basic" value={account.username} name='name' variant="outlined" /></div>
            </div>
            <div className="flex items-center justify-around">
                <label htmlFor="Bio" className="w-2/12 text-sm">Bio:</label>
                <div className='w-9/12'><textarea name="bio" id="Bio" value={account.bio} onChange={(e) => handleChange(e)}className='border border-gray-100 rounded-sm bg-gray-100' placeholder='Bio...' style={{resize:'none'}} cols="43" rows="4"></textarea></div>
            </div>
            <div className="m-auto w-3/12">
                <input type="submit" value="Save Changes" className="w-28 rounded-md  h-12 text-white font-bold bg-red-600" />
            </div>
        </form>
      </div>
    </div>
  );
}

export default EditAccount;
