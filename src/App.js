import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import HomePage from "./pages/home";
import ProjectDetails from "./pages/project/details";

import GlobalStyle from './components/styles/global';

function App() {
  return (
    <React.Fragment>
        <GlobalStyle/>
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/projects/:id" component={ProjectDetails}/>
            </Switch>
        </Router>
    </React.Fragment>
  )
}

export default App;