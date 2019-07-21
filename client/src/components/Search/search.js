import React from 'react';

import './search.css';
class search extends React.Component{
    render(){
        return (this.props.mobile) ? (
            <div className="mobileView">
            <div><button className="icon"><i className="fa fa-search" aria-hidden="true"></i></button></div>
                <div className="w-100"><input className="w-100 searchInput" type="text" placeholder="Search Destinations" /></div>
            </div>
        ) : (
                
            <div className="searchContain">
            <div><button className="icon"><i className="fa fa-search" aria-hidden="true"></i></button></div>
                <div><input className="searchInput" type="text" placeholder="Search Destinations" /></div>
            </div>
        )
    }
}

export default search;