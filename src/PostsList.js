import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Header} from "./Header";


const PostsList = () => {

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

    const deletePost = (id, e) => {
        e.preventDefault()
        axios.delete(`http://localhost:4000/posts/${id}`)
            .then(res => console.log('Deleted', res))
            .catch(err => console.log(err))
        window.location.reload(false);
    }

    const style = {
        color: "#999999"
    }


    return (
        <div className="App">
            <Header />
                <div className="list-container">
                    {posts.map(post => (<div key={post.id} className="element-container">
                        <div className="post-element">
                            <div>
                                <div style={style}>Title</div>
                                <div>{post.title}</div>
                            </div>
                            <div>
                                <div style={style}>Author</div>
                                <div>{post.author}</div>
                            </div>
                            <div style={{pointer: "cursor"}} onClick={(e) => deletePost(post.id, e)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></div>
                        </div>

                    </div>))}
                </div>
        </div>
    );
};

export default PostsList;