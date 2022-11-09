import React, { useContext } from "react";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookAtlas,
  faDoorOpen,
  faGear,
  faKeyboard,
  faQuestion,
  faSearch,
  faUserAlt
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState , useEffect } from "react";
import ThemeModeContext  from "../../ThemeMode";
function NavBar({ onDisplay, onLoad }) {
  const [isLoggedIn,setLogin] = useState(false);
  const [profilePicture,setProfile] = useState('');
  const [mode,setMode] = useContext(ThemeModeContext);
  useEffect(()=>{
    if (JSON.parse(localStorage.getItem("currentUser"))) {
      setLogin(true);
      const { profilePicture } = JSON.parse(
        localStorage.getItem("currentUser")
      );
      setProfile(profilePicture);
    }
  },[])
  const changeMode = () => {
    console.log(!mode);
    setMode(!mode);
  }
  const logOut  = () =>{
  onLoad("Logging out...");
  localStorage.removeItem("currentUser");
  setLogin(false);
    }
    return (
      <div className="flex flex-row justify-around z-[1] rounded-md bg-white shadow-md fixed left-[5%] top-0 items-center w-11/12 m-auto ">
        <div className="sm:w-2/12 2/12">
        <NavLink to='/'><img className="h-12 border-2 drop-shadow-md m-2 rounded-md sm:w-9/12 w-8/12" src={logo} alt="logo" /></NavLink>
        </div>
        <div className="sm:w-4/12 h-12 p-2 flex flex-row items-center rounded-lg border-2">
          <input
            className="sm:w-10/12 max-w-fit focus:outline-none  h-8 border-r-2"
            type="text"
            name="search"
            placeholder="Search for videos and accounts..."
            id=""
          />
          <FontAwesomeIcon className="ml-6" icon={faSearch} />
        </div>
        <div className="sm:w-2/12 h-12   flex flex-row  items-center">
          <button className="sm:w-7/12 m-1 h-3/12 text-black border-2  rounded-md border-black h-10 ">
            <NavLink to="/upload">Upload</NavLink>
          </button>
          {isLoggedIn ? <div className=" flex flex-row w-4/12 ml-2 h-10 object-contain items-center">
            <div className="peer w-full h-12 ">
              <img
                src={profilePicture}
                alt="prof"
                className="w-full h-full border-2  rounded-full"
              />
            </div>
            <div className="hidden hover:flex absolute border-2 shadow-md w-3/12 h-56 top-14 right-14  rounded-lg peer-hover:flex">
              <div className="flex flex-col h-full  w-full">
                <div className="h-1/6 flex flex-row hover:bg-gray-200 cursor-pointer justify-around items-center ">
                  <FontAwesomeIcon icon={faUserAlt} />
                  <p className="w-9/12"><NavLink to='/profile-page'>View Profile</NavLink></p>
                </div>
                <div className="h-1/6 hover:bg-gray-200 cursor-pointer flex flex-row justify-around  items-center ">
                  <FontAwesomeIcon icon={faGear} />
                  <p className="w-9/12">Settings</p>
                </div>
                <div className="h-1/6 hover:bg-gray-200 cursor-pointer flex flex-row justify-around items-center ">
                  <FontAwesomeIcon icon={faBookAtlas} />
                  <p className="w-9/12">English</p>
                </div>
                <div className="h-1/6 hover:bg-gray-200 cursor-pointer flex flex-row justify-around items-center ">
                  <FontAwesomeIcon icon={faQuestion} /> 
                  <p className="w-9/12">Feedback and Help</p>
                </div>
                <div className="h-1/6 hover:bg-gray-200 cursor-pointer flex flex-row justify-around items-center ">
                  <FontAwesomeIcon icon={faKeyboard} />
                  <p className="w-9/12"> Keyboard Shortcuts</p>
                </div>
                <div className="h-1/6 hover:bg-gray-200 cursor-pointer flex flex-row justify-around items-center ">
                  <FontAwesomeIcon icon={faDoorOpen} />
                  <p className="w-9/12" onClick={logOut}>Log out</p>
                </div>
                <div className="h-1/6 hover:bg-gray-200 cursor-pointer flex flex-row justify-around items-center ">
                  <FontAwesomeIcon icon={faDoorOpen} />
                  <p className="w-9/12" onClick={changeMode}>Dark Mode</p>
                </div>
              </div>
            </div>
          </div> :  <button
          className="w-6/12 h-10 text-center ml-2 items-center rounded-lg text-white bg-red-500 "
          onClick={() => onDisplay()}
        >
          Login
        </button> }
          
        </div>
      </div>
    );
  }
  export default NavBar;