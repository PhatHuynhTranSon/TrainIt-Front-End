import axios from "axios";
import {
    ROOT_URL
} from "./config";
import auth from "../authentication";


export function getDeployment(projectId) {
    return axios.get(`${ROOT_URL}/projects/${projectId}/deploy`, {
        headers: {
            "Authorization": `Bearer ${auth.getToken()}`
        }
    });
}

export function deploy(projectId) {
    return axios.post(`${ROOT_URL}/projects/${projectId}/deploy`, null, {
        headers: {
            "Authorization": `Bearer ${auth.getToken()}`
        }
    });
}

export function undeploy(projectId) {
    return axios.delete(`${ROOT_URL}/projects/${projectId}/deploy`, {
        headers: {
            "Authorization": `Bearer ${auth.getToken()}`
        }
    });
}