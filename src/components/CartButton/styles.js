import styled from 'styled-components'

export const ContainerButton = styled.button`
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    width: 100%;
    height: 52px;
    border: none;
    border-radius: 5px;
    font-size: 30px;
`
