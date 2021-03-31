import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import SignUpPage from "./pages/authentication/SignUpPage";
import LogInPage from "./pages/authentication/LoginPage";
import ProjectDetails from "./pages/project/details";

import GlobalStyle from './components/styles/global';
import PrivateRoute from "./router/privateroute";
import PersonalHub from "./pages/hub";
function App() {
  return (
    <React.Fragment>
        <GlobalStyle/>
        <Router>
            <Switch>
                <PrivateRoute path="/hub">
                    <PersonalHub />
                </PrivateRoute>

                <Route path="/signup">
                    <SignUpPage />
                </Route>

                <Route path="/login">
                    <LogInPage />
                </Route>

                <Route exact path="/">
                    <h1>Home</h1>
                </Route>
            </Switch>
        </Router>
    </React.Fragment>
  )
}

export default App;