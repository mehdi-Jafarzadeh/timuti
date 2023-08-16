import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import './Post.css'

const Post = (props) => {

    const location = useLocation()
    const params   = new URLSearchParams(location.search)
    const postId   = params.get("id")
  
    const [comments, setcomments] = useState([]);

    useEffect(() => {
        getApiData()        
      }, [])
    
      const getApiData = async () => {
        const response = await fetch("https://jsonplaceholder.org/comments/" + postId)
        .then((response) => response.json());
        setcomments(response);
    
      };

      console.log(comments)

    return (
        <div className='post-container'>
            {props.data ? props.data.filter(e => e.id == postId).map(e => <>{e.title}</>) : <p>Loading</p>}
        </div>
    );
}

export default Post;
