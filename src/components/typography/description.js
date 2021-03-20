import styled from "styled-components";


const DescriptionStyle = styled.p`
    font-size: 1.2rem;
    color: black;
`;

function Description(props) {
    return (
        <DescriptionStyle {...props}>
            { props.children }
        </DescriptionStyle>
    )
}

export default Description;