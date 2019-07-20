import React from 'react';

import Input from '../../components/Form/input/input';
import Button from '../../components/Form/button/button';
import FormHeading from '../../components/Form/formHeading/formHeading';

import './Login.css';

class Login extends React.Component{
   
    render(){
        return  (
            <div className="wrapper">
              <div className="formContent">
                <FormHeading heading="LOGIN"/>
                <form className="inputContain formContain">
                  <Input type="email" placeholder="Enter email" class="fadeIn first inputs" autofocus="true"/>
                  <Input type="password" placeholder="Password" class="fadeIn second
                  inputs"/>
                  <div className="formFooter">
                    <a className="anchor" href="/reset"><strong>Forgot Password?</strong></a>
                  </div>
                  <Button value="Login" class="fadeIn third"/>
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