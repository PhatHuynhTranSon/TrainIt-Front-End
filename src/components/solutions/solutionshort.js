import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Grid } from "@material-ui/core";

import styled from "styled-components";

import SolutionState from "../state";

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

//Shortened version of details
function SolutionShortenedDetails(props) {
    const { solution } = props;

    return (
        <Grid container>
            <Grid item xs={10}>
                <SolutionName>{ solution.solution.algorithm_name }</SolutionName>
                <JobName>{ solution.solution.job_name }</JobName>
            </Grid>

            <Grid item xs={2}>
                <SolutionState label={ solution.secondary_status }/>
            </Grid>
        </Grid>
    )
}

SolutionShortenedDetails.propTypes = {
    solution: PropTypes.object.isRequired
}

export default SolutionShortenedDetails;