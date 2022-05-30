import React, { Component } from 'react';
import logo from './logo.png';
import Upload from '../../pages/upload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
<<<<<<< HEAD
          <div className="flex flex-row justify-around bg-white shadow-md sticky top-0 items-center w-full mx-auto ">
                  <div className="w-2/12 ">
                      <img className="h-12 m-2  w-9/12" src={logo} alt="logo" />
                  </div>
                  <div className="w-4/12 h-12 p-2 rounded-lg border-2">
                      <input className="w-10/12  h-4 border-r-2" type="text" name="search" placeholder="Search for videos and accounts..." id="" />
=======
          <div className="flex flex-row justify-around rounded-md bg-white shadow-md sticky top-0 items-center w-full mx-auto ">
                  <div className="w-2/12 ">
                      <img className="h-12 m-2  w-9/12" src={logo} alt="logo" />
                  </div>
                  <div className="w-4/12 h-12 p-2 flex flex-row items-center rounded-lg border-2">
                      <input className="w-10/12 focus:outline-none  h-8 border-r-2" type="text" name="search" placeholder="Search for videos and accounts..." id="" />
>>>>>>> main
                       <FontAwesomeIcon className="ml-6" icon={faSearch}/>
                  </div>
                  <div className="w-2/12 h-12  flex flex-row  items-center">
                      <button className=' w-6/12 h-3/12 text-black' >
                          <NavLink to="/upload" >Upload</NavLink>
                      </button>
                      <button className=' w-6/12 h-10 rounded-lg text-white bg-red-500'>Login</button>
                  </div>
          </div>
        );
    }
}
 
export default NavBar;