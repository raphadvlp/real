import styled from 'styled-components';

export const Saccontato = styled.div`
    display:flex;
    width: 100%;
    height: 250px;
    background-image: linear-gradient(180deg, #efc300, #cfac11);
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`;

export const Container = styled.div`
    max-width:1100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height:100%;
    margin: auto;

    form {
        display: flex;
        width: 600px;
        height: 500px;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .area {
        display:flex;
        padding:10px;
        max-width:500px;
        width: 100%;
        flex-direction: column;
    }

    .form--sac {
            display: flex;
            flex-direction: column;
            background-color:#FFF;
            border-radius:3px;
            padding:10px;
            box-shadow: 0px 0px 3px #999;
            margin-bottom:20px;  
        }

    .area--title {
            width:150px;
            text-align:left;
            //padding-right:20px;
            font-weight:bold;
            font-size:18px; 
        }
    
    .area--input {
        flex:1;
    }

    input, select {
            width:100%;
            height: 30px;
            font-size:14px;
            padding:5px;
            border: 1px solid #DDD;
            border-radius:3px;
            outline:0;
            transition: all ease .4s;

            &:focus {
                border:1px solid #333;
                color:#333;
            }
        }
    
    button {
        width: 100%;
        background-color: #0089FF;
        border:0;
        outline:0;
        padding: 5px 10px;
        border-radius:4px;
        color:#FFF;
        font-size:15px;
        cursor:pointer;
        transition: all ease 0.3s;
        
        &:hover {
            background-color:#006FCE;
        }
    }

    textarea {
        width: 100%;
        height: 60px;
        resize: none;  
    }
`;

export const Contato = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .title,
    .numero,
    .info {
            padding-bottom: 5px;
        }

        h1 {
            text-transform: uppercase;
            font-size: 25px;
        }
`;