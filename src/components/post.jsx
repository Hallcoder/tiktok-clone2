import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import ReactPlayer from "react-player";
import Like from "./common/like";
import Comment from "./common/comment";
import Share from "./common/share";
class Post extends Component {
  state = {
    isLiked:false,
    isShared:false,
    isCommentedOn:false,
  };
  handleLike = () => {
    this.setState({isLiked:!this.state.isLiked});
  }
  handleShare = () => {
    this.setState({isShared:!this.state.isShared});
  }
  handleComment = () => {
    this.setState({isCommentedOn:!this.state.isCommentedOn});
  }
 inactive ='flex flex-col justify-start  border-black  rounded-full w-9/12 h-10 p-2 ';
 active = 'flex flex-col  justify-start border-black bg-red-500 rounded-full w-9/12 h-8 p-2 text-white'
  render() {
    const {isLiked,isCommentedOn,isShared} = this.state;
    const {profilePicture,video,user}  = this.props;
    console.log("prof:",profilePicture)
    return (
      <div className="h-3/6 w-full flex flex-row  mt-1 ">
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
              <a href="#" className="no-underline hover:underline ">
                {user}
              </a>
              <div>
                <a href="#" className="no-underline hover:underline ">#Live</a>
                <a href="#" className="no-underline hover:underline ">#Stay</a>
                <a href="#" className="no-underline hover:underline ">#DreamHQ</a>
                <a href="#" className="no-underline hover:underline ">#250</a>
                <a href="#" className="no-underline hover:underline ">#kid</a>
              </div>
            </h1>
            <div className="flex flex-row items-center ">
              <FontAwesomeIcon icon={faMusic} />
              <h3>&nbsp;Millionaire -Mico The Best</h3>
            </div>
          </div>
          <div id="video" className="flex flex-row">
            <ReactPlayer url={video} style={{height:'10vh',width:'80%'}} width="80%" height="60vh" className=" w-9/12 mb-4 bg-black rounded-lg" controls autoplay />
            <div className="flex flex-col p-2  justify-end">
          <Like classs={isLiked ? this.active:this.inactive} onClick={this.handleLike} />
          <Comment classs={isCommentedOn ? this.active: this.inactive} onClick={this.handleComment} />
          <Share classs={isShared ? this.active:this.inactive} onClick={this.handleShare} />
           </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
