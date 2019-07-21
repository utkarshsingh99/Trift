import React from 'react';
import axios from 'axios';

import {Button, Card} from 'react-bootstrap';
import loader from '../../utils/spinner/loader.apng';

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
            console.log(response.data);
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
                    <Card className="singleItem" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={item.image} />
                    
                    <Card.Body>
                    <Button className="duration" variant="primary">{item.duration}</Button>
                    <Card.Title>
                    <strong>{item.tripName}</strong>
                    </Card.Title>
                        <Card.Text>
                         From ${item.totalValue}
                     </Card.Text>
                      
                     </Card.Body>
                     </Card>
                    )
                   



                })}











            </div>





















//             <div>
//                  <Card style={{ width: '16rem' }}>
//             { this.state.experiences.guided.data.map(item => {
//                 return (item.image) ?  <Card.Img variant="top" src={this.props.url}/> :  <Card.Img className="adjustLoader" variant="top" src={loader} />
            
//             }
//             )}
//          <Card.Body>
//     <Card.Title>{this.state.experiences.guided.data.tripName}</Card.Title>
//     <Card.Text>
//      Hey
//     </Card.Text>
//     <Button variant="primary">4 days</Button>
//   </Card.Body>
// </Card>
//             </div> 
           
    ) : ( 
        <div className="destinations">
            {this.state.experiences.guided.data.map(item => {
               return (
                <Card className="singleItem" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={item.image} />
                
                <Card.Body>
                <Button className="duration" variant="primary">{item.duration}</Button>
                <Card.Title>
                <strong>{item.tripName}</strong>
                </Card.Title>
                    <Card.Text>
                     From ${item.totalValue}
                 </Card.Text>
                  
                 </Card.Body>
                 </Card>
                )
               



            })}











        </div>





















//             <div>
//                  <Card style={{ width: '16rem' }}>
//             { this.state.experiences.guided.data.map(item => {
//                 return (item.image) ?  <Card.Img variant="top" src={this.props.url}/> :  <Card.Img className="adjustLoader" variant="top" src={loader} />
        
//             }
//             )}
//          <Card.Body>
//     <Card.Title>{this.state.experiences.guided.data.tripName}</Card.Title>
//     <Card.Text>
//      Hey
//     </Card.Text>
//     <Button variant="primary">4 days</Button>
//   </Card.Body>
// </Card>
//             </div> 
       
);
    }
}

export default Destination;