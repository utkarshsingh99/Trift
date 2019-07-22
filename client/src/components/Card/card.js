import React from 'react';

import cardImage from '../../utils/images/cardImage.png';

import './card.css';

import {Card} from 'react-bootstrap'

class card extends React.Component{
    render(){
        return(
          <div className="adjust-helloTrift-cover">
                <Card.Img  variant="top" src={cardImage} />
          </div>
         
        )
    }
}

export default card;