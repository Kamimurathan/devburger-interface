import styled from 'styled-components'

export const Container = styled.div`
    .carousel-item {
        padding: 0 40px;
    }

    overflow-x: hidden;

    .react-multi-carousel-list {
        overflow: visible;
    }

    .react-multiple-carousel__arrow--left {
        left: 50px;
        top: 10px;
    }

    .react-multiple-carousel__arrow--right {
        right: 50px;
        top: 10px;
    }

    padding-bottom: 40px;
`

export const Title = styled.h2`
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
