import styled from 'styled-components'

export const Root = styled.table`
    background-color: ${(props) => props.theme.white};
    width: 100%;
    border-radius: 20px;
    border-collapse: collapse;
`

export const Header = styled.thead``

export const Tr = styled.tr``

export const Th = styled.th`
    padding: 16px;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.secondBlack};
    font-size: 20px;
    font-weight: 700;
    border-bottom: 1px solid ${(props) => props.theme.lightGray};
    text-align: left;

    &:first-child {
        border-top-left-radius: 20px;
    }

    &:last-child {
        border-top-right-radius: 20px;
    }
`

export const Td = styled.td`
    padding: 16px;
    color: ${(props) => props.theme.secondBlack};
    font-weight: 500;
    line-height: 115%;
`

export const Body = styled.tbody``
