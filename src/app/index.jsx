import React from  'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';






function App(){
    return(
        <Router>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
        </Router>
       
    )
}

export default App;
