import styled from 'styled-components';
import ImagemAcougue from '../../assets/Acougue.jpg';
import ImagemBebida from '../../assets/bebida.jpg';
import ImagemBiscoito from '../../assets/biscoito.jpg';
import ImagemConserva from '../../assets/conservas.jpg';
import ImagemFrio from '../../assets/frios.png';
import ImagemHortifruti from '../../assets/hortifruti.jpg';
import ImagemLimpeza from '../../assets/limpeza.jpg';
import ImagemPessoal from '../../assets/pessoal.jpg';
import ImagemMassa from '../../assets/massas.jpg';


export const SearchArea = styled.div`
background-color:#DDD;
border-bottom: 1px solid #CCC;
padding: 20px 0;

.searchBox {
    background-color: #efc300;
    padding:20px 15px;
    border-radius:5px;
    box-shadow: 1px 1px 1px 0.3px rgba(0,0,0,0.2);
    display:flex;

    form {
        flex:1;
        display:flex;

        input, select {
            height:40px;
            border:0;
            border-radius:5px;
            outline:0;
            font-size:15px;
            color:#000000;
            margin-right:20px;

        }

        input {
            flex:1;
            padding: 0 10px;
        }

        select {
            width:100px;
        }

        button {
            background-color: #49aeef;
            font-size:15px;
            border:0;
            border-radius:5px;
            color:#FFFFFF;
            height:40px;
            padding:0 20px;
            cursor:pointer;
        }
    }
}
@media (max-width:600px) {
        .searchBox form {
            flex-direction:column;

            input {
                padding:10px;
                margin-right:0;
                margin-bottom:10px;
            }

            select {
                width:100%;
                margin-bottom:10px;
            }
        }
    }
`;

export const PageArea = styled.div`
    min-height: 586px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;

    .produtos {
        display:flex;
        justify-content:space-between;
        flex-flow:wrap;
    }

    .item {
        height:7em;
        min-width:20em;
        width:100%;
        padding: .8em;
        position:relative;
        flex:1;
        
    }

    .item-p {
    height: 100%;
    border-radius: .7em;
    overflow: hidden;
    position: relative;
    display: block;
    background-color: #efc300;
    transition: all 350ms cubic-bezier(.715,.005,.3,1) 0s;
    box-shadow: 0 10px 25px 0 rgb(0 0 0 / 15%);

    &:hover {
            background-color: #cca700;
            box-shadow: 0 10px 25px 0 rgb(0 0 0 / 30%);
        }
        

    }

    .row {
        height:100%;
        width:100%;
        display:flex;
        flex-direction:row;
        flex-flow: row wrap;
        
    }

    .imagem {
        background-position: center top;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #004aae;
        max-width: 10em;
        min-width: 10em;
        height: 100%;
        position: relative;
    }

    .acougue {
        background: url(${ImagemAcougue}) center;
        background-size: cover;
    }
    .hortifruti {
        background: url(${ImagemHortifruti}) center;
        background-size: cover;
    }
    .bebida {
        background: url(${ImagemBebida}) center;
        background-size: cover;
    }
    .limpeza {
        background: url(${ImagemLimpeza}) center;
        background-size: cover;
    }
    .frios {
        background: url(${ImagemFrio}) center;
        background-size: cover;
    }
    .higiene {
        background: url(${ImagemPessoal}) center;
        background-size: cover;
    }
    .massas {
        background: url(${ImagemMassa}) center;
        background-size: cover;
    }
    .conservas {
        background: url(${ImagemConserva}) center;
        background-size: cover;
    }
    .biscoito {
        background: url(${ImagemBiscoito}) center;
        background-size: cover;
    }

    .col {
    flex: 1;
    display: block;
    width: 100%;
    }

    .text {
        padding: 2em 0;
    }

    .align-vertical {
            position: absolute;
    }

    .name {
    color: #000;
    font-weight: bold;
    font-size: 0.8em;
    padding: 0 1.2em;
    transition: all 350ms cubic-bezier(.715,.005,.3,1) 0s;
    }

    .title {
        border: 1px solid #CCCCCC;
        padding-left:30px;
        padding-right:30px;
        border-radius:10px;
        background: linear-gradient(to right, #ffda33 30%, #ffe880 70%);
        margin-bottom:15px;
    }

    @media (max-width:600px) {
        .title {
            margin-top:15px;
            margin-bottom:0px;
        }
    }
`;