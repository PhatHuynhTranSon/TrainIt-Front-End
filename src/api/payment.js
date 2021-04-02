import axios from "axios";
import {
    ROOT_URL
} from "./config";
import auth from "../authentication";

export function getTokens() {
    return axios.get(
        ROOT_URL + "/tokens",{
            headers: {
                "Authorization": `Bearer ${auth.getToken()}`
            }
        }
    );
}

export function processOrder(orderId) {
    return axios.post(
        ROOT_URL + "/tokens",
        `orderId=${orderId}`, {
            headers: {
                "Authorization": `Bearer ${auth.getToken()}`,
                "Content-type": "application/x-www-form-urlencoded"
            }
        }
    );
}