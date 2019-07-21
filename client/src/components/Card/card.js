import React from 'react';

import cardImage from '../../utils/images/cardImage.png';

import {Card} from 'react-bootstrap'
class card extends React.Component{
    render(){
        return(
          <div className="container w-100">
            <img src={cardImage} alt="..."/>
          </div>
        )
    }
}

export default card;