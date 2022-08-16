import React, { useState } from 'react';
import Posts from '../components/posts';
import SideBar from './../components/sideBar';
import "../css/home.css";
import NavBar from './../components/common/navBar';
import Login from '../components/loginForm';
import Loader from '../components/common/loader';

function Home() {
  const [styles, setStyles] = useState({
    display:"none",
    border:"2px solid red"
  })
  const [loadingStyle,setLoading]  = useState({
    display: "none",
  })
const  handleDisplay = () => {
    setStyles({
      display:"block",
    })
   }
   const handleLoading = (styles)=>{
    setTimeout(()=>{
      if(styles)
       setLoading({display: "none"});
    },2000)
    setLoading({display: "block"})
  }
const handleDisplay2 = () => {
  setStyles({
    display:"none",
  })
}
    return ( 
        <div className="">
        <NavBar onDisplay={handleDisplay}  onLoad={handleLoading}/>
        <div className="flex flex-row m-1 mt-[6vh] ">
        <div className="w-3/12">
        <SideBar  />
        </div>
        <div className='sm:w-8/12 m-auto'>
        <Posts open={handleLoading} close={handleDisplay2}/> 
        </div>
        </div>
        <div style={styles} className="h-full w-full flex flex-col z-[1] drop-shadow-md items-center justify-center  absolute bg-black bg-opacity-40 top-0 left-0 m-auto  shadow-xl shadow-black ">
          <Login Display={handleDisplay2} />
        </div>
        <div
        style={loadingStyle}
        className="border-2 h-screen w-full  items-center justify-center  fixed bg-black bg-opacity-40 top-0 left-0 p-96  shadow-xl shadow-black "
        >
        <Loader message={"Logging Out..."}  />
      </div>
      </div>
     );
}
export default Home;