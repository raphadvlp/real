import styled from 'styled-components';
import BackgroundTop from '../../assets/rio.jpg';
import BackgroundLoja from '../../assets/institucional.jpg';

export const Apresentacao = styled.div`
    background-position: center;
    background-image: url(${BackgroundTop});
    min-height: 150px;
    margin-bottom: 5px;
    background-repeat: no-repeat;
    position: relative;
    background-size: cover;
`;

export const Container = styled.div`
    max-width:1100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height:100%;
    margin: auto;

    .content h3 {
        color:#FFF;
        font-size: 50px;
        text-align: center;
    }

    .lojas {
        display: flex;
        flex-direction: column;
        width: 250px;
        min-height: 450px;
        margin: 10px;
        text-align: center;
        border: 1px solid #CCC;
        border-radius: 20px;
        background-color: #efc300;
    }

    .local {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
    }

    .img--loja {
        flex: 1;
        background-image: url(${BackgroundLoja});
        background-size: cover;
    }

    .text--local {
        height: 230px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        flex-direction: column;
    }

    .text--block a {
        display: inline-block;
        background-color: green;
        border-radius: 3px;
        text-decoration: none;
        font-size: 13px;
        padding: 5px;
        color: #FFF;
        text-transform: uppercase;
        text-shadow: 0.1em 0.1em 0.1em rgb(0 0 0 / 20%);
        margin-bottom: 10px;
    }

    .text--block,
    .horario--loja {
        font-size: 13px;  
    }
`;