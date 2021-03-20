import styled from "styled-components";


const MarginTopLargeStyle = styled.div`
    margin-top: 3rem;
`

const MarginTopSmallStyle = styled.div`
    margin-top: 1rem;
`

export function MarginTopLarge(props) {
    return (
        <MarginTopLargeStyle>
        {
            props.children
        }
        </MarginTopLargeStyle>
    );
}

export function MarginTopSmall(props) {
    return (
        <MarginTopSmallStyle>
        {
            props.children
        }
        </MarginTopSmallStyle>
    );
}
