import React from 'react';

import Navbar from '../../components/navbar/navbar';
import Carousel from '../../components/carousel/carousel';
import Login from '../Login/Login';
import SignUp from '../SignUp/Signup';
import Card from '../../components/Card/card';
import Footer from '../../components/footer/footer';
import curatedIcon from '../../utils/icons/Vector.png';
import Sponsors from '../../components/partners/partners';

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
            <Sponsors />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={SignUp} />
          </div>
          <h4 className="experienceText"><div className="experienceIcon"><img src={curatedIcon} alt=""/></div><strong>
            CURATED EXPERIENCES</strong></h4>
          <Destination id="curated"/>  
          <Card />
          <h4 className="experienceText"><div className="experienceIcon"><i className="fa fa-bars" aria-hidden="true"></i></div><strong>
            GUIDED EXPERIENCES</strong></h4>
          <Destination id="guided"/> 
          <Footer />
          </BrowserRouter>
          
        
        )
    }
}

export default Home;