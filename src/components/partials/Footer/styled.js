import styled from 'styled-components';

export const FooterArea = styled.div`
background: linear-gradient(to left, #ffda33 50%, #ffe880 100%);
/*width: 100%;
position: absolute;
bottom: 0;*/



.container {
    max-width:1000px;
    width:100%;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

nav ul,
    li {
        list-style:none;
        padding-top:5px;
        padding-bottom:5px;
    
    a {
        text-decoration:none;
        color:#000;
        font-size:14px;
    }

    .bottom {
        text-transform: uppercase;
    }
}

.copy {
    background: linear-gradient(to right, #ffda33 50%, #ffe880 100%);
    background-color:#efc300;
    padding:15px;
}

.row {
    font-size:15px;
    color: rgba(0,0,0,.60);
    text-align:center;
}

@media (max-width:600px) {
  
    & {
        height:auto;
    }
  
    .container {
        flex-direction:column;
    }
  
    nav ul {
        flex-direction:column;
        height:auto;
        margin:0;
        padding:0;
    }
  
    nav li {
        padding-top:10px;
        padding-bottom:10px;
    }
}

`;