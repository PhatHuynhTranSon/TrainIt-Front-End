import axios from "axios";
import {
    ROOT_URL
} from "./config";
import auth from "../authentication";


export function getSolutionWithId(projectId, solutionId) {
    return axios.get(
        ROOT_URL + `/projects/${projectId}/solutions/${solutionId}`,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${auth.getToken()}`
            }
        }
    );
}

export function getSolutionsWithIds(projectId, solutionIds) {
    const promiseArray = solutionIds.map(solutionId => getSolutionWithId(projectId, solutionId));
    return Promise.all(promiseArray);
}

export function createSolution(projectId, args) {
    return axios.post(
        ROOT_URL + `/projects/${projectId}/solutions`,
        args,
        {
            headers: {
                "Authorization": `Bearer ${auth.getToken()}`
            }
        }
    );
}

export const getSolutionUrl = async(projectId, solutionId) => {
    const url = await axios.get(
        ROOT_URL + `/projects/${projectId}/solutions/${solutionId}/download`,
        {
            headers: {
                "Authorization": `Bearer ${auth.getToken()}`
            }
        }
    )
    .then(response => response.data)
    .then(data => data.url);

    return url;
}