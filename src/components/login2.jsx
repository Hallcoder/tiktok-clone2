import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
function Login2({changePage,Display}) {
    return ( 
        <div className="w-4/12 border-2 h-5/6 flex flex-col justify-around ml-36 rounded-lg  fixed bg-white top-20   shadow-xl">
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
                <h3 className="ml-8">Email or username</h3>
                <small className="ml-11 hover:underline hover:cursor-pointer" onClick={() => changePage("login")}>Log in with Phone</small>
              </div>
              <div className="w-10/12 flex bg-gray-100 border-2 h-12 m-auto items-center ">
                <input type="tel" name="telephone" id="" placeholder="Email or username"  className="w-full indent-2 rounded-sm  h-full"/>
              </div>
            </div>
            <div>
              <div className="w-10/12 flex bg-gray-100 border-2 h-12 ml-auto mr-auto mt-8 items-center ">
                <input type="tel" name="telephone" id="" placeholder="Password"  className="w-full indent-2 rounded-sm  h-full"/>
              </div>
            </div>
            <small className="ml-16 hover:underline hover:cursor-pointer">Forgot Password?</small>
            <input type="submit" value="Log in" className="w-10/12 h-12 font-bold border-2 rounded-sm m-auto" />
          </form>
        </div>
        <div className="h-10 text-center border-t-2 border-gray-300">
            <p>Don't have account?<strong className="text-red-600 font-bold hover:cursor-pointer" onClick={() => changePage('signup')}>Sign Up</strong></p>
        </div>
      </div>
     );
}

export default Login2;