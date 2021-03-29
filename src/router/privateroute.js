import {
    Route,
    Redirect
} from "react-router-dom";

import auth from "../authentication/index";

function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.isLoggedIn() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}

export default PrivateRoute;