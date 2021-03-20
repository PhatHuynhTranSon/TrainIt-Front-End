import styled from "styled-components";


const PurpleSubHeadingStyle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    color: #7209b7;
    margin: 1rem 0;
`;

function PurpleSubHeading(props) {
    return (
        <PurpleSubHeadingStyle {...props}>
            { props.children }
        </PurpleSubHeadingStyle>
    )
}

export default PurpleSubHeading;