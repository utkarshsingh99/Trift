import React from 'react';

import Input from '../../../Form/input/input';
import Button from '../../../Form/button/button';

import '../../footer.css';
const subscribe = () => {
    return(
           <div className="SubscribeContain">
               <div>
                   <h5>Subscribe and get 50 off your first booking</h5>
                    <Input placeholder="Enter email" id="SubscribeEmail"  type="email"/>
                    <Button value="SUBSCRIBE" class="mt-4"/>
               </div>
           </div>
        )
}

export default subscribe;