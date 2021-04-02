import PropTypes from "prop-types";
import styled from "styled-components";

const StateLoadingWrapperStyle = styled.div`
    position: relative;
`;

const StateLoadingStyle = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 5px solid #e9c46a;
    border-top: 5px solid transparent;
    font-size: 1rem;
    text-align: center;
    color: #515151;
    line-height: 9.5rem;
    margin: 5px auto;
    text-align: center;
    animation: rotation 2s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`

const StateLoadingTextStyle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

function SolutionLoadingState(props) {
    return (
        <StateLoadingWrapperStyle>
            <StateLoadingStyle />
            <StateLoadingTextStyle>{ props.label }</StateLoadingTextStyle>
        </StateLoadingWrapperStyle>
    )
}


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

function State(props) {
    function isDone(state) {
        return ["Completed", "Failed"].includes(state);
    }

    console.log(props.label in ["Completed", "Failed"]);

    return (
        isDone(props.label) ?
        <SolutionState {...props}/> :
        <SolutionLoadingState {...props}/>
    )
}

State.propTypes = {
    label: PropTypes.string.isRequired
}

export default State;

