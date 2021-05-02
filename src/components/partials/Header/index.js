import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';
import Imagemlogo from '../../../assets/1real.png';
import ImagemMenu from '../../../assets/menu.png';

//import { isLogged } from '../../../helpers/AuthHandler';

//VERIFICA SE ESTÁ LOGADO, SE ESTIVER LOGADO CERTOS MENUS APARECEM E OUTROS SOMEM
const Header = () => {
    //let logged = isLogged();

//ESQUELETO DO HEADER
    return (
        <HeaderArea>
            <div className="container">
            <header>
                <div className="logo">
                    <Link to="/">
                        <img src={Imagemlogo}/>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" title="Início">Home</Link>
                        </li>
                        <li>
                            <Link to="/catalogo" title="Catalogo">Produtos</Link>
                        </li>
                        <li>
                            <Link to="/loja" title="Lojas">Lojas</Link>
                        </li>
                        <li>
                            <Link to="/delivery" title="Delivery">Delivery</Link>
                        </li>
                        <li>
                            <Link to="/sac" title="Sac">Sac</Link>
                        </li>
                    </ul>
                </nav>

                <div className="menu--responsivo">
                    <ul>
                        <li>
                            <img src={ImagemMenu}/>
                        </li>
                    </ul>
                </div>
            </header>
            </div>
        </HeaderArea>
    );
}
export default Header;
