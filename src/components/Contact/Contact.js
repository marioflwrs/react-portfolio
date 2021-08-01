import './Contact.scss';
import { Link } from "react-router-dom";

const Contact = () => {
    return(
        <div className="contact-container">
            <div className="contact-inner-container">
                <Link to="/"><h1>Mario Ballesteros</h1></Link>
                <p><a href="https://www.linkedin.com/in/marioballesteros91/" target="_blank" rel="noreferrer">LinkedIn</a></p>
                <p>maballesteros@protonmail.com</p>
            </div>
        </div>
    );
}

export default Contact;