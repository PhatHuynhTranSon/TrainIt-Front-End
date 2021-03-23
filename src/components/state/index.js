import PropTypes from "prop-types";
import styled from "styled-components";


function getButtonColor(props) {
    if (props.label === "Completed") {
        return "#06d6a0";
    } else if (props.label === "Failed") {
        return "#e63946";
    } else {
        return "#7209B7";
    }
}

const StateStyle = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 5px solid ${props => getButtonColor(props)};
    font-size: 1rem;
    text-align: center;
    color: #515151;
    line-height: 9.5rem;
    margin: 5px auto;
`

function SolutionState(props) {
    return (
        <StateStyle label={props.label}>
            { props.label }
        </StateStyle>
    )
}

SolutionState.propTypes = {
    label: PropTypes.string.isRequired
}

export default SolutionState;

