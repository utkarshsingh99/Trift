import React from 'react';

import Input from '../../components/Form/input/input';
import Button from '../../components/Form/button/button';
import FormHeading from '../../components/Form/formHeading/formHeading';

import './Login.css';
import axios from 'axios';

class Login extends React.Component{
  state = {
    email:null,
    password:null
  }

  loginHandler = () => {
    axios.post('http://localhost:4000/api/auth/login', this.state).then(response => {
      console.log(response);
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
   
    render(){
        return  (
            <div className="wrapper">
              <div className="formContent">
                <FormHeading heading="LOGIN"/>
                <form className="inputContain formContain">
                  <Input type="email" id="email" placeholder="Enter email" class="fadeIn first inputs" autofocus="true" change={this.handleChange}/>
                  <Input type="password" id="password" placeholder="Password" class="fadeIn second
                  inputs" change={this.handleChange}/>
                  <div className="formFooter">
                    <a className="anchor" href="/reset"><strong>Forgot Password?</strong></a>
                  </div>
                  <Button value="Login" class="fadeIn third" handleClick={this.loginHandler}/>
                </form> 
                <div className="formFooter">Dont't you have an account? 
                <a className="anchor" href="/Signup"><strong>Sign Up</strong></a>
                </div>      
              </div>
          </div>  
        );
    }
}

export default Login;