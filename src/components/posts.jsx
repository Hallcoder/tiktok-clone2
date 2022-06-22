import React  from 'react';
import Post from './post';
import {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
const Posts = () => {
    const [posts,setPosts] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:4000/post/posts',{},{withCredentials:true})
             .then((response) =>{
                console.log(response.data.data[0].uploadedBy);
                setPosts(response.data.data);
             })
    },[])
    return ( 
        <div>
            {posts.map(post => {
                console.log(post);
                const {profilePicture,content} = post;
                return <Post profilePicture={profilePicture} user={post.uploadedBy.username} video={content.secure_url}  />
            })}
            <div className="text-center underline cursor-pointer">
               <p>No more Posts to show. Back to top</p>
               <FontAwesomeIcon icon={faArrowCircleUp} className="animate-bounce text-red-600 text-4xl mt-2"/>
               </div>
        </div>
        
       
     );
}
 
export default Posts;