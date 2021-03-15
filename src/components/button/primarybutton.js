import styled from "styled-components";


const ButtonStyle = styled.a`
    background-color: white;
    padding: .75rem 1.5rem;
    margin-top: 20px;
    border-radius: 5px;
    color: #7209b7;
    cursor: pointer;
    display: inline-block;
    transition: all 0.2s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.7);
    }
`;

function Button(props) {
    return (
        <ButtonStyle {...props}>
            { props.children }
        </ButtonStyle>
    )
}

export default Button;