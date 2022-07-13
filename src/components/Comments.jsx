import  Comment  from './Comment';
import React from 'react';
function Comments({comments}) {
    return ( 
    <div>
        {comments.map(comment => {
         return <div className="w-full shadow-md h-40 flex flex-col items-center border-blue rounded-sm">
        <Comment user={comment.user} content={comment.content}/>
        </div>
        })}
        <div className="w-full mt-4">
            <form action="post">
                <input type="text" placeholder="Write your comment..." className="indent-4 h-10 rounded-md  w-9/12 ml-[8%] border border-black" />
                <button className="border bg-red-500 text-white h-10 w-14 rounded-md">Post</button>
            </form>
        </div>
    </div>
     );
}

export default Comments;