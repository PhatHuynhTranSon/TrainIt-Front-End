import styled from "styled-components";


const SubHeadingStyle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    color: white;
`;

function SubHeading(props) {
    return (
        <SubHeadingStyle {...props}>
            { props.children }
        </SubHeadingStyle>
    )
}

export default SubHeading;