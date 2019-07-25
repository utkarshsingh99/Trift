import React from 'react';

// import axios from 'axios';

import './carousel.css';
import Search from '../Search/search';



class Carousel extends React.Component{
  // componentDidMount(){
  //   axios.get("http://localhost:4000/images").then(response => {
  //     let server = 'http://localhost:4000/';
  //     let urls = [];
  //     for(let i=0; i<response.data.length;i++){
  //       urls.push(server + response.data[i].imageUrl);
  //     }
  //     this.setState({
  //       imageURL:[...urls]
  //     })
  //     console.log(urls);
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }

    state ={
      imageURL :[]
    }

    render(){
        return( 
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            <Search />
            { /* single item defined to set the class active specifically, set default image here*/ }
            <div className="carousel-item active">
                <img src="http://localhost:4000/group-19-header.png" className="d-block w-100 image" alt="..." />
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