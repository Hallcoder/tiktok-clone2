import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Video from "../videos/New Project.mp4";
import React, { Component } from "react";
import Person2 from "../images/person2.jpg";
import Comment from "./common/comment";
import Like from "./common/like";
import Share from "./common/share";
class Post extends Component {
  state = {
    isLiked:false,
    isShared:false,
    isCommentedOn:false,
  };
 inactive ='flex flex-col  border-black  rounded-full w-12/12 h-8 p-2 ';
 active = 'flex flex-col  border-black  rounded-full w-12/12 h-8 p-2 text-red-500'
  render() {
    return (
      <div className="h-screen w-full flex flex-row border-b-2 mt-1 ">
        <div id="profile" className="w-1/12">
          <img
            className="w-8/12 h-10 m-auto rounded-full"
            src={Person2}
            alt="profile"
          />
        </div>
        <div id="video" className=" w-8/12 h-5/6  ">
          <div id="infoAccount" className="flex flex-col gap-2">
            <h1 className="font-bold">
              <a href="#" className="no-underline hover:underline ">
                Guy12z
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
            <video className="h-5/6 w-9/12 mb-4 rounded-lg" controls autoplay>
                <source src={Video}/>
            </video>
            <div className="flex flex-col p-2   justify-end">
          <Like class={this.active}/>
          <Comment classs={this.inactive}  active={this.activity}/>
          <Share classs={this.active} active={this.activity} onClick={this.handleLike}/>
        </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
