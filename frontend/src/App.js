import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
      <div className="content"> 
      <Router>
        <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
            
          </Switch>
        </Router>
      </div>
  );
}

export default App;


