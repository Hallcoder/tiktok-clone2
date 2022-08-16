import { faHeart as heartOutlined } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {BsHeart} from 'react-icons/bs'
import React from 'react';
const Like = ({classs,onClick,likes}) => {
    return ( 
        <div className="flex h-20 w-20 flex-col items-center rounded-full">
           <BsHeart className={classs} onClick={onClick} />
            <p className="text-xs text-center">{likes} likes</p>
        </div>
     );
}
export default Like;