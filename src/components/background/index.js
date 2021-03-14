import styled from "styled-components";


const BackgroundStyle = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-image: linear-gradient(to right bottom, #4361ee, #7209b7);
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

