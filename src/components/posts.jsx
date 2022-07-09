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
  const [state,setState] = useState({
    isLiked: false,
    isShared: false,
    isCommentedOn: false,
    likes: 0,
   })
   const handleLike = (post) => {
        let State = {...state};
        console.log(state.isLiked)
        State['isLiked'] = !state.isLiked;
        setState(State);
        console.log()
        // eslint-disable-next-line react/no-direct-mutation-state
        if (!state.isLiked) {
          axios.post("http://localhost:4000/post/like", {
            user: localStorage.getItem("currentUser"),
            action: "like",
            post
          })
          .then(res => res)
          .then(data => console.log(data))
         State.likes = State.likes + 1;
          setState(State);
        } else {
          axios.post("http://localhost:4000/post/like", {
            user: localStorage.getItem("currentUser"),
            action: "dislike",
            post
          })
          .then(res => res)
          .then(data => console.log(data))
         State.likes = State.likes -1;
          setState(State);
        }
      };
    const  handleShare = () => {
        setState(state.isShared + 1);
      };
    const  handleComment = () => {
        setState(state.isCommentedOn - 1);
      };
    const setLike = () => {
      let State = {...state};
      State.isLiked = true;
      State.likes += 1;
      // setState(State);
    }
    // useEffect(() => {
   
    // },[posts])
  useEffect(() => {
    posts.map(post => {
      if(post.likes.filter(like => like.email === localStorage.getItem('currentUser').email).email === localStorage.getItem('currentUser').email) {
        axios.post('http://localhost:4000/post/edit',{isLikedByCurrentUser:true})
        window.location.reload();
      }
    })
      axios
      .get("http://localhost:4000/post/posts", {}, { withCredentials: true })
      .then((response) => {
        setPosts(response.data.data);
      });
  },[]);
  if (posts.length !== 0) {
    return (
      <div>
        {posts.map((post) => {
          const { content } = post;
          console.log(post.isLikedByCurrentUser)
          return (
            <Post
              profilePicture={post.uploadedBy.profilePicture}
              user={post.uploadedBy.username}
              video={content.secure_url}
              likes={post.likes.length}
              isLiked={!post.isLikedByCurrentUser}
              onLike={() => handleLike(post)}
              onComment={() => handleComment(post)}
              onShare={() => handleShare(post)}
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
    return (
      <div className="flex w-9/12 justify-center mt-[25%]  h-12">
        <p>No videos to show <NavLink to="/upload" className='underline font-bold text-red-500'>Upload One</NavLink></p>
      </div>
    );
  }
}

export default Posts;
