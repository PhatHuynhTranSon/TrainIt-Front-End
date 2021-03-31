import React  from "react";
import { InvertedButton } from "../../components/button";
import { MyTextField } from "../../components/input";
import { SectionHeading } from "../../components/typography";

import PropTypes from "prop-types";


function ProjectDescSection(props) {
    //State to hold input
    const [projectDesc, setProjectDesc] = React.useState('');

    //Handle user input
    function onProjectDescSubmitted() {
        props.onProjectDescSubmitted(projectDesc);
    }

    //Handle user
    function onProjectDescChanged(event) {
        const projectDesc = event.target.value;
        setProjectDesc(projectDesc);
    }


    return (
        <React.Fragment>
            <SectionHeading>Let's choose a description for the project</SectionHeading>
            <MyTextField 
                id="project-desc" 
                label="Enter project description" 
                size="medium"
                onChange={onProjectDescChanged}/>
            <InvertedButton
                onClick={onProjectDescSubmitted}>
                Next
            </InvertedButton>
        </React.Fragment>
    )
}

ProjectDescSection.propTypes = {
    onProjectDescSubmitted: PropTypes.func.isRequired
}

export default ProjectDescSection;
