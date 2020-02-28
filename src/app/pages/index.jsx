import React from 'react';

import About from './about';
import Contact from './contact'

import {BrowserRouter as Router,Route} from 'react-router-dom';

function Page() {
    return(
        <Router>
           
             <Route path="/about" component ={About} />
             <Route path="/contact" component ={Contact} />

            
            
        </Router>
    )
}


export default Page;