import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import {useState,useEffect} from 'react'
import Like from "./common/like";
import axios from "axios";
import Comment from "./common/comment";
import Share from "./common/share";
import Comments from "./Comments";
function Post({postId,open,close,profilePicture,likeArray,comments,likes,video,user,isShared,isCommentedOn,onShare }){
  const [Likes,setLikes] = useState(likes);
  const [Comms,setComments] = useState([])
  const [isLiked,setIsLiked] = useState(false);
  const navigate = useNavigate();
  const [commentStyles,setCommentsStyles] = useState({display:'none'})
  const handleComment = () => {
    let newStyle = commentStyles.display === 'none' ? {display:'block'}:{display:'none'};
    setCommentsStyles(newStyle);
  }
  useEffect(()=>{
    setLikes(likes);
    setComments(comments);
    if(likeArray.length !== 0 ){
      likeArray.map(like => {
        console.log(likeArray)
        if(localStorage.getItem('currentUser') && like !== null && JSON.parse(like).username === JSON.parse(localStorage.getItem('currentUser')).username) {
          setIsLiked(true);
        }
      })
    }  
  },[])
  const handleLike = (postId) =>{
    if(!localStorage.getItem('currentUser')){
      navigate('/notloggedin')
      return ;
     }
    if(isLiked){
    setIsLiked(!isLiked)
    axios.post('http://localhost:4000/post/like',{action:'dislike',post:postId,user:localStorage.getItem('currentUser')})
    .then((res) => res)
    .then(data => {
      console.log(data)
      setLikes(Likes - 1)
    })
    console.log(Likes)
  }else if(!isLiked){
    setIsLiked(!isLiked)
    axios.post('http://localhost:4000/post/like',{action:'like',post:postId,user:localStorage.getItem('currentUser')})
    .then((res) => res)
    .then(data => console.log(data))
      setLikes(Likes + 1)
  }
  }
  const inactive =
    "flex flex-col justify-start  border-black  rounded-full w-9/12 h-10 p-2 ";
  const active =
    "flex flex-col  justify-start border-black bg-red-500 rounded-full w-9/12 h-10 p-2 text-white";
    return (
      <div className="h-4/6 w-full flex flex-row  mt-1 ">
        <div id="profile" className="w-1/12">
          <img
            className="w-8/12 h-10 m-auto rounded-full"
            src={profilePicture}
            alt="profile"
          />
        </div>
        <div id="video" className=" w-8/12 h-5/6  ">
          <div id="infoAccount" className="flex flex-col gap-2">
            <h1 className="font-bold">
              <NavLink to="#" className="no-underline hover:underline ">
                {user}
              </NavLink>
              <div>
                <NavLink to="#" className="no-underline hover:underline ">
                  #Live
                </NavLink>
                <NavLink to="#" className="no-underline hover:underline ">
                  #Stay
                </NavLink>
                <NavLink to="#" className="no-underline hover:underline ">
                  #DreamHQ
                </NavLink>
                <NavLink to="#" className="no-underline hover:underline ">
                  #250
                </NavLink>
                <NavLink to="#" className="no-underline hover:underline ">
                  #kid
                </NavLink>
              </div>
            </h1>
            <div className="flex flex-row items-center ">
              <FontAwesomeIcon icon={faMusic} />
              <h3>&nbsp;Millionaire -Mico The Best</h3>
            </div>
          </div>
          <div id="video" className="flex flex-row">
            <ReactPlayer
              url={video}
              style={{ height: "10vh", width: "80%" }}
              width="80%"
              height="60vh"
              className=" w-9/12 mb-4 bg-black rounded-lg"
              controls
              autoPlay
            />
            <div className="flex flex-col p-2 justify-end">
              <Like
                classs={isLiked ? active : inactive}
                likes={Likes}
                onClick={() => handleLike(postId)}
              />
              <Comment
                classs={isCommentedOn ? active : inactive}
                onClick={handleComment}
                comments={comments.length}
              />
              <Share
                classs={isShared ? active : inactive}
                onClick={onShare}
              />
            </div>
          </div>
          <div className="h-2/6">
            <h1>Comments</h1>
            <Comments post={postId} style={commentStyles} setComments={setComments} comments={Comms}/>
          </div>
        </div>
        
      </div>
    );
}

export default Post;
