import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faEdit,faClose } from "@fortawesome/free-solid-svg-icons";
// import { useEffect } from "react";
// import Person from "../images/person1.jpg"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function ImageUpload({Display,changePage,image,setImage}) {
  const navigate =useNavigate()
  const submit = async(e)=>{
    // console.log(e.target.innerText);
    e.target.innerHTML =`<button className="rounded-full border-l-2 animate-spin">
    Uploading...
 </button>`;
    let api = axios.create({ baseUrl:'http://localhost:4000'});
    await api.post('http://localhost:4000/user/profilePicture',{image:{file:image}},{withCredentials:true})
             .then(res=>res)
             .then(data =>{
                console.log(data);
                e.target.innerText ='Uploaded' 
                document.getElementById('image').style.display = 'none';
                document.getElementById('heading').style.display = 'none';
                e.target.style.backgroundColor = 'green';
                e.target.disabled = true;
                localStorage.setItem('currentUser',JSON.stringify(data.data))
                setTimeout(()=>{
                   navigate('/')
                },3000)
             })
  }
  return (
    <div className="w-4/12 border-2 h-4/6 flex flex-col justify-around ml-36 rounded-lg items-center  fixed bg-white top-20   shadow-xl">
      <div className="w-10/12 ml-auto mr-auto flex justify-end">
          <FontAwesomeIcon
            className="font-bold font-sans text-2xl bg-gray-100 rounded-full p-4 h-6 w-6 hover:cursor-pointer"
            icon={faClose}
            onClick={Display}
          />
        </div>  
      
      <div id='heading' className='h-2'>
        <h1 className='font-bold text-xl'>Complete Your Registration</h1>
        <h3  className='font-bold text-center' >Upload a profile picture</h3>
      </div>
      <div
        id="image"
        style={{ backgroundImage: `url(${image})` }}
        className="rounded-full w-5/12 bg-cover  bg-no-repeat items-center  flex justify-center h-2/6 bg-gray-200 text-white"
      >
     {!image && <FontAwesomeIcon icon={faCamera} className="text-9xl" />}   
        <label htmlFor="profileImage">
          <FontAwesomeIcon
            icon={faEdit}
            className="text-black relative top-16 pt-8 ml-4 text-lg cursor-pointer left-16"
          />
        </label>
        <input
          type="file"
          name="file"
          id="profileImage"
          onChange={(e)=>setImage(e)}
          className="hidden"
        />
      </div>
      <div className='w-4/12'>
        <button disabled={!image} className='bg-red-600 text-white h-12 rounded-sm font-bold cursor-pointer w-full' onClick={submit}>Upload</button>
      </div>
    </div>
  );
}

export default ImageUpload;
