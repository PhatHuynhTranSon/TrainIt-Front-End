import PropTypes from "prop-types";
import React from "react";
import SolutionDetails from "./solution";


function Solutions(props) {
    const { solutions } = props;

    //Display solutions
    return (
        <React.Fragment>
        {
            solutions.map((solution, index) => {
                return <SolutionDetails solution={solution}/>
            })
        }
        </React.Fragment>
    )
}

Solutions.propTypes = {
    solutions: PropTypes.array.isRequired
}

export default Solutions;