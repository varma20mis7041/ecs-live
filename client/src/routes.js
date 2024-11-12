import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/payment" component={Payment} />
    </Switch>
);

export default Routes;
