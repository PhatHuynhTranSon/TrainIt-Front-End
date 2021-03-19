import PropTypes from "prop-types";
import React from "react";
import SolutionShortenedDetails from "./solutionshort";

function Solutions(props) {
    const { solutions } = props;

    //Display solutions
    return (
        <React.Fragment>
        {
            solutions.map((solution, index) => {
                return <SolutionShortenedDetails solution={solution} key={index}/>
            })
        }
        </React.Fragment>
    )
}

Solutions.propTypes = {
    solutions: PropTypes.array.isRequired
}

export default Solutions;