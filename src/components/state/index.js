import PropTypes from "prop-types";
import styled from "styled-components";


const StateStyle = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 5px solid #7209B7;
    font-size: 1rem;
    text-align: center;
    color: #515151;
    line-height: 9.5rem;
`


function SolutionState(props) {
    return (
        <StateStyle>
        { props.label }
        </StateStyle>
    )
}

SolutionState.propTypes = {
    label: PropTypes.string.isRequired
}

export default SolutionState;

