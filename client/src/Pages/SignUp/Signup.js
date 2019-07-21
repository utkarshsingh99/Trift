import React from 'react';

import Input from '../../components/Form/input/input';
import Button from '../../components/Form/button/button';
import FormHeading from '../../components/Form/formHeading/formHeading';

/* styles fo this component imported from Login.css */

class SignUp extends React.Component{
  state = {
   about: false,
  //  firstName:null, 
  //   lastName:null, 
  //   email:null, 
  //   password:null
  }

  UpdateState = () => {
    
    this.setState({
      about:true, 
      // firstName:null, 
      // lastName:null, 
      // email:null, 
      // password:null
    })
  }

    render(){
        return (this.state.about) ? (
          <div className="wrapper">
        <div className="formContent">
          <FormHeading heading="ABOUT YOU"/>
          <form className="inputContain formContain">
              <Input type="file" placeholder="Upload your image" class="inputs"/>
              <Input type="text" placeholder="Dummy" class="inputs"/>
              <Input type="text" placeholder="Dummy" class="inputs"/>
              <Button value="Signup"/>
          </form> 
        </div>
        </div>
           
        ) : (
          <div className="wrapper">
          <div className="formContent">
            <FormHeading heading="SIGNUP"/>
            <form className="inputContain formContain">
                <Input type="text" placeholder="First Name" class="inputs" autofocus="true"/>
                <Input type="text" placeholder="Last Name" class="inputs" />
                <Input type="email" placeholder="Email" class="inputs" />
                <Input type="password" placeholder="Password" class="inputs" />
                <Button value="NEXT" handleClick={this.UpdateState}/>
            </form> 
            <div className="formFooter">Already have an account 
            <a className="anchor" href="/Login"><strong>Login</strong></a>
            </div>      
          </div>
      </div>  
         )  ;
    }
}

export default SignUp;