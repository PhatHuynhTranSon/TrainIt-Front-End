import PropTypes from "prop-types";
import React from "react";

import {
    getProjectSolutions,
    getSolutionsWithIds
} from "../../api";

import Solutions from "../../components/solutions/solutions";
import Section from "./section";
import { InvertedButton } from "../../components/button";
import SlidingPanel from "../../components/slidingpanel";
import { CloseIcon } from "../../components/icon";
import { SmallHeading } from "../../components/typography";
import ClassificationSolutionCreation from "./models/classification/classificationsolutions";
import Loading from "../../components/loading";
import RegressionSolutionCreation from "./models/regression/regressionsolutions";
import Graphs from "./graph";
import { MarginTopSmall } from "../../components/position";
import Padding from "../../components/spacing/padding";
import { Alert } from "@material-ui/lab";

function SolutionDetails(props) {
    const { project } = props;

    //Solutions
    const solutionIds = React.useRef();
    const intervalId = React.useRef();
    const previousSolutions = React.useRef([]);
    const [solutions, setSolutions] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    //Error
    const [error, setError] = React.useState();

    //Solution creation
    const [isSlidingPanelOpen, setSlidingPanelOpen] = React.useState(false);

    React.useEffect(() => {
        getSolutions();
    }, []);

    function getSolutions() {
        //Stop retrieving solutions
        if (intervalId.current) {
            stopRetrievingSolutions();
        }

        //Show loading icons
        setLoading(true);

        //Get solution and remove loading icons
        getProjectSolutions(project.id)
            .then(response => {
                solutionIds.current = response.data.solution_ids;
                getSolutionDetails();
                startRetrievingSolutions();
            })
            .catch(error => {
                //TODO: Error handling
                setLoading(false);
            })
    }

    function mergeSolutions(previousSolutions, currentSolutions) {
        const currentSolutionIds = currentSolutions.map(solution => solution.solution.id);

        const previousExcludedSolutions = previousSolutions.filter(
            solution => { 
                return !currentSolutionIds.includes(solution.solution.id);
            }
        );

        const merged =  [
            ...previousExcludedSolutions, ...currentSolutions
        ];

        //Sort based on IDs descending
        const sorted = merged.sort((a, b) => b.solution.id - a.solution.id);

        return sorted;
    }

    function getSolutionDetails() {
        //First get all solutions from solution id
        getSolutionsWithIds(project.id, solutionIds.current)
            .then(responses => {
                //Array of solution data
                const solutionsData = responses.map(response => response.data);
                const mergedSolutions = mergeSolutions(previousSolutions.current, solutionsData);
                previousSolutions.current = mergedSolutions;
                setSolutions(mergedSolutions);

                //Then remove solution ids where the state is completed
                //As all information will be collected
                const runningSolutions = solutionsData.filter(solution => solution.status !== "Completed");
                const runningSolutionIds = runningSolutions.map(solution => solution.solution.id);
                if (runningSolutions.length === 0) {
                    //If no solutions are left -> Clear interval
                    stopRetrievingSolutions();
                }

                //Set the solution ids for next iteration
                solutionIds.current = runningSolutionIds;

                //Set loading to false
                setLoading(false);
            })
            .catch(error => {
                //TODO: Error handling
                setLoading(false);
            });
    }

    function startRetrievingSolutions() {
        const id = setInterval(getSolutionDetails, 50000);
        intervalId.current = id;
    }

    function stopRetrievingSolutions() {
        clearInterval(intervalId.current);
    }

    //Handle sliding panel
    function onButtonClick() {
        setSlidingPanelOpen(true);
    }

    function isClassificationProject() {
        return project.type === "classification";
    }

    //Handling solution creation
    function onSolutionCreated(solution) {
        //Close sliding panel
        setSlidingPanelOpen(false);

        //Get solution id and add to solution id
        getSolutions();
    }

    function onSolutionError(error) {
        //Close sliding panel
        setSlidingPanelOpen(false);
        //TODO: Display error
        setError(error);
    }

    function filterForCompletedSolution() {
        return solutions.filter(solution => {
            return solution.status === "Completed"
        });
    }

    const completedSolutions = filterForCompletedSolution();

    return (
        <React.Fragment>
            {
                <Section title="Visualization">
                    <Padding padding="10px">
                    {
                        loading ? 
                        <Loading label="Retrieving graphs"/> : 
                        (
                            completedSolutions.length > 0 ?
                            <Graphs type={project.type} solutions={solutions}/> :
                            <Alert severity="warning">No models have been trained</Alert>
                        )
                    }
                    </Padding>
                </Section>
            }

            <Section title="Models">
                {
                    error ?
                    <Alert severity="error">{ error.message }</Alert> : null
                }
                <MarginTopSmall>
                    <InvertedButton
                        onClick={onButtonClick}>Create a solution</InvertedButton>
                </MarginTopSmall>
                {
                    <MarginTopSmall>
                    {
                        loading ? 
                        <Loading label="Retrieving solutions"/> :
                        (solutions && solutions.length > 0 ? <Solutions solutions={solutions}/> : <Alert severity="warning">No models have been trained</Alert>)//TODO: Loading state
                    }
                    </MarginTopSmall>
                }
                
            </Section>
            
            <SlidingPanel
                open={isSlidingPanelOpen}
                onClose={() => {}}>

                <div style={{ position: "relative" }}>
                    <CloseIcon onClick={() => setSlidingPanelOpen(false)}/>
                    <SmallHeading>Create a solution</SmallHeading>
                </div>

                {
                    isClassificationProject() ?
                    <ClassificationSolutionCreation 
                        project={project}
                        onSolutionCreatedSuccessfully={onSolutionCreated}
                        onSolutionCreatedError={onSolutionError}/> :
                    <RegressionSolutionCreation
                        project={project}
                        onSolutionCreatedSuccessfully={onSolutionCreated}
                        onSolutionCreatedError={onSolutionError}/>
                }
            </SlidingPanel>
        </React.Fragment>
    )
}

SolutionDetails.propTypes = {
    project: PropTypes.object.isRequired
}

export default SolutionDetails;