import { Router } from "@reach/router";

//Components
import Home from './components/Home/Home';
import Breaking from './components/Breaking/Breaking';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Home exact path="/react-portfolio" />
        <Breaking path="/breaking" />
        <Projects path="/projects" />
        <Resume path="/resume" />
      </Router>
    </div>
  );
}

export default App;