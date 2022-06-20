import { faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Share = () => {
    return ( 
        <div className="flex flex-col rounded-full">
            <FontAwesomeIcon className="flex flex-col rounded-full w-12/12 h-8  p-2" icon={faShareSquare} />
        </div>
     );
}
 
export default Share;