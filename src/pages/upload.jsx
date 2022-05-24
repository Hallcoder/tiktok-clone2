import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUpload,
  faCloudUploadAlt,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/common/navBar";
function Upload() {
  return (
    <div className="h-screen flex flex-col justify-around">
        <NavBar  />
      <div className="border-2 shadow-md w-10/12 ml-auto mr-auto mt-10 text-xl h-full rounded-md min-w-1/2">
        <div className="h-1/6 ml-10 mt-6">
          <h1 className="font-bold ">Upload a Video</h1>
          <h3 className="text-gray-400">Post a video to your account</h3>
        </div>
        <div className="border-2 border-dashed w-3/12 rounded-md ml-8 h-4/6 flex flex-col justify-between items-center">
          <FontAwesomeIcon className="text-red-600 mt-6" icon={faCloudUploadAlt} />
          <h2>Select a video to upload</h2>
          <h4>
            <small>or drag and drop a file</small>
          </h4>
          <p className="text-sm text-gray-400">MP4 OR WebM</p>
          <p className="text-sm text-gray-400">720x1280 resolution or higher</p>
          <p className="text-sm text-gray-400">Up to 180 seconds</p>
          <p className="text-sm text-gray-400">Less than 1 GB</p>
          <button className="bg-red-600 w-6/12 mb-6 font-semibold text-sm text-white h-8">
            Select file
          </button>
        </div>
        <div>
            <div>
            <input type="text" name="" id="" />
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Upload;
