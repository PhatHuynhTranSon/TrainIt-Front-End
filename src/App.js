import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import HomePage from "./pages/home";
import SignUpPage from "./pages/authentication/SignUpPage";
import LogInPage from "./pages/authentication/LoginPage";
import ProjectDetails from "./pages/project/details";

import GlobalStyle from './components/styles/global';
import PrivateRoute from "./router/privateroute";
function App() {
  return (
    <React.Fragment>
        <GlobalStyle/>
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <HomePage />
                </PrivateRoute>

                <PrivateRoute path="/projects/:id">
                    <ProjectDetails />
                </PrivateRoute>

                <Route path="/signup">
                    <SignUpPage />
                </Route>

                <Route path="/login">
                    <LogInPage />
                </Route>
            </Switch>
        </Router>
    </React.Fragment>
  )
}

export default App;