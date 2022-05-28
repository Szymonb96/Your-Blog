import React, {useState} from 'react';
import {Link} from "react-router-dom";

export const Header = () => {

    const storageName = localStorage.getItem('Name');


        const handleClick = () => {
            localStorage.removeItem('Name');
            window.location.reload(false);
        }


    return (
        <div className="header">
            <div className="logo">
                <div className="icon"><a href={'https://www.facebook.com/'} target={'_blank'}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg></a></div>
                <div className="icon">
                    <a href={'https://twitter.com/'} target={'_blank'}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg></a></div>
                <div className="icon"><a href={'https://www.instagram.com/'} target={"_blank"}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M8.923 12c0-1.699 1.377-3.076 3.077-3.076s3.078 1.376 3.078 3.076-1.379 3.077-3.078 3.077-3.077-1.378-3.077-3.077zm7.946-.686c.033.225.054.453.054.686 0 2.72-2.204 4.923-4.922 4.923s-4.923-2.204-4.923-4.923c0-.233.021-.461.054-.686.031-.221.075-.437.134-.647h-1.266v6.719c0 .339.275.614.616.614h10.769c.34 0 .615-.275.615-.615v-6.719h-1.265c.058.211.102.427.134.648zm.515-5.314h-1.449c-.341 0-.615.275-.615.615v1.45c0 .34.274.616.615.616h1.449c.34 0 .616-.276.616-.616v-1.45c0-.34-.275-.615-.616-.615zm6.616-1v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 .846c0-1.019-.826-1.846-1.846-1.846h-12.308c-1.019 0-1.846.827-1.846 1.846v12.307c0 1.02.827 1.847 1.846 1.847h12.309c1.019 0 1.845-.827 1.845-1.847v-12.307z"/></svg></a></div>
            </div>
            <nav>
                <Link className="link" to="/">HOME</Link>
                <Link className="link" to="/about-me">ABOUT ME</Link>
                <Link className="link" to="/add-post">WRITE</Link>
                {storageName ? <div className="username"><div><Link to="/posts-list" className="link">POSTS LIST</Link></div></div>: <div></div>}
            </nav>
            {storageName ? <div className="username"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg><div><Link to="/sign-in" className="acc" >{storageName}</Link><div onClick={handleClick} className="logout">Logout</div></div></div>: <Link to="/sign-in" className="acc" >Sign In</Link>}
        </div>
    );
};
