import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Services from '../Pages/Services';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';

const Rout = () =>{

    return(
        <>
            <Navbar />

                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/about' component={ About } />
                    <Route exact path='/contact' component={ Contact } />
                    <Route exact path='/services' component={ Services } />
                </Switch>

            <Footer />

        </>
    );
  
};

export default Rout;