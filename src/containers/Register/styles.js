import styled from 'styled-components'
import { Link as ReactLink } from 'react-router-dom'

import BackgroundLogin from '../../assets/background-login.png'
import Background from '../../assets/background.png'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`

export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    max-width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RightContainer = styled.div`
    background: url('${Background}');
    background-size: cover;
    background-color: #1e1e1e;
    height: 100%;
    width: 100%;
    max-width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
        color: ${(props) => props.theme.white};
        font-size: 18px;
        font-weight: 800;

        a {
            text-decoration: underline;
        }
    }
`

export const Title = styled.h1`
    font-family: "Road Rage", sans-serif;
    color: ${(props) => props.theme.purple};
    font-size: 40px;
    font-weight: 300;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    label {
        color: ${(props) => props.theme.white};
        font-size: 18px;
        font-weight: 300;
        padding-left: 5px;
    }

    p {
        color: ${(props) => props.theme.darkRed};
        font-size: 14px;
        font-weight: 600;
        line-height: 80%;
        height: 10px;
    }
`

export const Input = styled.input`
        background: ${(props) => props.theme.white};
        width: 100%;
        height: 35px;
        border: ${(props) => (props.error ? `2px solid  ${(props) => props.theme.darkRed}` : 'none')};
        border-radius: 5px;
        padding: 0 5px;
`

export const Link = styled(ReactLink)`
    text-decoration: underline;
    color: ${(props) => props.theme.white};
`
