import React, {useEffect, useState} from 'react';
import {Header} from "./Header";
import axios from "axios";

export const Posts = () => {

    const [posts, setPosts] = useState([])



    useEffect(() => {
        axios.get('http://localhost:4000/posts')
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])




    return (



        <div className="App">
            <Header />
            <div className="post-container">
                        {posts.map(post => (<div key={post.id} className="post">
                            <div className="post-title">{post.title}</div>
                            <div className="author">{post.author}</div>
                            <div className="author">Added: {post.date}</div>
                            <div className="content">{post.content}</div>
                            <img src={post.img} alt="Obraz"/>
                        </div>))}
                </div>
        </div>
    );
};
