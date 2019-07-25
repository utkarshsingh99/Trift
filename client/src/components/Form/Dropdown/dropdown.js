import React from 'react';

import axios from 'axios';

class LanguageDropdown extends React.Component{
  state={
    
  }
    render(){
        return(<select name="language" className={this.props.class}>
              <option value="volvo">ENG</option>
              <option value="saab">RUS</option>
              <option value="mercedes">CHN</option>
              <option value="audi">SPN</option>
      </select>
           )
    }
}

class CurrencyDropdown extends React.Component{
  state={
    
  }
    render(){
        return(<select name="language" className={this.props.class}>
              <option value="volvo"></option>
              <option value="saab">RUS</option>
              <option value="mercedes">CHN</option>
              <option value="audi">SPN</option>
      </select>
           )
    }
}

class CountryDropdown extends React.Component{
  state={
    countries:[]
  }
  componentDidMount(){
    axios.get('http://localhost:4000/api/countries').then(res => {
      console.log(res)
      let countries = [...res.data];
      this.setState({
          countries:[...countries]
      })
    }).catch(err => {
      console.log(err)
    })
  }
    render(){
        return(
        <select name="country" className={this.props.class} onChange={this.props.change} id={this.props.id}>
          <option key="CountryDefault">Select your Country</option>
              {this.state.countries.map(item => {
                return <option value={item._id} key={item.Code}>{item.Name}</option>
              })}    
        </select>
           )
    }
}

class CitiesDropdown extends React.Component{
  state={
    cities:[]
  }
  componentDidMount(){
    axios.get('http://localhost:4000/api/cities').then(res => {
      let cities = [...res.data];
      this.setState({
          cities:[...cities]
      })
    }).catch(err => {
      console.log(err)
    })
  }
    render(){
        return(<select name="cities" className={this.props.class}  id={this.props.id} onChange={this.props.change}>
        <option key="DepartureDefault">Select Departure City</option>
             {this.state.cities.map((item, index)=> {
                return <option value={item._id} key={index}>{item.Name}</option>
              })}    
      </select>
           )
    }
}

export{CurrencyDropdown, CitiesDropdown, LanguageDropdown, CountryDropdown}