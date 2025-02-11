import { Link } from 'react-router-dom'
import styled from 'styled-components'

import BannerHamburger from '../../assets/banner-hamburger.png'
import Background from '../../assets/background.png'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.secondWhite};

    background: linear-gradient(
        rgba(255, 255, 255, 0.6), 
        rgba(255, 255, 255, 0.6)
        ), 
        url('${Background}');
`

export const Banner = styled.div`
    background: url('${BannerHamburger}');
    background-color: ${(props) => props.theme.mainBlack};
    background-size: cover;
    background-position: center;
    height: 480px;
    width: 100%;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: ${(props) => props.theme.white};
        position: absolute;
        right: 20%;
        top: 30%;

        span {
            display: block;
            color: ${(props) => props.theme.white};
            font-size: 20px;
        }
    }
`

export const CategoriesMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 50px;
`

export const CategoryButton = styled(Link)`
    background: none;
    color: ${(props) => (props.$isActiveCategory ? (props) => props.theme.purple : '#696969')};
    font-size: 24px;
    font-weight: 500;
    line-height: 20px;
    padding-bottom: 5px;
    text-decoration: none;
    cursor: pointer;
    border-bottom: ${(props) => (props.$isActiveCategory ? `3px solid ${(props) => props.theme.purple}` : 'none')};
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    gap: 60px;
    padding: 40px;
    max-width: 1280px;
    margin: 50px auto 0;
`
