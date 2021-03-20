import styled from "styled-components";


const MediumHeadingStyle = styled.h4`
    color: #6c757d;
    font-weight: 400;
    font-size: 2.5rem;
    
`

function MediumHeading(props) {
    return (
        <MediumHeadingStyle {...props}>
            { props.children }
        </MediumHeadingStyle>
    )
}

export default MediumHeading;