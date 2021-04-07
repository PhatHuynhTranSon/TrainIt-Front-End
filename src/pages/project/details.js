import React from "react";
import {
    useParams
} from "react-router-dom";
import styled from "styled-components";

import { getProjectDetails } from "../../api";

import ProjectName from "./projectname"
import MyTabs from "../../components/tab/tab";
import { MyTabPanel } from "../../components/tab";
import Summary from "./summary";
import SolutionDetails from "./solutions";
import Deployment from "./deployment";
import LoadingPage from "../loading";

const ProjectDetailsWrapperStyle = styled.div`

`;


function ProjectDetails(props) {
    //Get project id
    const { id } = useParams();

    //Project details states
    const [projectDetails, setProjectDetails] = React.useState(null);
    const [currentTab, setCurrentTab] = React.useState(0);

    //Get project details
    React.useEffect(() => {
        getProjectDetails(id)
            .then(response => {
                setProjectDetails(response.data);
            })
            .catch(error => {
                //TODO: Error handling
                console.log(error);
            });
    }, []);

    //Handle user input
    function onTabChange(event, newValue) {
        setCurrentTab(newValue);
    }

    return (
        projectDetails ? 
        <ProjectDetailsWrapperStyle>
            <ProjectName 
                projectName={projectDetails.project.name}
                projectType={projectDetails.project.type}/>

            <MyTabs 
                headers={["Summary", "Models", "Deployments"]}
                value={currentTab}
                handleChange={onTabChange}/>

            <MyTabPanel value={currentTab} index={0}>
                <Summary 
                    project={projectDetails.project}
                    data={projectDetails.data}/>
            </MyTabPanel>

            <MyTabPanel value={currentTab} index={1}>
                <SolutionDetails
                    project={projectDetails.project}/>
            </MyTabPanel>

            <MyTabPanel value={currentTab} index={2}>
                <Deployment project={projectDetails.project}/>
            </MyTabPanel>
        </ProjectDetailsWrapperStyle>
        : <LoadingPage />
    )
}

export default ProjectDetails;