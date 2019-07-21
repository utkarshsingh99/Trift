import React from 'react';

import Navbar from '../../components/navbar/navbar';
import Carousel from '../../components/carousel/carousel';
import Login from '../Login/Login';
import SignUp from '../SignUp/Signup';
import Card from '../../components/Card/card';
import Footer from '../../components/footer/footer';

import {BrowserRouter, Route} from 'react-router-dom';

import './Home.css';
import Destination from '../../components/item/item';

class Home extends React.Component{
    render(){
        return(
        <BrowserRouter>
          <div className="w-100 nav-contain">
            <Navbar />
            <Carousel />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={SignUp} />
          </div>
          <h5>CURATED EXPERIENCES</h5>
          <Destination id="curated"/>  
          <Card />
          <Destination id="guided"/> 
          <Footer />
          </BrowserRouter>
          
        
        )
    }
}

export default Home;