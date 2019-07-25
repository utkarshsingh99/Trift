import React from 'react';

import axios from 'axios';

import './partners.css';

class sponsors extends React.Component{
   state={
       sponsors:[]
   }

   componentDidMount(){
    axios.get('http://localhost:4000/api/partners').then(res => {
        let partners = [...res.data];
        this.setState({
            sponsors:[...partners]
        })
    }).catch(err => {
        console.log(err);
    })
   }

    render(){
        return(
            <div className="d-flex justify-content-around">
            {(this.state.sponsors.map(item => {
                let url = "http://localhost:4000" + item.url;
                    return <img className="sponsor-image" src={url} alt="" key={item.name}></img>
            }))}
               
            </div>
        )
    }
}

export default sponsors;