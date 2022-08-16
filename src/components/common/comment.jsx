import React from 'react';
import {MdOutlineModeComment} from  "react-icons/md"
const Comment = ({classs,comments,onClick}) => {
   
    return ( 
        <div className="flex flex-col items-center h-20 w-20 rounded-full ">
            <MdOutlineModeComment className={classs} onClick={onClick} />
            <p className="text-xs text-center">{comments} comments</p>
        </div>
     );
}
export default Comment;