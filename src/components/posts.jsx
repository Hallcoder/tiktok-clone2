import React from "react";
import Post from "./post";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log("Yeyi");
    axios
      .get("http://localhost:4000/post/posts", {}, { withCredentials: true })
      .then((response) => {
        setPosts(response.data.data);
      });
  }, []);
  console.log("Posts loaded...");
  if (posts.length !== 0) {
    return (
      <div>
        {posts.map((post) => {
          console.log(post);
          const { content } = post;
          return (
            <Post
              profilePicture={post.uploadedBy.profilePicture}
              user={post.uploadedBy.username}
              video={content.secure_url}
            />
          );
        })}
        <div className="w-10 rounded-full fixed text-center flex items-center   left-96  justify-end   bg-white  ml-96 bottom-0  cursor-pointer">
          <FontAwesomeIcon
            icon={faArrowCircleUp}
            className="animate-bounce text-red-600 drop-shadow-xl shadow-2xl text-4xl mt-2"
          />
        </div>
      </div>
    );
  } else{
    return (
      <div className="flex w-9/12 justify-center mt-[25%]  h-12">
        <p>No videos to show <NavLink to="/upload" className='underline font-bold text-red-500'>Upload One</NavLink></p>
      </div>
    );
  }
}

export default Posts;
