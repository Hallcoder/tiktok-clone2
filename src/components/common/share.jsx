import {IoMdShareAlt} from "react-icons/io"
import React from 'react';
const Share = ({classs,onClick}) => {
    return ( 
        <div className="flex flex-col items-center h-20 w-20  rounded-full">
                       <IoMdShareAlt className={classs} onClick={onClick} />
                       <p className="text-xs text-center">X likes</p>
                       
        </div>
     );
}
 
export default Share;