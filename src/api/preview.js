import axios from "axios";
import { ROOT_URL } from "./config";


function getDataPreview(formData) {
    return axios.post(
        ROOT_URL + "/preview",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );
}

export {
    getDataPreview
};