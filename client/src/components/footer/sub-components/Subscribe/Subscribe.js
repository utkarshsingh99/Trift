import React from 'react';

import Input from '../../../Form/input/input';
import Button from '../../../Form/button/button';

import '../../footer.css';
const subscribe = () => {
    return(
           <div className="SubscribeContain">
               <div className="subscribe-elements-adjust">
                   <h5 className="subscribeHeading">Subscribe and get 50 off your first booking</h5>
                   <div className="subInput"><Input placeholder="Enter email"   type="email"/>
                    <Button value="SUBSCRIBE" class="mt-4 sub-form-btn"/>
                    </div>
               </div>
           </div>
        )
}

export default subscribe;