import styled from "styled-components";


const HeadingStyle = styled.h1`
    font-size: 3rem;
    color: white;
`;

function Heading(props) {
    return (
        <HeadingStyle {...props}>
            { props.children }
        </HeadingStyle>
    )
}

export default Heading;