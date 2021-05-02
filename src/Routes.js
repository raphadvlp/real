import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Carrinho from './pages/Carrinho';
import Catalogo from './pages/Catalogo';
import Sac from './pages/Sac';
import Delivery from './pages/Delivery';
import Loja from './pages/Loja';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';

import Acougue from './pages/Produtos/Acougue';
import Bebida from './pages/Produtos/Bebida';
import Biscoito from './pages/Produtos/Biscoito';
import Concervas from './pages/Produtos/Concervas';
import Frios from './pages/Produtos/Frios';
import Higiene from './pages/Produtos/Higiene';
import Hortifruti from './pages/Produtos/Hortifruti';
import Limpeza from './pages/Produtos/Limpeza';
import Massas from './pages/Produtos/Massas';



export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/carrinho">
                <Carrinho />
            </Route>

            <Route exact path="/catalogo">
                <Catalogo />
            </Route>

            <Route exact path="/sac">
                <Sac />
            </Route>

            <Route exact path="/delivery">
                <Delivery />
            </Route>

            <Route exact path="/loja">
                <Loja />
            </Route>

            <Route exact path="/signin">
                <SignIn />
            </Route>

            <Route exact path="/Acougue">
                <Acougue />
            </Route>

            <Route exact path="/Bebida">
                <Bebida />
            </Route>

            <Route exact path="/Biscoito">
                <Biscoito />
            </Route>

            <Route exact path="/Concervas">
                <Concervas />
            </Route>

            <Route exact path="/Frios">
                <Frios />
            </Route>

            <Route exact path="/Higiene">
                <Higiene />
            </Route>

            <Route exact path="/Hortifruti">
                <Hortifruti />
            </Route>

            <Route exact path="/Limpeza">
                <Limpeza />
            </Route>

            <Route exact path="/Massas">
                <Massas />
            </Route>

            <Route>
                <NotFound />
            </Route>

        </Switch>
    );
}
