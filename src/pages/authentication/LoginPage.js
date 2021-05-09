import { InputAdornment, makeStyles, TextField } from "@material-ui/core";
import { Email, Lock } from "@material-ui/icons";
import React from "react";
import Background from "../../components/background";
import { InvertedButton } from "../../components/button";
import { MarginTopSmall, MarginTopLarge } from "../../components/position";
import MediumHeading from "../../components/typography/mediumheading";
import AuthenticationPanel from "./panel";

import {
    logIn
} from "../../api"

import auth from "../../authentication";
import { Redirect } from "react-router";

import Alert from "@material-ui/lab/Alert";
import AuthMessage from "./signupmessage";


const useStyles = makeStyles({
    textfield: {
        width: "80%"
    },
    alert: {
        width: "80%",
        margin: "0 auto"
    }
});

function SignUpPage(props) {
    const classes = useStyles();

    //State
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [logInSuccessfully, setLogInSuccessfully] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(null);

    function onEmailChanged(event) {
        setEmail(event.target.value);
    }

    function onPasswordChanged(event) {
        setPassword(event.target.value);
    }

    function onSignUpButtonClicked() {
        logIn(email, password)
            .then(response => {
                //Successfully logged in
                const { data } = response;
                const { access_token } = data;

                //Log in
                auth.login(access_token);

                //Redirect
                setLogInSuccessfully(true);
            })
            .catch(error => {
                //Display error
                const { response } = error;
                const { data } = response;
                const { message } = data;

                setErrorMessage(message);
            });
    }

    return (
        logInSuccessfully ? 
        <Redirect to="/hub/dashboard" /> :
        <Background dark>
            <AuthenticationPanel>
                <MediumHeading>Log in to Trainee</MediumHeading>

                <MarginTopLarge>
                { 
                    errorMessage ? 
                    <Alert severity="error" classes={{ root: classes.alert }}>
                        { errorMessage }
                    </Alert> 
                    : null 
                }
                </MarginTopLarge>
                
                <MarginTopSmall>
                    <TextField 
                        placeholder="Email"
                        label="Email"
                        onChange={onEmailChanged}
                        classes={{ root: classes.textfield}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email />
                                </InputAdornment>
                            )
                        }}/>
                </MarginTopSmall>

                <MarginTopSmall>
                    <TextField 
                        placeholder="Password"
                        label="Password"
                        type="password"
                        onChange={onPasswordChanged}
                        classes={{ root: classes.textfield}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock />
                                </InputAdornment>
                            )
                        }}/>
                </MarginTopSmall>

                <MarginTopSmall>
                    <AuthMessage 
                        message="Don't have an account ? "
                        linktext="Sign up"
                        linkto="/signup"/>
                </MarginTopSmall>

                <MarginTopSmall>
                    <InvertedButton 
                        width="80%"
                        onClick={onSignUpButtonClicked}>
                        Log in
                    </InvertedButton>
                </MarginTopSmall>
            </AuthenticationPanel>
        </Background>
    )
}


export default SignUpPage;