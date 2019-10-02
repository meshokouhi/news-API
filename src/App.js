import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } 
                    from "react-router-dom";
import Home         from "./Home";
import About        from "./About.js";
import NotFound     from './NotFound';


class App extends Component {
  render() {
    return  (
    <Router>
      <div className = 'wrapper'>
        <ul className = 'navigation'>
          <li><Link to="/news/about">About</Link></li>
          <li><Link to="/news">Main</Link></li>
        </ul>

        {/* Our router goes here */}
        <Switch> 
        <Route exact path="/news/" component={Home} /> 
        <Route exact path={'/news/about'} component={About} />
        {/* Shows an error page. */}
        <Route path="*" component={NotFound} />
        </Switch>

      </div>
    </Router>);
  }
}
export default App;