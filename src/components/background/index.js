import styled from "styled-components";


const BackgroundStyle = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: ${props => props.dark ? "#000000" : "linear-gradient(to right bottom, #4361ee, #7209b7)"};
    padding: 8rem;
`

function Background(props) {
    return (
        <BackgroundStyle {...props}>
            { props.children }
        </BackgroundStyle>
    )
}

export default Background;

