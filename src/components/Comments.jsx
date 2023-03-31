import  Comment  from './Comment';
import axios from 'axios';
import React, { useState } from 'react';
import {apiURL} from "../utils/constants"
import { useNavigate } from 'react-router-dom';
function Comments({comments,setComments,post,style}) {
    const [comment,setComment] = useState('');
    const [error,setError] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
       if(!localStorage.getItem('currentUser')){
        navigate('/notloggedin')
        return
       }
       e.preventDefault();
       axios.post(`${apiURL}/post/comment`,{comment,post,user:localStorage.getItem('currentUser') })
            .then(res => res)
            .then(data => {
                let comms = [...comments]
                comms.push({
                    content:comment,
                    user:localStorage.getItem('currentUser'),
                    replies:[]
                })
                setComments(comms)
                setComment('')
                console.log(data)
            })
    }
    const handleChange = ({target:input}) => {
    let err = input.value === ' ' || '' ?  setError('Please fill this field'): undefined;
    if(err) return err;
    setComment(input.value);
    }
    return ( 
    <div className="h-40 shadow-md overflow-scroll relative" style={style}>
        {comments.map(comment => {
         return <div className="w-full  h-20 flex flex-col items-center border-blue rounded-sm">
        <Comment user={comment.user || 'foo'} content={comment.content}/>
        </div>
        })}
        <div className="w-full mt-4 sticky bottom-0">
            <form action="post" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" value={comment} onChange={(e) => handleChange(e)} placeholder="Write your comment..." className="indent-4 h-10 rounded-md  w-9/12 ml-[8%] border border-black" required/>
                <button  className="border  bg-red-500 text-white h-10 w-14 rounded-md" disabled={error}>Post</button>
            </form>
        </div>
    </div>
     );
}

export default Comments;