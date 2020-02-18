import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    <BrowserRouter>
        {/* 
            Router dom permite que dois componentes sejam exibidos
            quando uma rota for chamada, mas aqui preferimos chamar só
            um componente por rota
        */}
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/product/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;