import styled from "styled-components";


const MediumHeadingStyle = styled.h4`
    color: #7209b7;
    font-weight: 400;
    font-size: 2.5rem;
    margin-bottom: 1rem;
`

function MediumHeading(props) {
    return (
        <MediumHeadingStyle {...props}>
            { props.children }
        </MediumHeadingStyle>
    )
}

export default MediumHeading;