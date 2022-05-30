import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUpload,
  faCloudUploadAlt,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/common/navBar";
import Form from "../components/form";
function Upload() {
  return (
    <>
      <NavBar />
      <div className="h-screen flex flex-row justify-around">
        <div className="border-2 shadow-md w-10/12 ml-auto mr-auto mt-10 text-xl h-full flex flex-row rounded-md min-w-1/2">
          <div className="w-4/12  ">
            <div className="h-1/6 ml-10 mt-6">
              <h1 className="font-bold ">Upload a Video</h1>
              <h3 className="text-gray-400">Post a video to your account</h3>
            </div>
            <div className="border-2 hover:border-red-600 border-dashed w-9/12 rounded-md ml-8 h-4/6 flex flex-col justify-between items-center">
              <FontAwesomeIcon
                className="text-red-600 mt-6"
                icon={faCloudUploadAlt}
              />
              <h2>Select a video to upload</h2>
              <h4>
                <small>or drag and drop a file</small>
              </h4>
              <p className="text-sm text-gray-400">MP4 OR WebM</p>
              <p className="text-sm text-gray-400">
                720x1280 resolution or higher
              </p>
              <p className="text-sm text-gray-400">Up to 180 seconds</p>
              <p className="text-sm text-gray-400">Less than 1 GB</p>
              <input type="file"  className="w-9/12 mb-6 font-semibold cursor-pointer file:cursor-pointer text-sm text-red-600 h-8 file:rounded-full file:h-5/6 file:bg-red-400 file:border-0 file:text-white file:font-bold" />
            </div>
          </div>
          <div className="w-8/12">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default Upload;
