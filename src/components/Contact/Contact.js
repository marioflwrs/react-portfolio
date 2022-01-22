import './Contact.scss';
import marioresume from '../../assets/mario-ballesteros-resume22.pdf';

import {Link, BrowserRouter as Router} from 'react-router-dom';

const Contact = () => {

    return(
        <Router>

        <div className="contact-container">
            <div className="contact-items-container">
                <h1 className="contact-title">Contact</h1>
                <Link to={marioresume} download="marioballe-resume" target="_blank"><p className="contact-items">Resume </p></Link>
                <a href="https://www.linkedin.com/in/marioballe/" target="_blank" rel="noreferrer"><p className="contact-items">LinkedIn</p></a>
                <p className="contact-items">maballesteros@protonmail.com</p>
            </div>
        </div>
        </Router> 
    );
}

export default Contact;