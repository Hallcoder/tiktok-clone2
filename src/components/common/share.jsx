import { faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Share = ({classs,onClick}) => {
    return ( 
        <div className="flex flex-col h-20 w-20 mt-2 rounded-full">
            <FontAwesomeIcon className={classs} onClick={onClick} icon={faShareSquare} />
        </div>
     );
}
 
export default Share;