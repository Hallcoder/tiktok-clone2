import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Comment = () => {
    let normal = "flex flex-col rounded-full w-12/12 h-8 p-2 ";
    let active = "flex flex-col rounded-full w-12/12 h-8 p-2 ";
    return ( 
        <div className="flex flex-col rounded-full ">
            <FontAwesomeIcon className={normal}  icon={faComment}/>
            <p className="text-md">4.3k</p>
        </div>
     );
}
export default Comment;