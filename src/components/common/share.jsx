import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Share = () => {
    return ( 
        <div className="flex flex-col rounded-full">
            <FontAwesomeIcon className="flex flex-col border-2 border-black rounded-full w-12/12 h-8 text-white p-2 bg-black" icon={faShare} />
        </div>
     );
}
 
export default Share;