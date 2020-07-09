import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import App from '../components/App';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={App} />
        </Switch>
    )
}

export default Main;
