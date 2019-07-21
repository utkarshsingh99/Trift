import React from 'react';


import {Button} from 'react-bootstrap';

import './button.css'

class Btn extends React.Component{
    render(){
        return(
            <div className="buttonContain">
                <Button variant="primary" size="md" block className={this.props.class} onClick={this.props.handleClick}>
                    {this.props.value}
                </Button>
            </div>
        )
    }
}

export default Btn;