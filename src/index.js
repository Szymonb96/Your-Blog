import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import {About} from "./About";
import {Posts} from "./Posts";
import {AddPost} from "./AddPost";
import reportWebVitals from './reportWebVitals';
import {Login} from "./Login";
import PostsList from "./PostsList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Posts />} />
              <Route path="add-post" element={<AddPost />} />
              <Route path="about-me" element={<About />} />
              <Route path="sign-in" element={<Login />} />
              <Route path="posts-list" element={<PostsList />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
