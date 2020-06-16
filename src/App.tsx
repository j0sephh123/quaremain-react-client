import React from 'react';
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./views/Index";
import About from "./views/About";
import Settings from "./views/Settings";
import Survival from "./views/Survival";

function App() {
  return (
    <Router>
      <div className="columns">
        <div className="column is-3">
          <Sidebar />
        </div>
        <div className="column is-9">
          <Switch>
            <Route path="/" component={Index} exact />
            <Route path="/about" component={About} exact />
            <Route path="/settings" component={Settings} exact />
            <Route path="/survival" component={Survival} exact />
            
            
            {/* <Route path="/channels/:id" component={SingleChannel} exact /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;