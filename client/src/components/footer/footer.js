import React from 'react';

import './footer.css';
import Policies from './sub-components/Policies/policies';
import Subscribe from './sub-components/Subscribe/Subscribe'

const footer = () => {
    return(
         <div>
                <div className="footer">
                <Policies/>
                <Subscribe />
           </div>
            <div className="copyright">
            <div className="text">
               <p className="mb-0">2019 © trift experiences OÜ. All Rights Reserved </p>
               <p className="mb-0">Harju Maakond, Kuusalu Vald, Pudisoo Küla, Männimäe 74626, Estonia </p>
            </div>
            
            </div>
         </div>
         
        )
}

export default footer;