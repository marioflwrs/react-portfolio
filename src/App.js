//Component
import Landing from './components/Landing/Landing';
//react-router module
import { 
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Route exact path="/">
          <Landing />
        </Route>
    </Router>
  );  
}

export default App;