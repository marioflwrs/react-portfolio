import './Landing.scss';

import { Link  } from "react-router-dom";

const Landing = () => {
    return(
        <div className="landing-background landing-container">
            <div className="landing-nav-container">
                <Link to="/work"><h1>Work</h1></Link>
                <Link to="/about"><h1>About</h1></Link>
                <Link to="/breaking"><h1>Breakin'</h1></Link>
                <Link to="/contact"><h1>Contact</h1></Link>
            </div>
        </div>
    );
}

export default Landing;