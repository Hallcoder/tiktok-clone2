import { faHeart as heartOutlined } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Like = ({classs}) => {
    return ( 
        <div className="flex flex-col rounded-full">
            <FontAwesomeIcon className="flex flex-col text-red-400 border-black  rounded-full w-12/12 h-8 p-2 " icon={heartOutlined}/>
            <p className="text-md">4.3k</p>
        </div>
     );
}
 
export default Like;