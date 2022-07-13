import { faHeart as heartOutlined } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Like = ({classs,onClick,likes}) => {
    return ( 
        <div className="flex flex-col rounded-full">
            <FontAwesomeIcon className={classs} onClick={onClick} icon={heartOutlined}/>
            <p className="text-md text-center">{likes} likes</p>
        </div>
     );
}
 
export default Like;