import React from "react";
import PropTypes from "prop-types";
import { InvertedButton } from "../../components/button";
import { SectionHeading } from "../../components/typography";
import FileInput from "../../components/input/file";

import { getDataPreview } from "../../api";
import MyTable from "../../components/table";

function ProjectDataSection(props) {
    const [file, setFile] = React.useState(null);
    const [filePreview, setFilePreview] = React.useState(null);

    function onFileChanged(file) {
        setFile(file);
        getPreview(file);
    }

    function getPreview(file) {
        const formData = wrapFileInFormData(file);

        getDataPreview(formData)
            .then(response => {
                const data = response.data;
                setFilePreview(data);
            })
            .catch(error => {
                //TODO: Error handling
            });
    }

    function wrapFileInFormData(file) {
        const formData = new FormData();
        formData.append("file", file);
        return formData;
    }

    return (
        <React.Fragment>
            <SectionHeading>Upload your dataset</SectionHeading>
            <FileInput  
                onFileChanged={onFileChanged}/>

            {
                filePreview ? 
                <MyTable
                    headers={filePreview.headers}
                    first_five={filePreview.first_5}
                    last_five={filePreview.last_5}/> 
                : null
            }

            <InvertedButton
                onClick={() => props.onFileSubmitted(file)}>
                Upload
            </InvertedButton>
        </React.Fragment>
    )
}

ProjectDataSection.propTypes = {
    onFileSubmitted: PropTypes.func.isRequired
}

export default ProjectDataSection;