import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/home';
import { AuthRoute } from '../util/route_util';
import ModalContainer from './modal/modal_container'

const App = () => (
    <div>
        <ModalContainer />
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
    </div>
);

export default App;

