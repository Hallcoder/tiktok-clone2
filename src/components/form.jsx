import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ErrorBadge from "./common/errorBadge";
import SuccessBadge from "./common/successBage";
function Form({ onLoad, IsData, styles }) {
  var [data, setData] = useState({
    caption: "",
    visibility: "",
    action: [],
    file: "",
  });
  var [errors, setErrors] = useState({
    caption: "",
    visibility: "",
    action: "",
    fileIsNull: true,
  });
  const upload = async (e) => {
    e.preventDefault();
    if (!localStorage.getItem("currentUser")) {
      console.log('You are not loggedIn broo')
      styles({display:'block'})
      return;
    }
    data = {
      caption: data.caption,
      visibility: data.visibility,
      action: data.action,
      file: data.file,
    };
    onLoad("uploading...");
    await axios
      .post("http://localhost:4000/post/upload", data, {
        withCredentials: true,
      })
      .then((res) => res)
      .then((data) => {
        console.log(data.response);
        IsData(true);
      })
      .catch((error) => {
        console.log(error.response);
        IsData(true);
      });
      
  };
  const videoChange = (e) => {
    let data2 = { ...data };
    const file = e.target.files[0];
    errors["fileIsNull"] = false;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      data2["file"] = reader.result;
    };
    setData(data2);
  };
  const handleChange = ({ currentTarget: input }) => {
    let errors1 = { ...errors };
    let data1 = { ...data };
    switch (input.name) {
      case "caption":
        if (input.value.length <= 0) {
          errors1[input.name] =
            "At least a character in the field must be specified";
          data1[input.name] = input.value;
        } else {
          data1[input.name] = input.value;
          delete errors1[input.name];
        }
        break;
      case "visibility":
        console.log("Visibility");
        data1[input.name] = input.value;
        break;
      case "action":
        data1[input.name] = input.value;
        break;
      default:
        return 1;
    }
    setErrors(errors1);
    setData(data1);
  };
  const { action, visibility, caption } = data;
  const { fileIsNull, caption: CaptionErr } = errors;
  return (
    <form
      method="post"
      onSubmit={upload}
      className="flex h-full m-auto  w-11/12  mt-24"
    >
      <div
        id="videoForm"
        className="border-2 items-center shadow-md w-4/12 ml-auto mr-auto mt-10 text-xl h-5/6 flex flex-col rounded-md min-w-1/2"
      >
        <div className="h-1/6 ml-10 mt-6">
          <h1 className="font-bold ">Upload a Video</h1>
          <h3 className="text-gray-400">Post a video to your account</h3>
        </div>
        <div className="border-2 hover:border-red-600 border-dashed w-8/12 rounded-md ml-8 h-full flex flex-col justify-between items-center">
          <FontAwesomeIcon
            className="text-red-600 mt-6"
            icon={faCloudUploadAlt}
          />
          <h2>Select a video to upload</h2>
          <h4>
            <small>or drag and drop a file</small>
          </h4>
          <p className="text-sm text-gray-400">MP4 OR WebM</p>
          <p className="text-sm text-gray-400">720x1280 resolution or higher</p>
          <p className="text-sm text-gray-400">Up to 180 seconds</p>
          <p className="text-sm text-gray-400">Less than 1 GB</p>
          <input
            type="file"
            onChange={videoChange}
            className="w-9/12 mb-6 font-semibold cursor-pointer file:cursor-pointer text-sm text-red-600 h-8 file:rounded-full file:h-5/6 file:bg-red-400 file:border-0 file:text-white file:font-bold"
          />
        </div>
      </div>
      <div id="wordForm">
        <div className="flex flex-col h-16  w-11/12  ml-4 mt-4">
          <label className="font-bold text-md">Caption</label>
          <input
            type="text"
            name="caption"
            value={caption}
            onChange={handleChange}
            className="focus:outline-none border-gray-400 border rounded-sm"
          />
          {errors["caption"] ? (
            <ErrorBadge message={errors["caption"]} />
          ) : (
            <SuccessBadge />
          )}
        </div>
        <label className="font-bold ml-4 text-md">Cover</label>
        <div className="flex flex-col h-2/6  w-11/12 border border-gray-400 rounded-sm ml-4 mt-4">
          <div className="h-5/6 m-2 bg-gray-100 w-3/12"></div>
        </div>
        <h3 className="ml-4 font-bold text-sm mt-5">Who can view this video</h3>
        <div className="flex flex-col h-8  w-4/12 border border-gray-400 rounded-sm ml-4 mt-4">
          <select name="visibility" value={visibility} onChange={handleChange}>
            <option className="hover:bg-gray-500 border-none" value="public">
              Public
            </option>
            <option className="hover:bg-gray-500 border-none" value="friends">
              Friends
            </option>
            <option className="hover:bg-gray-500 border-none" value="private">
              Private
            </option>
          </select>
        </div>
        <h3 className="font-bold text-sm mt-5 ml-4">Allow users to</h3>
        <div className="flex flex-row justify-around w-6/12 " id="action">
          <div className="flex flex-row justify-around  items-center  w-5/12  ml-4 mt-4">
            <input
              type="checkbox"
              name="action"
              value={caption}
              onChange={handleChange}
              className="accent-red-500 text-lg h-5/6 inline-block"
              defaultChecked
            />
            <label>Comment </label>
          </div>
          <div className="flex flex-row  items-center  w-5/12  ml-4 mt-4">
            <input
              type="checkbox"
              name="action"
              value={action}
              onChange={handleChange}
              className="accent-red-500 text-lg h-5/6 inline-block"
              defaultChecked
            />
            <label className="ml-2">Duet</label>
          </div>
          <div className="flex flex-row  items-center  w-5/12  ml-4 mt-4">
            <input
              type="checkbox"
              name="action"
              value={action}
              onChange={handleChange}
              className="accent-red-500 text-lg h-5/6 inline-block"
              defaultChecked
            />
            <label className="ml-2">Stitch </label>
          </div>
        </div>
        <p className="text-xs w-9/12 ml-4 inline-block text-gray-300">
          We'll check your video for potential copyright infringements on used
          sounds. If infringements are found, you can edit the video before
          posting.
          <NavLink to="#" className="text-sm text-black hover:underline">
            Learn more
          </NavLink>
        </p>
        <div className="h-2/6 m-4">
          <input
            type="submit"
            value="Discard"
            className="w-3/12 h-16 rounded-md hover:bg-red-500 hover:border-none hover:text-white border-1 hover:shadow-lg inline-block font-bold bg-white border-2 border-black"
          />
          <button
            className={
              errors["fileIsNull"] && !CaptionErr
                ? "m-2 bg-slate-100 h-2/6 inline-block w-3/12 font-bold text-gray-400"
                : "m-2 bg-red-500 h-2/6 inline-block w-3/12 font-bold text-white"
            }
            disabled={fileIsNull}
          >
            POST
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
