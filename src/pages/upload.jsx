import React, { useEffect, useState , useContext} from "react";
import NavBar from "../components/common/navBar";
import Form from "../components/form";
import Login from "./../components/loginForm";
import ThemeModeContext from '../ThemeMode'
import Loader from "../components/common/loader";
function Upload() {
  const [styles, setStyles] = useState({
    display: "none",
    border: "2px solid red",
  });
const [isDataHere,setIsData] = useState(false);
const [mode,setMode] = useContext(ThemeModeContext);
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
  useEffect(()=>{
    handleLoading();
    console.log(mode)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isDataHere])
  const handleLoading = (message)=>{
    setMessage(message);
    if(message === "uploading..."){
      setLoading({display: "block"})
      while(isDataHere){
        setInterval(()=>{
         setLoading({display: "none"});
      },1000)
    }
    }
    else{
      setLoading({display: "block"})
      setTimeout(()=>{
       setLoading({display: "none"});
    },2000)
    }
  }
  return (
    <div className={`${mode ? "bg-black text-white":"bg-white text-black"}`}>
      <div className={`w-10/12 text-sm m-auto mb-4 h-4`}>
        <NavBar onDisplay={handleDisplay} onLoad={()=>handleLoading()} />
      </div>
    <div className="h-screen text-sm">
      <div className="h-5/6">
        <Form onLoad={handleLoading} styles={setStyles} IsData={setIsData}/>
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
    </div>
    </div>
    
  );
}

export default Upload;
