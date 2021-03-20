import styled from "styled-components";


const MarginTopStyle = styled.div`
    margin-top: 3rem;
`

export function MarginTopLarge(props) {
    return (
        <MarginTopStyle>
        {
            props.children
        }
        </MarginTopStyle>
    )
}
