import React from "react";
import PropTypes from "prop-types";
import SolutionBarChart from "./bargraph";
import { Grid } from "@material-ui/core";
import PurpleSubHeading from "../../../components/typography/purplesubheading";


function Graphs({ solutions, type }) {
    function mapSolutions(solutions, metric) {
        return solutions.map(item => {
            return {
                "algorithm_name": item.solution.algorithm_name,
                "job_name": item.solution.job_name,
                "data": item.solution[metric]
            }
        });
    }

    //Render graphs
    return (
        <React.Fragment>
            <Grid container>
                {
                    type === "regression" ? 
                    <React.Fragment>
                        <Grid item xs={6}>
                            <PurpleSubHeading>Train MSE</PurpleSubHeading>
                            <SolutionBarChart 
                            data={mapSolutions(solutions, "train_mse")}
                            label="Train MSE"/>
                        </Grid>

                        <Grid item xs={6}>
                            <PurpleSubHeading>Test MSE</PurpleSubHeading>
                            <SolutionBarChart 
                            data={mapSolutions(solutions, "test_mse")}
                            label="Test MSE"/>
                        </Grid>
                    </React.Fragment> : 
                    <React.Fragment>
                        <Grid item xs={3}>
                            <PurpleSubHeading>Train accuracy</PurpleSubHeading>
                            <SolutionBarChart 
                            data={mapSolutions(solutions, "train_accuracy")}
                            label="Train accuracy"/>
                        </Grid>

                        <Grid item xs={3}>
                            <PurpleSubHeading>Test accuracy</PurpleSubHeading>
                            <SolutionBarChart 
                            data={mapSolutions(solutions, "test_accuracy")}
                            label="Test accuracy"/>
                        </Grid>

                        <Grid item xs={3}>
                            <PurpleSubHeading>Train F1</PurpleSubHeading>
                            <SolutionBarChart 
                            data={mapSolutions(solutions, "train_f1")}
                            label="Train F1"/>
                        </Grid>

                        <Grid item xs={3}>
                            <PurpleSubHeading>Test F1</PurpleSubHeading>
                            <SolutionBarChart 
                            data={mapSolutions(solutions, "test_f1")}
                            label="Test F1"/>
                        </Grid>
                    </React.Fragment>
                }
            </Grid>
        </React.Fragment>
    )
}

Graphs.propTypes = {
    solutions: PropTypes.array.isRequired
}

export default Graphs;