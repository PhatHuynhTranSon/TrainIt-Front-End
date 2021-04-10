import { Grid } from "@material-ui/core";
import React from "react";
import { getAllProjects } from "../../api";
import { MarginTopLarge } from "../../components/position";
import Padding from "../../components/spacing/padding";
import MediumHeading from "../../components/typography/mediumheading";
import NoProjectMessage from "./noprojects";
import ProjectCard from "./project/projectcard";


function Dashboard(props) {
    //Get all projects
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        getProjects();
    }, []);

    //Get all projects
    function getProjects() {
        getAllProjects()
            .then(response => {
                const { data } = response;
                const fetchedProjects = data.projects;
                setProjects(fetchedProjects);
            })
            .catch(error => {
                //TODO: Error Handling
            });
    }
    return (
        <React.Fragment>
            <Padding padding="3rem">
                <MediumHeading>My projects</MediumHeading>

                <MarginTopLarge>
                    <Grid container>
                    {
                        projects.length > 0 ? 
                        <React.Fragment>
                        {
                            projects.map((project, index) => <Grid item xs={4} key={index}><ProjectCard project={project}/></Grid>)
                        }
                        </React.Fragment> 
                        : <NoProjectMessage />
                    }
                    </Grid>
                </MarginTopLarge>
            </Padding>
        </React.Fragment>
    )
}

export default Dashboard;