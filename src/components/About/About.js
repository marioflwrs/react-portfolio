import Logo from "../Logo/Logo";
import mariosmile from "../../assets/mario-smile.jpg";

import './About.scss';

const About = () => {
    
    return(
        <div className="about-container">
            <div className="about-article-container">
                <div className="article-container-inner">
                    <Logo />
                    <h1 className="title-style">I build websites using today's latest practices</h1>
                    <img src={mariosmile} alt="about avatar" />
                    <h1 className="title-style">About</h1>
                    <h2>Hello! I'm Mario. I'm a self-taught breakdancing web developer with a total of 5+ years of web development experience.</h2>
                    <p>Thats right! Just how I love to spin on my head, I also love to spin my code into fully functioning web applications.</p>
                    <p>What initially started out as a hobby to help out some friends with the structuring & styling for their websites, soon became a hidden passion that I began to explore.</p>
                    <p>My journey started in 2016 when I attended General Assembly's Web Development bootcamp course. I solidified my basic knowledge of html, css, sass, bootstrap, javascript, jquery, and then continued on to learn more about newer technologies being used in the webdev industry such as: React, Node, Express, Axios, REST API's, MongoDB, Heroku.</p>
                    <p>As a person, I am a natural introvert with an abundance of curiosity. I'm always looking for new ways to be able to solve bugs along with providing reuable code. </p>
                    <p>I currently work remotely creating websites with a selected freelance clientele base and am open for new opportunities.</p>

                    <a href="https://drive.google.com/file/d/1AA7DD9LNsOjLRVjI0Had843N0zhqCRbr/view?usp=sharing" target="_blank" rel="noreferrer"><h2 className="resume-style">resume.</h2></a>
                </div>
            </div>
        </div>
    );
}

export default About;