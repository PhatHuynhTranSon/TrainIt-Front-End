import React from "react";
import {
    useParams
} from "react-router-dom";
import styled from "styled-components";

import { getProjectDetails } from "../../api";

import ProjectName from "./projectname";
import Section from "../project/section";
import MyTable from "../../components/table";

const ProjectDetailsWrapperStyle = styled.div`
    padding: 2rem;
`;


function ProjectDetails(props) {
    //Get project id
    const { id } = useParams();

    //Project details states
    const [projectDetails, setProjectDetails] = React.useState(null);

    //Get project details
    React.useEffect(() => {
        getProjectDetails(id)
            .then(response => {
                setProjectDetails(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    });

    return (
        projectDetails ? 
        <ProjectDetailsWrapperStyle>
            <ProjectName 
                projectName={projectDetails.project.name}
                projectType={projectDetails.project.type}/>

            <Section title="Description">
                <p>{ projectDetails.project.description }</p>
            </Section>

            <Section title="Data">
                <MyTable 
                    headers={projectDetails.data.headers}
                    first_five={projectDetails.data.first_5}
                    last_five={projectDetails.data.last_5}/>
            </Section>
        </ProjectDetailsWrapperStyle>
        : null
    )
}

export default ProjectDetails;