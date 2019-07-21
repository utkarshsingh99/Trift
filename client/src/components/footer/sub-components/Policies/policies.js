import React from 'react';

import '../../footer.css';
const policies = () => {
    return(
           <div className="links">
            <ul className="list">
                   <h6>Trift</h6>
                    <li>About Us</li>
                    <li>Our Team</li>
                    <li>Contact Us</li>
               </ul>
               <ul className="list">
                   <h6>Policies</h6>
                    <li>Terms</li>
                    <li>Cookies</li>
                    <li>Booking</li>
                    <li>Privacy</li>
               </ul>
              
              <ul className="list">
                   <h6>Curator</h6>
                    <li>Itineraries</li>
                    <li>Become a Curator</li>
                    <li>Create a trip</li>
               </ul>
               <ul className="list">
                   <h6>Vendor</h6>
                    <li>Fullfillment</li>
                    <li>Become a vendor</li>
               </ul>
              </div>
              
        )
}

export default policies;