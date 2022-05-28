import React from 'react';
import {Header} from "./Header";

export const About = () => {
    return (
        <div className="App">
            <Header />
            <div className="about-container">
                <img src={'https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=2000'}/>
                <div className="about">
                    <div className="about-title">Angela Parks</div>
                    <div className="about-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aliquid architecto, consectetur cum cupiditate deleniti doloremque dolorum ea esse in ipsa libero magnam maiores minus nemo nostrum optio, pariatur quasi qui reiciendis rem temporibus veniam, vero vitae. Adipisci deserunt, doloribus excepturi ipsa iste odit officia quod. Ad alias amet quam quisquam tenetur? Accusantium, asperiores aut beatae consequuntur dicta dolorem id maxime molestias porro quam quasi quos reiciendis totam. Aliquam assumenda consectetur consequatur cumque deserunt, dolor eaque harum, illo ipsum iure, iusto maiores nostrum placeat quasi veniam. A accusantium aliquid animi aperiam architecto eligendi laudantium optio, sit velit vero vitae?</div>
                </div>
            </div>
        </div>
    );
};
