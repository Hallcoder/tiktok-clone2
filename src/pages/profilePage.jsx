import React, { useContext, useEffect, useState } from "react";
import SideBar from "../components/sideBar";
import Loader from "../components/common/loader";
import NavBar from "../components/common/navBar";
import { TbEdit } from "react-icons/tb";
import axios from "axios";
import EditAccount from "../components/EditAccount";
import { useNavigate } from "react-router-dom";
import ThemeModeContext from "../ThemeMode";
function ProfilePage() {
  let navigate = useNavigate();
  const [styles, setStyles] = useState({ display: "none" });
  const [loadingStyle, setLoading] = useState({
    display: "none",
  });
  const [mode,setMode] = useContext(ThemeModeContext);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("currentUser")) {
      console.log("noooooo");
      navigate("/");
      window.location.reload();
    }
    document.title = `${
      JSON.parse(localStorage.getItem("currentUser")).username
    } (${JSON.parse(localStorage.getItem("currentUser")).email})`;
    axios
      .get("https://tiktak-bapp.herokuapp.com//post/posts")
      .then(response => response)
      .then(data => {
        setVideos(data.data.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClose = () => {
    setStyles({ display: "none" });
  };
  const handleLoading = styles => {
    setTimeout(() => {
      if (styles) setLoading({ display: "none" });
    }, 2000);
    setLoading({ display: "block" });
  };
  const handleEdit = () => {
    setStyles({ display: "block" });
  };
  if (localStorage.getItem("currentUser")) {
    const { username, profilePicture, bio } = JSON.parse(
      localStorage.getItem("currentUser")
    );
    return (
      <div className={` ${mode ? "bg-black text-white min-h-screen":"flex flex-col min-h-screen"}`}>
        <NavBar onLoad={handleLoading} />
        <div className="flex text-xs">
          <div className="h-screen w-3/12 mt-24">
            <SideBar />
          </div>
          <div className="w-6/12  border-2 ml-[14em] border-red-5 mt-24 h-[80vh]">
            <div className="flex ml-12 mt-12">
              <div id="image">
                <img
                  src={profilePicture}
                  alt=""
                  className="h-20 w-20 rounded-full border"
                />
              </div>
              <div>
                <h1 className="font-bold text-5xl">{username}</h1>
                <h4 className="font-bold text-2xl">{username}</h4>
                <div
                  onClick={handleEdit}
                  className="flex items-center border border-red-300 cursor-pointer h-10 rounded-md w-36"
                >
                  <TbEdit className="text-2xl" /> Edit profile
                </div>
              </div>
            </div>
            <div className="flex w-4/12 ml-12 justify-around">
              <p>0 followers</p>
              <p>0 following</p>
              <p>0 likes</p>
            </div>
            <div className="ml-14 flex text-xs">
              Bio: {(bio && <p>{bio}</p>) || (!bio && <p>No bio yet.</p>)}
            </div>
            <div id="videos" className="ml-12">
              <div className="flex">
                <button className={`${mode ? "hover:text-black hover:bg-gray-100":"hover:text-white hover:bg-black"} w-4/12 border-b-4 m-1 h-12 border-red-500 hover:bg-gray-100`}>
                  Videos
                </button>
                <button className={`${mode ? "hover:text-black hover:bg-gray-100":"hover:text-white hover:bg-black"} w-4/12 border-b-4 m-1 h-12 border-red-500 hover:bg-gray-100`}>
                  Liked
                </button>
              </div>
              <div className="flex">
                {videos.map(video => {
                  return (
                    <video controls key={video._id} width="25%" height="70%">
                      <source src={video.content.secure_url}></source>
                    </video>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          style={styles}
          className="border-2 h-screen w-full  items-center justify-center  fixed bg-black bg-opacity-40 top-0 left-0 p-96  shadow-xl shadow-black "
        >
          <EditAccount handleClose={handleClose} />
        </div>
        <div
          style={loadingStyle}
          className="border-2 h-screen w-full  items-center justify-center  fixed bg-black bg-opacity-40 top-0 left-0 p-96  shadow-xl shadow-black "
        >
          <Loader message={"Logging Out..."} />
        </div>
      </div>
    );
  } else if (!localStorage.getItem("currentUser")) {
    return <div>Log in to access your profile</div>;
  }
}

export default ProfilePage;
