import './navigation.scss';
import marioprofile from '../../assets/mario-side.png';
import { Link  } from "react-router-dom";
import About from '../About/About';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';

import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function Navigation() {
  return (
    <Router>
      <div className="nav-container">
        <div className="profile-container">
          <img className="profile-picture" src={marioprofile} alt="my face" />
          <span>Mario Ballesteros</span>
          <span>🗽Brooklyn, NY</span>
        </div>
        <div className="links-container">
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/work" className="nav-item">Projects</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </div>      
      </div>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  )
}
