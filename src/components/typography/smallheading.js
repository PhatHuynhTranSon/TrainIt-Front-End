import styled from "styled-components";


const SmallHeadingStyle = styled.h4`
    color: #6c757d;
    font-weight: 400;
    display: inline-block;
    margin-left: 2rem;
    position: absolute;
    top: -2px;
`

function SmallHeading(props) {
    return (
        <SmallHeadingStyle {...props}>
            { props.children }
        </SmallHeadingStyle>
    )
}

export default SmallHeading;