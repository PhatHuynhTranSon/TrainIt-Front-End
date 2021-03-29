import axios from "axios";
import {
    ROOT_URL
} from "./config";


export function signUp(username, email, password) {
    return axios.post(
        `${ROOT_URL}/users/signup`,
        {
            username,
            email,
            password
        }
    );
}

export function logIn(email, password) {
    return axios.post(
        `${ROOT_URL}/users/signin`,
        {
            email,
            password
        }
    );
}