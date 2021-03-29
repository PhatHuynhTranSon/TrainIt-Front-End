import styled from "styled-components";


const MarginTopLargeStyle = styled.div`
    margin-top: 3rem;
`;

const MarginTopSmallStyle = styled.div`
    margin-top: 1rem;
`

const Width50Style = styled.div`
    width: 50%;
    margin: auto;
`;

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

export function Width50(props) {
    return (
        <Width50Style>
        {
            props.children
        }
        </Width50Style>
    )
}
