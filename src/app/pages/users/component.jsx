import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Persons from '../../components/persons';


function People(){
  return(
    <Switch>
      <Route exact path="/users">
        <Persons />
      </Route>
      <Route path="/user/:id">
        <Persons />
      </Route>
    </Switch>
  )
}

export default People;
