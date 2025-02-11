import styled from 'styled-components'
import Texture from '../../assets/texture.png'
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
    background: url('${Texture}');
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 180px;

    img {
        height: 150px;
    }
`

export const Title = styled.h1`
    color: ${(props) => props.theme.green};
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
        background-color: ${(props) => props.theme.green};
        width: 56px;
        height: 4px;
        left: calc(50% - 28px);
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 30%;
    gap: 40px;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
`
