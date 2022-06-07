import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Select1 from "./select";
import { FormHelperText } from "@mui/material";
function SignUp({ Display, changePage }) {
    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    const day = 1;
  return (
    <div className="w-4/12 border-2 h-5/6 flex flex-col justify-around ml-36 rounded-lg  fixed bg-white top-20   shadow-xl">
      <div className="w-10/12 ml-auto mr-auto flex justify-between">
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="font-bold font-sans text-2xl p-4 h-6 w-6 hover:cursor-pointer"
        />
        <FontAwesomeIcon
          className="font-bold font-sans text-2xl bg-gray-100 rounded-full p-4 h-6 w-6 hover:cursor-pointer"
          icon={faClose}
          onClick={Display}
        />
      </div>
      <div>
        <h1 className="text-center font-bold text-2xl">Sign up</h1>
        <form className="flex flex-row justify-around">
          <Select1 data={months} />
          <Select1 data={months} />
          <Select1 data={months} />
        </form>
          <FormHelperText className="ml-12 border-2 w-9/12">Your birthday won't be shown publicly</FormHelperText>
      </div>
      <div className="h-10 text-center border-t-2 border-gray-300">
        <p>
         Already have an account?
          <strong className="text-red-600 font-bold hover:cursor-pointer" onClick={() => changePage("login")}>Login</strong>  
        </p>
      </div>
    </div>
  );
}

export default SignUp;
