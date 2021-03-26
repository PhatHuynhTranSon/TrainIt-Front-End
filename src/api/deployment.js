import axios from "axios";
import {
    ROOT_URL
} from "./config";


export function getDeployment(projectId) {
    return axios.get(`${ROOT_URL}/projects/${projectId}/deploy`);
}

export function deploy(projectId) {
    return axios.post(`${ROOT_URL}/projects/${projectId}/deploy`)
}

export function undeploy(projectId) {
    return axios.delete(`${ROOT_URL}/projects/${projectId}/deploy`)
}