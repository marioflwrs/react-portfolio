import Logo from "../Logo/Logo";
import mariosmile from "../../assets/mario-smile.jpg";

import './About.scss';

const About = () => {
    return(
        <div className="about-container">
            <Logo />
            <div className="about-article-container">
                <img src={mariosmile} alt="about avatar" />
                <h1>title</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et illum eum id repellat sapiente eos quam ad, sint laborum quas vitae odio quasi esse aliquid suscipit ratione labore eligendi saepe!</p>
            </div>
        </div>
    );
}

export default About;