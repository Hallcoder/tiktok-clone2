import React from "react";
import { useState } from "react";
function Form() {
  const [data,setData] = useState({
    caption:'',
    
  })
  const upload = (e) => {
    e.preventDefault();

  }
  return (
    <form method="post" onSubmit={upload} className="h-5/6 w-11/12  mt-32">
      <div className="flex flex-col h-16  w-11/12  ml-4 mt-4">
        <label className="font-bold text-md">Caption</label>
        <input
          type="text"
          name=""
          id=""
          className="focus:outline-none border-gray-400 border rounded-sm"
        />
      </div>
      <label className="font-bold ml-4 text-md" >Cover</label> 
      <div className="flex flex-col h-2/6  w-11/12 border border-gray-400 rounded-sm ml-4 mt-4">
        <div className="h-5/6 m-2 bg-gray-100 w-3/12"></div>
      </div>
      <h3 className="ml-4 font-bold text-sm mt-5">Who can view this video</h3>
      <div className="flex flex-col h-8  w-4/12 border border-gray-400 rounded-sm ml-4 mt-4">
        <select>
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
            className="accent-red-500 text-lg h-5/6 inline-block"
            defaultChecked
          />
          <label>Comment </label>
        </div>
        <div className="flex flex-row  items-center  w-5/12  ml-4 mt-4">
          <input
            type="checkbox"
            name="action"
            className="accent-red-500 text-lg h-5/6 inline-block"
            defaultChecked
          />
          <label className="ml-2">Duet</label>
        </div>
        <div className="flex flex-row  items-center  w-5/12  ml-4 mt-4">
          <input
            type="checkbox"
            name="action"
            className="accent-red-500 text-lg h-5/6 inline-block"
            defaultChecked
          />
          <label className="ml-2">Stitch </label>
        </div>
      </div>
      <p className="text-xs w-9/12 ml-4 inline-block text-gray-300">
        We'll check your video for potential copyright infringements on used
        sounds. If infringements are found, you can edit the video before
        posting.<a href="#" className="text-sm text-black hover:underline">Learn more</a>
      </p>
      <div className="h-2/6 m-4">
      <input type="submit" value="Discard" className="w-3/12 h-16 rounded-md hover:bg-red-500 hover:border-none hover:text-white border-1 hover:shadow-lg inline-block font-bold bg-white border-2 border-black" />
      <button className="m-2 bg-slate-100 h-2/6 inline-block w-3/12 font-bold text-gray-400">POST</button>
      </div>
      
    </form>
  );
}

export default Form;
