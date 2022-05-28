import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import {Header} from "./Header";


export function Login() {

    const [name, setName] = useState("");
    const storageName = localStorage.getItem('Name');

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('Name', name);
        window.location.reload(false);
    };


    return (
        <div className="App">

            <Header />
            {storageName ? <div className='logged-user'>
                <div>User is successfully logged in</div>
                <Link to="/" className="back-link">Back to homepage >></Link>
            </div>: <form className="input-container" onSubmit={handleSubmit}>
                    <div className="login-form">
                        <label>Username:</label>
                        <input
                            type="text"
                            name="user"
                            placeholder="Type here your username"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required />
                    </div>
                <div className="button-container">
                    <input type="submit" value="Sign In"/>
                </div>

            </form>}
        </div>
    );
}
