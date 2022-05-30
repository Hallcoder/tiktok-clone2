import {
  faHomeUser,
  faUsers,
  faVideoCamera
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Accounts from "./accounts";
import Discover from "./discover";
class SideBar extends Component {
  render() {
    return (
      <div className="w-full flex  flex-col sticky top-14 overflow-y-scroll">
        <div id="navigate" className="border-b-1 m-1 font-bold">
          <div className="w-full hover:bg-gray-100 rounded-10 items-center flex flex-row bg-gray h-14  tex font-sans text-red-400">
            <FontAwesomeIcon icon={faHomeUser} />
            <p className="m-2">For you</p>
          </div>
          <div className="w-full hover:bg-gray-100 rounded-10 items-center flex flex-row  bg-gray h-14  text-l font-sans">
            <FontAwesomeIcon icon={faUsers} />
            <p className="m-2">Following</p>
          </div>
          <div className="w-full hover:bg-gray-100 rounded-10 items-center flex flex-row  bg-gray h-14  text-l font-sans border-b-2">
            <FontAwesomeIcon icon={faVideoCamera} />
            <p className="m-2">LIVE</p>
          </div>
        </div>
        <div id="login" className=" flex flex-col justify-around border-b-2 border-gray-200 h-35">
          <p className="text-gray-400">
            Login in to follow creators, like videos, and view <br /> comments
          </p>
          <button className=" mb-2 w-full border h-12 rounded-lg mt-4 hover:bg-red-50 border-red-600 font-bold text-red-600">Log in</button>
        </div>

        <div id="suggested-accounts">
         <h5>Suggested accounts</h5>
         <Accounts />
         <Discover />
        </div>
      </div>
    );
  } 
}

export default SideBar;
