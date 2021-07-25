import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion"

import _Home from "./pages/home"

function App() {
  return (
    <Router>
      <AnimatePresence>
        <Switch>
          <Route path="/" component={_Home}/>
          <Route path="/about" />
          <Route path="/users" />
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
