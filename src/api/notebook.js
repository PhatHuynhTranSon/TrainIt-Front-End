import axios from "axios";
import auth from "../authentication";
import { ROOT_URL } from "./config";


export const createNotebook = async (name) => {
    const response = await axios.post(
        ROOT_URL + "/notebooks",
        {
            name
        },
        {
            "headers": {
                "Authorization": `Bearer ${auth.getToken()}`
            }
        }
    )
    .then(response => response.data);

    return response;
}

export const getAllNotebookId = async () => {
    const ids = await axios.get(
        ROOT_URL + "/notebooks",
        {
            "headers": {
                "Authorization": `Bearer ${auth.getToken()}`
            }
        }
    )
    .then(response => response.data)
    .then(data => data.notebook_ids);

    return ids;
}

export const getNotebookWithId = async (id) => {
    const notebooks = await axios.get(
        ROOT_URL + `/notebooks/${id}`,
        {
            "headers": {
                "Authorization": `Bearer ${auth.getToken()}`
            }
        }
    )
    .then(response => response.data);
    return notebooks;
}

export const getNoteBooksWithIds = async (ids) => {
    const promises = ids.map(id => getNotebookWithId(id));
    return await Promise.all(promises);
}

export const startNotebook = async (id) => {
    const response = await axios.post(
        ROOT_URL + `/notebooks/start/${id}`,
        null,
        {
            "headers": {
                "Authorization": `Bearer ${auth.getToken()}`
            }
        }
    )
    .then(response => response.data);

    return response;
}

export const stopNotebook = async (id) => {
    const response = await axios.post(
        ROOT_URL + `/notebooks/stop/${id}`,
        null,
        {
            "headers": {
                "Authorization": `Bearer ${auth.getToken()}`
            }
        }
    )
    .then(response => response.data);

    return response;
}

export const getNotebookUrl = async (id) => {
    const response = await axios.get(
        ROOT_URL + `/notebooks/url/${id}`,
        {
            "headers": {
                "Authorization": `Bearer ${auth.getToken()}`
            }
        }
    )
    .then(response => response.data)
    .then(data => data.url);

    return response;
}