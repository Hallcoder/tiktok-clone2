import React  from 'react';
import Post from './post';
const Posts = () => {
    return ( 
        <div className='flex flex-col h-2/6 w-8/12 '>
        <Post />
        <Post />
        <Post />
        <Post />
        </div>
        
     );
}
 
export default Posts;