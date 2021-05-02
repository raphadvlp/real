import styled from 'styled-components';

export const HeaderArea = styled.div`
background-color:#efc300;
height:100px;



.container {
    max-width:1100px;
    margin:auto;
    display:flex;
}

.logo {
    flex:1;
    display:flex;
    align-items:center;
}

img {
    width:65px;
    height:100px;
}

header {
    display:flex;
    align-items:center;
    //position:fixed;
    //top:0;
    width:100%;
}

nav {
    ul, li {
        margin:0;
        padding:0;
        list-style:none;
        font-weight:bold;
        text-transform:uppercase;
    }
    
    a {
        text-decoration:none;
        color:#FFF;
        font-size:14px;
        transition: all ease 0.3s;

        &:hover {
            color:#808080;
            text-shadow: 0px 20px 35px 0px black;
        }
    }

    ul {
        display:flex;
        align-items:center;
    }

    li {
        margin-left:20px;
        margin-right:20px;
        
    }
}

.menu--responsivo {
    display:none;
}

@media (max-width:600px) {
    & {
        height:auto;
    }
    .menu--responsivo {
        display:block;
    }
    ul {
        list-style:none;
    }
    nav ul {
        //flex-direction:column;
        //height:auto;
        display:none;
    }
    /*nav li {
        margin:10px 20px;
    }*/   
}

`;