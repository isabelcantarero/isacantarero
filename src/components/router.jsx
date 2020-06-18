import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </Switch>
    </BrowserRouter>
);

export default Router;