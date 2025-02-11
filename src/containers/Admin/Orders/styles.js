import styled from 'styled-components'
import Select from 'react-select'

export const Filter = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin: 28px 0;
`

export const FilterOptions = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    border-bottom: ${(props) => (props.$isActiveStatus ? `3px solid ${props.theme.purple}` : 'none')};
    color: ${(props) => (props.$isActiveStatus ? props.theme.purple : props.theme.darkGray)};
    font-size: 18px;
    font-weight: ${(props) => (props.$isActiveStatus ? 'bold' : 'none')};
    line-height: 20px;
    padding-bottom: 5px;
`

export const ProductImage = styled.img`
    height: 80px;
    padding: 12px;
    border-radius: 16px;
`

export const SelectStatus = styled(Select)`
    width: 240px;
`
