import React, {useState} from 'react';
import {Header} from "./Header";
import axios from "axios";
import {Link} from "react-router-dom";

export const AddPost = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const [img, setImg] = useState('')

    const storageName = localStorage.getItem('Name');

    const date = new Date ()

    const postData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/posts', {
            title,
            author: storageName,
            content,
            img,
            date: date.toLocaleDateString('pl') + " " +  date.toLocaleTimeString('pl')
        })
            .then(res => console.log('Posting data', res))
            .catch(err => console.log(err))
        window.location.reload(false);
    }


    return (
        <div className="App">
            <Header />
            <div style={{marginTop: "60px"}}>
                {storageName ? <div className="container">
                    <div className="title">Add your post</div>
                    <div className="add-post-container">

                        <form onSubmit={postData}>
                            <input
                                placeholder="Add Title..."
                                name="title"
                                type="texts"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                            <textarea
                                placeholder="Write your post"
                                name="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required/>
                            <input
                                placeholder="Past img url"
                                name="img"
                                type="text"
                                value={img}
                                onChange={(e) => setImg(e.target.value)}
                                required
                            />
                            <div className="send-button">
                                <input type="submit" value="Send" />
                            </div>
                        </form>
                    </div>

                </div>: <div className="warning">
                    <div className="title" >You must sign in first!</div>
                    <Link to="/sign-in" className="login-page" >Go to sign in page >></Link>
                </div>}

            </div>


        </div>
    );
};
