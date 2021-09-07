/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Posts from './pages/Post'
import Albuns from './pages/Albuns';
import Todos from './pages/Todos';
import Home from './pages/Home';

export default () => {
    
    return(
        <Switch>

            <Route path="/posts">
                <Posts/>
            </Route>
            <Route path="/albuns">
                 <Albuns/>
             </Route>
            <Route path="/todos">
                <Todos/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    );
}