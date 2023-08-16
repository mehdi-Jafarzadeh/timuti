import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom"
import './Post.css'

const Post = (props) => {

    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const postId = params.get("id")

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
            {props.data ? props.data.filter(e => e.id == postId).map(e =>
                <>
                    <h1>{e.title}</h1>
                    <br />
                    <img src={e.image} alt="" /><br /><br />
                    <p>{e.content}</p><br />

                    <div className="publishdetail">
                        <div className="">publish date :<p>{e.publishedAt}</p></div>
                        <div className="">last update :<p>{e.updatedAt}</p></div>
                        <div className="">status :<p>{e.status}</p></div>
                    </div>
                    <br /><br /><br />
                    <p>comments : </p><br />

                    <p>{comments.comment}</p>
                    <br /><br />
                    <Link className="post-btn" to="/">go to Home page</Link>
                </>) : <p>Loading</p>}
        </div>
    );
}

export default Post;
