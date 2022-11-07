import React from "react";
import Post from "./post";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
function Posts({open,close}) {
  const [posts, setPosts] = useState([]);
  const [Error,setError] = useState({});
   useEffect(() =>{
    axios.get('https://tiktak-bapp.herokuapp.com/post/posts')
      .then((response) =>response)
      .then(data => {
      setPosts(data.data.data);
      }).catch(err => {
   setError(err);
      })
   },[]);
  if (posts.length !== 0) {
    return (
      <div className="m-6 mb-12 w-full">
        {posts.map((post) => {
          const { content } = post;
          return (
            <Post
              key={post._id}
              postId={post._id}
              profilePicture={post.uploadedBy.profilePicture}
              user={post.uploadedBy.username}
              video={content.secure_url}
              likes={post.likes.length}
              likeArray={post.likes}
              comments={post.comments}
              open={open}
              close={close}
            />
          );
        })}
        <div className="w-10 rounded-full fixed text-center flex items-center   left-96  justify-end ml-96 bottom-0  cursor-pointer">
          <FontAwesomeIcon
            icon={faArrowCircleUp}
            className="animate-bounce text-red-600 drop-shadow-xl shadow-2xl text-4xl mt-2"
          />
        </div>
      </div>
    );
  } else{
   
    return  Object.values(Error).length === 0 ?  (
      <div className="flex w-9/12 justify-center mt-[25%]  h-12">
         <div className="w-12 m-auto h-12 rounded-full border-b-4 border-t-4 border-red-600 text-gray-500 animate-spin ">
          </div>
      </div>
    ): <div>
{Error.message}
    </div>;
  }
}

export default Posts;
