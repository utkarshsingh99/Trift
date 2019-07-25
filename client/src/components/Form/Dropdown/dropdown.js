import React from 'react';

import axios from 'axios';

class LanguageDropdown extends React.Component{
  state={
    languages:[]
  }
  componentDidMount(){
    axios.get('http://localhost:4000/api/languages').then(res => {
      this.setState({
        languages:[...res.data]
      })
    }).catch(err => {
      console.log(err)
    })
  }
    render(){
        return(<select name="language" className={this.props.class}>
            {this.state.languages.map(item => {
                return <option  key={item._id}>{item.Language}</option>
              })}  
      </select>
           )
    }
}

class CurrencyDropdown extends React.Component{
  state={
    currencies:[]
  }

  componentDidMount(){
    axios.get('http://localhost:4000/api/currencies').then(res => {
      this.setState({
        currencies:[...res.data]
      })
    }).catch(err => {
      console.log(err)
    })
  }
    render(){
        return(<select name="currency" className={this.props.class}>
            {this.state.currencies.map(item => {
                return <option  key={item._id}>{item.cc}</option>
              })}  
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