import React, { useState } from "react";
import NavBar from "../components/common/navBar";
import Form from "../components/form";
import Login from "./../components/loginForm";
import Loader from "../components/common/loader";
function Upload() {
  const [styles, setStyles] = useState({
    display: "none",
    border: "2px solid red",
  });
const [message,setMessage] = useState('uploading...')
const [loadingStyle,setLoading]  = useState({
  display: "none",
})
  const handleDisplay = () => {
    setStyles({
      display: "block",
    });
  };
  const handleDisplay2 = () => {
    setStyles({
      display: "none",
    });
  };
  const handleLoading = (message)=>{
    setTimeout(()=>{
       setLoading({display: "none"});
    },2000)
    setLoading({display: "block"})
    setMessage(message);
  }
  return (
    <>
      <div className="w-10/12 m-auto mb-4 h-4">
        <NavBar onDisplay={handleDisplay} onLoad={()=>handleLoading()} />
      </div>
    <div className="h-screen">
      <div className="h-5/6">
        <Form onLoad={handleLoading}/>
      </div>
      <div
        style={styles}
        className="border-2 h-screen w-full  items-center justify-center  fixed bg-black bg-opacity-40 top-0 left-0 p-96  shadow-xl shadow-black "
      >
        <Login Display={handleDisplay2} />
      </div>
      <div
        style={loadingStyle}
        className="border-2 h-screen w-full  items-center justify-center  fixed bg-black bg-opacity-40 top-0 left-0 p-96  shadow-xl shadow-black "
      >
        <Loader message={message}  />
      </div>
    </div></>
    
  );
}

export default Upload;
