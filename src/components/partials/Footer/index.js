import React from 'react';
import { Link } from 'react-router-dom';
import { FooterArea } from './styled';




const Footer = () => {
    return (
        <FooterArea>
            <div className="container">
               <div className="menu-footer">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" className="bottom" title="Nossa História">Rei do 1 Real</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="menu-footer">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/catalogo" className="bottom" title="Conheça nossos produtos">Produtos</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="menu-footer">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/loja" className="bottom" title="Venha conhecer as nossas lojas">Lojas</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

               {/* <div className="menu-footer">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" className="bottom" title="Confira nossas promoções">Promoções</Link>
                            </li>
                        </ul>
                    </nav>
                </div> */}

                <div className="menu-footer">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/signin" className="bottom" title="Área Restrita">Área Restrita</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="copy">
                    <div className="row">
                        © 2021 Copyright • Supermercados Rei do 1 Real Todos os direitos reservados • Politica de privacidade
                    </div>
                </div>
        </FooterArea>
    );
}
export default Footer;