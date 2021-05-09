import { InputAdornment, makeStyles, TextField } from "@material-ui/core";
import { AccountCircle, Email, Lock } from "@material-ui/icons";
import React from "react";
import Background from "../../components/background";
import { InvertedButton } from "../../components/button";
import { MarginTopSmall, MarginTopLarge } from "../../components/position";
import MediumHeading from "../../components/typography/mediumheading";
import AuthenticationPanel from "./panel";
import Alert from "@material-ui/lab/Alert"
import { signUp } from "../../api";
import { Redirect } from "react-router-dom";
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

    //Internal states
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [signUpSuccessful, setSignUpSuccessful] = React.useState(false);
    
    //On input
    function onNameChanged(event) {
        setUsername(event.target.value);
    }

    function onEmailChanged(event) {
        setEmail(event.target.value);
    }

    function onPasswordChanged(event) {
        setPassword(event.target.value);
    }

    function onConfirmPasswordChanged(event) {
        setConfirmPassword(event.target.value);
    }

    function onSignUpButtonClicked() {
        //Check if password and confirm password are the same
        if (password !== confirmPassword) {
            setErrorMessage("Password and confirm password do not match")
        } else {
            signUp(username, email, password)
                .then(response => {
                    //Successfull -> Redirect
                    setSignUpSuccessful(true);
                })
                .catch(error => {
                    //Get error message
                    const { response } = error;
                    const { data } = response;
                    const { message } = data;

                    //Set error message
                    setErrorMessage(message);
                });
        }
    }

    return (
        <React.Fragment>
        {
            signUpSuccessful ? 
            <Redirect to="/login"/> :
            (
                <Background dark>
                    <AuthenticationPanel>
                        <MediumHeading>Sign up to Trainee</MediumHeading>

                        <MarginTopLarge>
                            { 
                                errorMessage ? 
                                <Alert severity="error" classes={{ root: classes.alert }}>
                                    { errorMessage }
                                </Alert> : null 
                            }
                        </MarginTopLarge>

                        <MarginTopSmall>
                            <TextField 
                                placeholder="Username"
                                label="Username"
                                onChange={onNameChanged}
                                classes={{ root: classes.textfield }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    )
                                }}/>
                        </MarginTopSmall>
                        
                        <MarginTopSmall>
                            <TextField 
                                placeholder="Email"
                                label="Email"
                                type="email"
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
                            <TextField 
                                placeholder="Re-enter password"
                                label="Re-enter password"
                                type="password"
                                onChange={onConfirmPasswordChanged}
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
                                message="Already have an account ? "
                                linktext="Log in"
                                linkto="/login"/>
                        </MarginTopSmall>

                        <MarginTopLarge>
                            <InvertedButton 
                                width="80%"
                                onClick={onSignUpButtonClicked}>
                                Sign up
                            </InvertedButton>
                        </MarginTopLarge>
                    </AuthenticationPanel>
                </Background>
            )
        }
        </React.Fragment>
    )
}


export default SignUpPage;