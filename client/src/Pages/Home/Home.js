import React from 'react';

import Navbar from '../../components/navbar/navbar';
import Carousel from '../../components/carousel/carousel';
import Login from '../Login/Login';
import SignUp from '../SignUp/Signup';

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
          <div className="container">
          <Destination url="http://pragatiresorts.com/wp-content/uploads/2018/10/Nature-walk-1.jpg"/>  
          <Destination url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlOx1_3bW6I6OVAbMaVZghAaz0LAQa3H4C2T4xJPy_qHvVfOxyg"/> 
          </div>

          <h5>GUIDED EXPERIENCES</h5>
          <div className="container">
          </div>
         
          </BrowserRouter>
          
        
        )
    }
}

export default Home;