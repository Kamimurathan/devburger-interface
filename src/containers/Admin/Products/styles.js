import styled from 'styled-components'

export const Container = styled.div``

export const ProductImage = styled.img`
    height: 80px;
    padding: 12px;
    border-radius: 16px;
    background-color: ${(props) => props.theme.black};
`

export const EditButton = styled.button`
    height: 32px;
    width: 32px;
    border-radius: 8px;
    border: none;
    background-color: ${(props) => props.theme.darkWhite};
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        height: 18px;
        width: 18px;
    }

    &:hover {
        background-color: ${(props) => props.theme.purple};

        svg {
            fill: ${(props) => props.theme.white};
        }
    }
`
