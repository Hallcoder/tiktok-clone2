<<<<<<< HEAD
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
=======
import { faComment } from '@fortawesome/free-solid-svg-icons';
>>>>>>> main
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Comment = () => {
    return ( 
        <div className="flex flex-col rounded-full hover:bg-cyan-100">
<<<<<<< HEAD
            <FontAwesomeIcon className="flex flex-col rounded-full w-12/12 h-8 p-2 bg-slate-200" icon={faComment}/>
=======
            <FontAwesomeIcon className="flex flex-col rounded-full text-white border-2 border-black w-12/12 h-8 p-2 bg-black" icon={faComment}/>
>>>>>>> main
            <p className="text-md">4.3k</p>
        </div>
     );
}
 
export default Comment;