import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
    .carousel-item {
        padding: 0 40px;
    }

    .react-multiple-carousel__arrow--left {
        left: 50px;
        top: 10px;
    }

    .react-multiple-carousel__arrow--right {
        right: 50px;
        top: 10px;
    }

    cursor: grab;
`

export const Title = styled.h2`
    color: ${(props) => props.theme.purple};
    font-size: 32px;
    font-weight: 800;
    padding-top: 40px;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 40px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        background-color: ${(props) => props.theme.purple};
        width: 56px;
        height: 4px;
        left: calc(50% - 28px);
    }
`

export const ContainerItems = styled.div`
    background: url('${(props) => props.imageUrl}'), no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 20px;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 250px;
`

export const CategoryButton = styled(Link)`
    color: ${(props) => props.theme.white};
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: bold;
    margin-top: 120px;
    text-decoration: none;

    &:hover {
        background-color: ${(props) => props.theme.purple};
    }
`
