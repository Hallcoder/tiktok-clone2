import React from 'react';
import {BiLike} from 'react-icons/bi'
import {RiReplyLine} from 'react-icons/ri'
function Comment({user,content}){
    return (
        <div className="flex justify-around  w-11/12 shadow-md h-20 border-2 rounded-lg">
          <div>
            <img src={user.profilePicture} alt="" className="h-12 w-12 rounded-full object-fit" />
          </div>
           <div className="flex flex-col w-10/12">
            <h1 className="font-bold">{user}</h1>
            <p className="h-14 border border-gray-100 shadow-md rounded-md">{content}</p>
           </div>
              <div className="flex items-center justify-end">
                <BiLike />Like
                <RiReplyLine />reply
                </div>
           <div>
           </div>
        </div>
    );
}

export default Comment;