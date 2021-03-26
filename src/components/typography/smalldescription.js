import styled from "styled-components";


const SmallDescriptionStyle = styled.p`
    font-size: ${ props => props.medium ? "1.2rem" : "1rem" };
    color: black;
    margin: 1rem 0;
`;

function SmallDescription(props) {
    return (
        <SmallDescriptionStyle {...props}>
            { props.children }
        </SmallDescriptionStyle>
    )
}

export default SmallDescription;