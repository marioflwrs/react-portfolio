import './Navigation.scss';
import marioprofile from '../../assets/mario-side.png';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import About from '../About/About';

import { 
  HashRouter,
  Switch,
  Link,
  Route
} from "react-router-dom";


export default function Navigation() {

  return (
    <HashRouter>
      <div className="nav-container">
        <div className="profile-container">
          <Link to="/"><img className="profile-picture" src={marioprofile} alt="my face" /> </Link>
          <span className="profile-details">Mario Ballesteros</span>
          <span className="profile-details">🗽Brooklyn, NY</span>
        </div>
        <div className="links-container">
          <Link to="/projects" className="nav-item">Projects</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </div>
      </div>



      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/projects">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </HashRouter>
  )
}
