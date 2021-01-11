import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Playground from './pages/Playground';
// import Highscore from './pages/Highscore';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/playground" component={Playground}></Route>
            {/* <Route path="/highscore" component={Highscore}></Route> */}
        </Switch>
    );
};

export default Routes;
