import axios from "axios";
import { ROOT_URL } from "./config";
import auth from "../authentication";


export function createProject(formData) {
    return axios.post(
        ROOT_URL + "/projects",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${auth.getToken()}`
            }
        }
    );
}

export function getProjectDetails(projectId) {
    return axios.get(
        ROOT_URL + `/projects/${projectId}`,
        {
            headers: {
                "Authorization": `Bearer ${auth.getToken()}`
            }
        }
    );
}

export function getProjectSolutions(projectId) {
    return axios.get(
        ROOT_URL + `/projects/${projectId}/solutions`,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${auth.getToken()}`
            }
        }
    );
}

export function getAllProjects() {
    return axios.get(
        ROOT_URL + "/projects",
        {
            headers: {
                "Authorization": `Bearer ${auth.getToken()}`
            }
        }
    );
}