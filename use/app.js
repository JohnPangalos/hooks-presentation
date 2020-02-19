import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ClassBasedState } from "./ClassBasedState";
import { Hooks } from "./Hooks";

export const App = () => (
  <Router>
    <div>
      <Link to="/class-based-state">Class Based State</Link>
    </div>
    <div>
      <Link to="/hooks">Hooks</Link>
    </div>
    <Route path="/class-based-state">
      <ClassBasedState />
    </Route>
    <Route path="/hooks">
      <Hooks />
    </Route>
  </Router>
);
