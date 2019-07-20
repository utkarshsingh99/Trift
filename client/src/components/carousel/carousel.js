import React from 'react';

import axios from 'axios';

import './carousel.css';

class Carousel extends React.Component{
  componentDidMount(){
    axios.get("https://crossorigin.me/https://localhost:4000/images").then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    })
  }
    state ={
      imageURL :["https://www.solidbackgrounds.com/images/1920x1080/1920x1080-oxford-blue-solid-color-background.jpg"]
    }

    render(){
        return( 
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            { /* single item defined to set the class active specifically, set default image here*/ }
            <div className="carousel-item active">
                <img src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-gray-blue-solid-color-background.jpg" className="d-block w-100 image" alt="..." />
            </div>


        {  /* setting rest of the images to the sliding gallery */
              
              this.state.imageURL.map(item => {
               return <div className="carousel-item">
                <img src={item} className="d-block w-100 image" alt="..." />
            </div>
              })
            }
            </div>
          </div>
        )
    }
}

export default Carousel;