import styled from "styled-components";


const ColorStyle = styled.span`
    color: ${props => props.warning ? "#e63946" : "#2a9d8f" }
`

export default ColorStyle;