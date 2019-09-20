import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './main';
import Sobre from './sobre';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/sobre" component={Sobre} />
        </Switch>
    </BrowserRouter>
);

export default Routes;