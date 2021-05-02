import styled from 'styled-components';
import ImagemBanner from '../../assets/banner.jpg';


export const Banner = styled.div`
    background: url(${ImagemBanner}) center;
    background-size: cover;
    background-repeat:no-repeat;

    padding: 0;
    margin: 0;

    width: 100%;
    height:400px;

    @media (max-width:600px) {
        & {
            display:none;
        }
    }

`;  


export const Container = styled.div`
    max-width: 1100px;
    width:100%;
    height:100%;
    margin:auto;
    display:flex;
    justify-content:center;
    flex-direction:column;

    /*.img-historia {
        height:500px;
        width:100%;
        text-align:center;
        line-height:500px;
        background-color: blue;
        margin-top:15px;
    }*/

    .img-historia {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:15px;
        flex-direction:column;
    }
    
    img {
        height:400px;
        width:600px;
    }

@media (max-width:600px) {
        img {
            width:450px;
            height:300px;
        }

        p {
            text-align:center;
            margin-left:10px;
            margin-right:10px;
        }
    }

`;


