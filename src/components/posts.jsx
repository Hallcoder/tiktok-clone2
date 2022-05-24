import React , {Component} from 'react';
import Post from './post';
const Posts = () => {
    return ( 
        <div className='flex flex-col w-8/12 '>
        <Post />
        <Post />
        <Post />
        <Post />
        </div>
        
     );
}
 
export default Posts;