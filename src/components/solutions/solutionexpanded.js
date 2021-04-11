import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { MarginTopLarge, MarginTopSmall } from "../position";
import ParameterTable from "../table/parametertable";
import MetricsTable from "../table/metrictable";
import SolutionState from "../state";
import InvertedButton from "../button/invertedbutton";
import { getSolutionUrl } from "../../api/solutions";

const SolutionName = styled.h3`
    font-size: 2rem;
    font-weight: 400;
    color: #7209B7;
`

const JobName = styled.h4`
    font-size: 1.1rem;
    font-weight: 400;
    color: #B5B5B5;
`

const DetailName = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
    color: #7209B7;
`;

function SolutionExpandedDetails(props) {
    const { solution } = props;

    function isSolutionCompleted() {
        return solution.secondary_status === "Completed";
    }

    async function onDownloadButtonClicked() {
        //Make api call
        const projectId = solution.solution.project_id;
        const solutionId = solution.solution.id;
        const url = await getSolutionUrl(projectId, solutionId);

        //Redirect
        redirect(url);
    }

    function redirect(url) {
        window.location.href = url;
    }

    function extractMetrics(solution) {
        if (solution.type === "classification") {
            return {
                "train_accuracy": solution.solution.train_accuracy,
                "test_accuracy": solution.solution.test_accuracy,
                "train_f1": solution.solution.train_f1,
                "test_f1": solution.solution.test_f1,
            }
        } else {
            return {
                "train_mse": solution.solution.train_mse,
                "test_mse": solution.solution.test_mse
            }
        }
    }

    return (
        <React.Fragment>
            <SolutionName>{ solution.solution.algorithm_name }</SolutionName>
            <JobName>{ solution.solution.job_name }</JobName>

            <MarginTopLarge>
                <DetailName>Parameters</DetailName>
                <ParameterTable parameters={solution.parameters}/>

                <DetailName>Metrics</DetailName>
                {
                    isSolutionCompleted() ?
                    <MetricsTable metrics={extractMetrics(solution)}/> :
                    <SolutionState label={ solution.secondary_status }/>
                }
            </MarginTopLarge>

            <MarginTopLarge>
                <DetailName>Download</DetailName>
                <MarginTopSmall>
                {
                    isSolutionCompleted() ?
                    <InvertedButton width="100%" onClick={onDownloadButtonClicked}>Download model</InvertedButton> :
                    null
                }
                </MarginTopSmall>
            </MarginTopLarge>
        </React.Fragment>
    )
}

SolutionExpandedDetails.propTypes = {
    solution: PropTypes.object.isRequired
}

export default SolutionExpandedDetails;

