import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route to="/home">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
