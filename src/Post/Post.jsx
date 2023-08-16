import React from 'react';
import { useLocation } from "react-router-dom"
import './Post.css'

const Post = () => {
    const location = useLocation()
    const params   = new URLSearchParams(location.search)
    const postId   = params.get("id")
  
    return (
        <div className='post-container'>
            sdf
        </div>
    );
}

export default Post;
