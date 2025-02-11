import styled from 'styled-components'

export const ProductImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 16px;
`

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme.purple};
        border: none;
        border-radius: 4px;
        transition: all 0.4s;

        &:hover {
            background-color: ${(props) => props.theme.secondDarkPurple};
        }
    }
`

export const ProductTotalPrice = styled.div`
    font-weight: bold;
`

export const TrashImage = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`

export const EmptyCart = styled.p`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`
