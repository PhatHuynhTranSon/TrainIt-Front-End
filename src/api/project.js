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