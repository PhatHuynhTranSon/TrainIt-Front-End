import axios from "axios";
import { ROOT_URL } from "./config";


export function createProject(formData) {
    return axios.post(
        ROOT_URL + "/projects",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );
}

export function getProjectDetails(projectId) {
    return axios.get(
        ROOT_URL + `/projects/${projectId}`
    );
}