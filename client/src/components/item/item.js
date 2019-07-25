import React from 'react';
import axios from 'axios';

import {Button, Card} from 'react-bootstrap';


import './Destinations.css'


class Destination extends React.Component{
    state = {
       experiences:{
           curated:{
               data:[]
           }, 
           guided:{
               data:[]
           }
       }
       
    }
    
    componentDidMount(){
        axios.get('http://localhost:4000/api/experience').then(response => {
            let curated=[], guided=[];
            let server = 'http://localhost:4000';
            response.data.map(item => {
                if(item.type === 'guided'){
                    item.image = server + item.image;
                    guided.push(item)
                }
                if(item.type === 'curated'){
                    item.image = server + item.image;
                    curated.push(item)
                }
                return null;
            });
            this.setState({
                experiences:{
                    curated:{
                       data: [...curated]
                    },
                    guided:{
                        data: [...guided]
                    }
                }
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render(){
        return (this.props.id === 'guided') ? ( 
            <div className="destinations">
                {this.state.experiences.guided.data.map(item => {
                   return (
                    <Card className="singleItem" style={{ width: '24rem' }} key={item._id}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                    <Button className="duration" variant="primary">{item.duration}</Button>
                    <Card.Title>
                    <strong className="adjust-title-font">{item.tripName}</strong>
                    </Card.Title>
                        <Card.Text className="adjust-price-font">
                         From ${item.totalValue}
                     </Card.Text>
                      
                     </Card.Body>
                     </Card>
                    )
                })}
            </div>

    ) : ( 
        <div className="destinations">
            {this.state.experiences.curated.data.map(item => {
               return (
                <Card className="singleItem" style={{ width: '24rem' }} key={item._id}>
                <Card.Img variant="top" src={item.image} />
                
                <Card.Body>
                <Button className="duration" variant="primary">{item.duration}</Button>
                <Card.Title>
                <strong className="adjust-title-font">{item.tripName}</strong>
                </Card.Title>
                    <Card.Text className="adjust-price-font">
                     From <span className="color">${item.totalValue}</span>
                 </Card.Text>
                  
                 </Card.Body>
                 </Card>
                )
            })}
        </div>);
    }
}

export default Destination;