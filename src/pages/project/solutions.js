import PropTypes from "prop-types";
import React from "react";

import {
    getProjectSolutions,
    getSolutionsWithIds
} from "../../api";

import Solutions from "../../components/solutions/solutions";
import Section from "./section";

function SolutionDetails(props) {
    const { projectId } = props;

    const solutionIds = React.useRef();
    const intervalId = React.useRef();
    const previousSolutions = React.useRef([]);
    const [solutions, setSolutions] = React.useState([]);

    React.useEffect(() => {
        getProjectSolutions(projectId)
            .then(response => {
                solutionIds.current = response.data.solution_ids;
                getSolutionDetails();
                startRetrievingSolutions();
            })
            .catch(error => {
                //TODO: Error handling
            })
    }, []);

    function mergeSolutions(previousSolutions, currentSolutions) {
        const currentSolutionIds = currentSolutions.map(solution => solution.solution.id);

        const previousExcludedSolutions = previousSolutions.filter(
            solution => { 
                console.log(!currentSolutionIds.includes(solution.solution.id));
                return !currentSolutionIds.includes(solution.solution.id);
            }
        );

        const merged =  [
            ...previousExcludedSolutions, ...currentSolutions
        ];

        return merged;
    }

    function getSolutionDetails() {
        //First get all solutions from solution id
        getSolutionsWithIds(projectId, solutionIds.current)
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
            })
            .catch(error => {
                //TODO: Error handling
            });
    }

    function startRetrievingSolutions() {
        const id = setInterval(getSolutionDetails, 60000);
        intervalId.current = id;
    }

    function stopRetrievingSolutions() {
        clearInterval(intervalId.current);
    }

    return (
        <React.Fragment>
            <Section title="Models">
            {
                solutions ? <Solutions solutions={solutions}/> : null //TODO: Loading state
            }
            </Section>
        </React.Fragment>
    )
}

SolutionDetails.propTypes = {
    projectId: PropTypes.number.isRequired
}

export default SolutionDetails;