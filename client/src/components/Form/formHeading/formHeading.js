import React from 'react';

import './formHeading.css';

class formHeading extends React.Component {
    render(){
        return (
            <div  className="formHeading">
                <h3>{this.props.heading}</h3>
                <button className="cross ml-auto"><a className="anchor" href="/"><i className="fa fa-times fa-lg"></i></a></button>
          </div>
        )
    }
    
}

export default formHeading;