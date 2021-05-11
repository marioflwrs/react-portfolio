import './Breaking.scss';

import { Link } from "@reach/router";



const Breaking = () => {
    return(
        <div className="breaking-container">
            <div className="navigation-container">
                <div className="nav-bar-container">
                    <Link to="/">Home</Link>
                    <Link to="/breaking">Breaking</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                </div>
            </div>
            <section className="break-background">
                <p className="breaking-descripition">
                    I started breaking at the age of 17. Since then, I have traveled across the world in order to compete against the best of the best!
                </p>
                <img className="mario-dance-gif" src="https://media.giphy.com/media/YBYEK0ZDeEmv9LrlYm/giphy.mp4" alt="mario breakdancing" />
                <video loop autoPlay className="video-container">
                    <source src="https://media.giphy.com/media/YBYEK0ZDeEmv9LrlYm/giphy.mp4" alt="flowers breakdancing" />                    
                </video>
            </section>
        </div>
    );
}

export default Breaking;