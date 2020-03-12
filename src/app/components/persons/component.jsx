import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';

import Users from './users';
import User from './user';

class Persons extends Component {
  constructor(props){
    super(props)
    this.state={
      users: [],
      user: []
    }
   }
   componentDidMount(){
     fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(res => this.setState({
      users:res
    }))   
    }

    checkUser = (id) => {
      let arr = this.state.users.filter((item) => {
         return item.id === id
      });

      this.setState({
        user: arr
      })
     }
    
  render(){
    return(
      <Switch> 
        
        <Route exact path="/users">
          <Users mrops={this.state.users } checkUser={this.checkUser} />
        </Route>
        <Route path="/user/:id">
          <User oneUser={this.state.user} />
        </Route>
        </Switch>
      )
    }
}

export default Persons;
