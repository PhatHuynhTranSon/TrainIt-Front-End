import React  from "react";
import { InvertedButton } from "../../components/button";
import { SectionHeading } from "../../components/typography";

import PropTypes from "prop-types";
import TypeInput from "../../components/input/type";


function ProjectTypeSection(props) {
    //State to hold input
    const [projectType, setProjectType] = React.useState("classification");

    //Handle user input
    function onProjectTypeSubmitted() {
        props.onProjectTypeSubmitted(projectType);
    }

    function onProjectTypeSelected(type) {
        setProjectType(type);
    }


    return (
        <React.Fragment>
            <SectionHeading>What problem do you want to solve ?</SectionHeading>
            <TypeInput onTypeSelected={onProjectTypeSelected}/>
            <InvertedButton
                onClick={() => onProjectTypeSubmitted()}>
                Next
            </InvertedButton>
        </React.Fragment>
    )
}

ProjectTypeSection.propTypes = {
    onProjectTypeSubmitted: PropTypes.func.isRequired
}

export default ProjectTypeSection;
