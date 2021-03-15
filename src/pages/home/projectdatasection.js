import React from "react";
import PropTypes from "prop-types";
import { InvertedButton } from "../../components/button";
import { SectionHeading } from "../../components/typography";
import FileInput from "../../components/input/file";


function ProjectDataSection(props) {
    const [file, setFile] = React.useState(null);

    return (
        <React.Fragment>
            <SectionHeading>Upload your dataset</SectionHeading>
            <FileInput onFileSubmitted={() => {}}/>
            <InvertedButton
                onClick={props.onFileSubmitted(file)}>
                Upload
            </InvertedButton>
        </React.Fragment>
    )
}

ProjectDataSection.propTypes = {
    onFileSubmitted: PropTypes.func.isRequired
}

export default ProjectDataSection;