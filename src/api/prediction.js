import axios from "axios";
import {
    ROOT_URL
} from "./config";


export function predictOnline(projectId, data) {
    return axios.post(
        `${ROOT_URL}/projects/${projectId}/prediction/online`, 
        {
            data
        }
    );
}