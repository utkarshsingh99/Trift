import React from 'react';


// import {Form} from 'react-bootstrap';

import './input.css'

class input extends React.Component{
    render(){
        return(
          
                    <input className={this.props.class} type={this.props.type} placeholder={this.props.placeholder} autofocus={this.props.autofocus}/>
           
        )
    }
}

export default input;