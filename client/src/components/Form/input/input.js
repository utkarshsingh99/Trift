import React from 'react';


import {Form} from 'react-bootstrap';

import './input.css'

class input extends React.Component{
    render(){
        return(
          <Form.Control className={this.props.class} type={this.props.type} placeholder={this.props.placeholder} autoFocus={this.props.autofocus} onChange={this.props.change} id={this.props.id}/> 
        )
    }
}

export default input;