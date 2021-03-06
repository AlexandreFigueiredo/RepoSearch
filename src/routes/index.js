import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

/* Roteamento do projeto */

const Routes = () => (
    <Switch>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/repository/:repository+" component={Repository}/>
    </Switch>
  );

export default Routes;