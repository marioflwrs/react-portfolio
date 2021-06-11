//Components
import Landing from './components/Landing/Landing';
import Breaking from './components/Breaking/Breaking';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/breaking">
          <Breaking />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );  
}

export default App;