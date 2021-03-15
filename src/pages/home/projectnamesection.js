import React from "react";
import { InvertedButton } from "../../components/button";
import { MyTextField } from "../../components/input";
import { SectionHeading } from "../../components/typography";


function ProjectNameSection(props) {
    return (
        <React.Fragment>
            <SectionHeading>Let's choose a name for the project</SectionHeading>
            <MyTextField id="project-name" label="Enter project name" size="medium"/>
            <InvertedButton>Next</InvertedButton>
        </React.Fragment>
    )
}

export default ProjectNameSection;