import Logo from "../Logo/Logo";
import './Contact.scss';

const Contact = () => {
    return(
        <div className="contact-container">
            <Logo />
            <div className="inner-contact-container">
                <h1>Contact.</h1>
                <p><a href="https://www.linkedin.com/in/marioballesteros91/" target="_blank" rel="noreferrer">LinkedIn</a></p>
                <p>maballesteros@protonmail.com</p>
            </div>
        </div>
    );
}

export default Contact;