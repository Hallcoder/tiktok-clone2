import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Comment = ({classs,onClick}) => {
   
    return ( 
        <div className="flex flex-col rounded-full ">
            <FontAwesomeIcon className={classs} onClick={onClick}  icon={faComment}/>
            <p className="text-md text-center">4.3k</p>
        </div>
     );
}
export default Comment;