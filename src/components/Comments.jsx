import  Comment  from './Comment';
import axios from 'axios';
import React, { useState } from 'react';
function Comments({comments,post,style}) {
    const [comment,setComment] = useState('');
    const [error,setError] = useState('')
    const handleSubmit = (e) => {
       e.preventDefault();
       axios.post('http://localhost:4000/post/comment',{comment,post,user:localStorage.getItem('currentUser')})
            .then(res => res)
            .then(data => console.log(data.data))
    }
    const handleChange = ({target:input}) => {
    let err = input.value === ' ' || '' ?  setError('Please fill this field'): undefined;
    if(err) return err;
    console.log(input.value)
    setComment(input.value);
    }
    return ( 
    <div className="h-40 shadow-md overflow-scroll relative" style={style}>
        {comments.map(comment => {
         return <div className="w-full  h-20 flex flex-col items-center border-blue rounded-sm">
        <Comment user={comment.user} content={comment.content}/>
        </div>
        })}
        <div className="w-full mt-4 sticky bottom-0">
            <form action="post" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" onChange={(e) => handleChange(e)} placeholder="Write your comment..." className="indent-4 h-10 rounded-md  w-9/12 ml-[8%] border border-black" required/>
                <button  className="border  bg-red-500 text-white h-10 w-14 rounded-md" disabled={error}>Post</button>
            </form>
        </div>
    </div>
     );
}

export default Comments;