import React from 'react';
import { Route,Switch} from 'react-router-dom';

import Home from './home';
import About from './about';
import Contact from './contact'



function Pages() {
    return(
        <Switch>
            
            <Route path="/" exact >
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            
            
        </Switch>
    )
}



export default Pages;