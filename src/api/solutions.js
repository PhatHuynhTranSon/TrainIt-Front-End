import axios from "axios";
import {
    ROOT_URL
} from "./config";


export function getSolutionWithId(projectId, solutionId) {
    return axios.get(
        ROOT_URL + `/projects/${projectId}/solutions/${solutionId}`
    );
}

export function getSolutionsWithIds(projectId, solutionIds) {
    const promiseArray = solutionIds.map(solutionId => getSolutionWithId(projectId, solutionId));
    return Promise.all(promiseArray);
}