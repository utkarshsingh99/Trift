import React from 'react';

import './carousel.css';
class Carousel extends React.Component{
  // imageURLs to show on sliding gallery on homepage
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