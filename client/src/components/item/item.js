import React from 'react';
import axios from 'axios';

import {Button, Card} from 'react-bootstrap';
import loader from '../../utils/spinner/loader.apng';

import './Destinations.css'


class Destination extends React.Component{
    state = {
        imageURL : null
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
            this.setState({
                imageURL:response.data.title
            });
        }).catch(err => {
            console.log(err);
        })
    }

    render(){
        return(
            <Card style={{ width: '16rem' }}>
            {(this.state.imageURL) ?  <Card.Img variant="top" src={this.props.url}/> :  <Card.Img className="adjustLoader" variant="top" src={loader} />}
            {/* <Card.Img variant="top" src={this.state.imageURL}/> */}
         <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
     Hey
    </Card.Text>
    <Button variant="primary">4 days</Button>
  </Card.Body>
</Card>
    );
    }
}

export default Destination;