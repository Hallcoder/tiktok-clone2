import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Comment = ({classs,comments,onClick}) => {
   
    return ( 
        <div className="flex flex-col h-20 w-20 rounded-full ">
            <FontAwesomeIcon className={classs} onClick={onClick}  icon={faComment}/>
            <p className="text-md text-center">{comments} comments</p>
        </div>
     );
}
export default Comment;