import React from 'react';

import './footer.css';
import Policies from './sub-components/Policies/policies';
import Subscribe from './sub-components/Subscribe/Subscribe'

const footer = () => {
    return(
           <div className="footer">
                <Policies/>
                <Subscribe />
           </div>
        )
}

export default footer;