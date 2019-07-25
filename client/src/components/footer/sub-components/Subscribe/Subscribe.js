import React from 'react';

import Input from '../../../Form/input/input';
import {CurrencyDropdown, LanguageDropdown} from '../../../Form/Dropdown/dropdown';

import '../../footer.css';
const subscribe = () => {
    return(
           <div className="SubscribeContain">
               <div className="subscribe">
                   <h6 className="w-50 px-2">Subscribe and get $50 off your first booking</h6>
                   <h6 className="w-50 px-2 d-flex justify-content-center">Currencies and more</h6>
               </div>
               <div className="subscribe">
               <div className="px-2 w-50">
               <Input placeholder="Enter email" type="email" class="w-100"/>
               </div>
               <div className="w-50 d-flex justify-content-center px-4">
               <CurrencyDropdown class="px-2" id="currency"/>
               </div>
                   
               </div>
               <div className="subscribe">
               <div className="buttonContain w-50 px-2">
               <button type="button" className="btn btn-primary w-100 px-2 mt-2">SUBSCRIBE</button>  
                </div>
                <div className="w-50 d-flex justify-content-center px-4">
                <LanguageDropdown class="px-2 mt-2" id="language"/>
                </div>
                  
               </div>
           </div>
        )
}

export default subscribe;