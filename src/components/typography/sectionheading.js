import styled from "styled-components";


const SectionHeadingStyle = styled.h1`
    color: black;
    font-weight: 500;
    font-size: 2rem;
    margin: 2rem 0;
    width: 50%;
`

function SectionHeading(props) {
    return (
        <SectionHeadingStyle {...props}>
            { props.children }
        </SectionHeadingStyle>
    )
}

export default SectionHeading;