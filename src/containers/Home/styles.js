import styled from 'styled-components'

import BannerHome from '../../assets/banner-home.png'
import Background from '../../assets/background.png'

export const Banner = styled.div`
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 480px;

    h1 {
        color: ${(props) => props.theme.darkWhite};
        font-size: 80px;
        font-family: 'Road Rage', sans-serif;
        position: absolute;
        right: 20%;
        top: 10%;
    }
`

export const Container = styled.section`
    background: linear-gradient(
        rgba(255, 255, 255, 0.6), 
        rgba(255, 255, 255, 0.6)
        ), 
        url('${Background}');
    min-height: 100vh;
`
