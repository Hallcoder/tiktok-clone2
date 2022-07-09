import React from "react";
import ErrorBadge from './common/errorBadge'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose
} from "@fortawesome/free-solid-svg-icons";
function Login2({changePage,Display}) {  
    return (
      <div className="w-4/12 border-2 h-5/6 flex flex-col justify-around ml-36 rounded-lg  fixed bg-white top-14   shadow-xl">
        <div className="w-10/12 ml-auto mr-auto flex justify-end">
          <FontAwesomeIcon
            className="font-bold font-sans text-2xl bg-gray-100 rounded-full p-4 h-6 w-6 hover:cursor-pointer"
            icon={faClose}
            onClick={Display}
          />
        </div>
        <div>
          <h1 className="text-center font-bold text-2xl">Log in</h1>
          <form className="flex flex-col justify-center">
            <div>
              <div className="flex ml-10 items-center justify-between w-10/12">
                <h3 className="ml-8">Phone</h3>
                <small className="ml-11  hover:underline hover:cursor-pointer" onClick={() => changePage("emailPage")}>Log in with email or username</small>
              </div>
              <div className="w-10/12 flex bg-gray-100 border-2 h-12 m-auto items-center ">
                  <select name="phoneCode" id="" className="border-r-2 h-5/6  bg-gray-100">
                      <option value="+250">+250</option>
                      <option value="+240">+240</option>
                      <option value="+198">+198</option>
                  </select>
                <input type="tel" name="telephone" id="" placeholder="Phone Number"  className="w-full indent-2 rounded-sm  h-full"/>
              </div>
            </div>
            <div>
              <div className="w-10/12 flex bg-gray-100 border-2 h-12 ml-auto mr-auto mt-8 items-center ">
                <input type="tel" name="telephone" id="" placeholder="Enter 6-digit code"  className="w-8/12 indent-2 rounded-sm  h-full"/>
                <button className="w-4/12 h-full text-gray-400">Send code</button>
              </div>
            </div>
            <small className="ml-16 hover:underline hover:cursor-pointer">Log in with password</small>
            <input type="submit" value="Log in"  className="w-10/12 bg-red-600 text-white  h-12 font-bold border-2 rounded-sm m-auto" />
          </form>
        </div>
        <div>
          <ErrorBadge  message={'This page is still in development use email instead..'}/>
        </div>
        <div className="h-10 text-center border-t-2 border-gray-300">
            <p>Don't have account?<strong className="text-red-600 font-bold hover:cursor-pointer" onClick={() => changePage('signup')}>Sign Up</strong></p>
        </div>
      </div>
    );  
  }
  


export default Login2;
