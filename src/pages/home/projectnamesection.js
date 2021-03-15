import React  from "react";
import { InvertedButton } from "../../components/button";
import { MyTextField } from "../../components/input";
import { SectionHeading } from "../../components/typography";

import PropTypes from "prop-types";


function ProjectNameSection(props) {
    //State to hold input
    const [projectName, setProjectName] = React.useState('');

    //Handle user input
    function onProjectNameSubmitted() {
        props.onProjectNameSubmitted(projectName);
    }

    //Handle user
    function onProjectNameChanged(event) {
        const projectName = event.target.value;
        setProjectName(projectName);
    }


    return (
        <React.Fragment>
            <SectionHeading>Let's choose a name for the project</SectionHeading>
            <MyTextField 
                id="project-name" 
                label="Enter project name" 
                size="medium"
                onChange={onProjectNameChanged}/>
            <InvertedButton
                onClick={onProjectNameSubmitted}>
                Next
            </InvertedButton>
        </React.Fragment>
    )
}

ProjectNameSection.propTypes = {
    onProjectNameSubmitted: PropTypes.func.isRequired
}

export default ProjectNameSection;