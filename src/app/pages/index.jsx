import React from 'react';
import { Switch,Route} from 'react-router-dom';

import Home from './home';
import People from './users';
import Contact from './contact'


function Pages() {
  return(
    <Switch>
      <Route path="/" exact >
            <Home />
        </Route>
        <Route path="/users">
            <People />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
    </Switch>
  )
}


export default Pages;
