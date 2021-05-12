import { Link } from "@reach/router";
import './Navigation.scss';
import avatar from '../../assets/images/avatar.jpg';
import githubLogo from '../../assets/images/github-logo.png';
import linkedinLogo from '../../assets/images/linkedin-logo.png';


const Navigation = () => {
    return(
        <div className="navigation-container">
            <div className="nav-bar-container">
                <Link to="/">Home</Link>
                <Link to="/breaking">Breaking</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
            </div>
            <div className="profile-container">
                <img src={avatar} alt="profile" className="avatar"/>
                <h2 className="profile-name-location"> Mario Ballesteros | Brooklyn, NY</h2>
                <p className="contact-email">email: <strong>maballesteros@protonmail.com</strong></p>
                <div className="icons-container">
                    <img src={githubLogo} alt="github" />
                    <img src={linkedinLogo} alt="linkedin" />
                </div>
            </div>
        </div>
    );
}

export default Navigation;