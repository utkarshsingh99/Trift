import React from 'react';


import Input from '../../components/Form/input/input';
import Button from '../../components/Form/button/button';
import FormHeading from '../../components/Form/formHeading/formHeading';

import icon from '../../utils/icons/dummy.png';


import './Signup.css';

/* styles for this component imported from Login.css */

class SignUp extends React.Component{
  state = {
  imgName:'Upload you picture',
   about: false,
   profile:{
     profileImg:null
   }
  }



  next = () => {
    this.setState({
      about:true
    })
  }


  UpdateState = (e) => {
    let id = e.target.id;
      let value = e.target.value;
    if(e.target.id === 'profileImg'){
        let file = e.target.files[0];
        let baseString;
        var reader = new FileReader();	
        reader.addEventListener("load", () => {
          baseString = reader.result;
          this.setState(prev =>({
            profile:{
              ...prev,
              [id]:baseString
            },
            imgName:file.name
          }))
        },false);
        if(file){
          reader.readAsDataURL(file);
        }
        
      return;
    }
    
     this.setState(previousState => ({
      profile:{
        ...previousState.profile,
        [id]: value
      }  
    })
     )
  }

  
    render(){
      console.log(this.state)
        return (this.state.about) ? (
          <div className="wrapper">
        <div className="formContent">
          <FormHeading heading="ABOUT YOU"/>
          <form className="inputContain formContain">
          <img id="profileImage" src={(this.state.profile.profileImg) ? (this.state.profile.profileImg) : icon}/>
          <label htmlFor="profileImg" class="custom-file-upload">
          <div id="profilePlaceholder">{this.state.imgName}</div><div  id="uploadIcon">
          <i class="fa fa-cloud-upload"></i>
          </div>
          </label>
              <Input type="file" placeholder="Upload your image" class="inputs profileImage" id="profileImg" change={this.UpdateState}/>
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
                <Input type="text" placeholder="First Name" class="inputs" autofocus="true" change={this.UpdateState} id="firstName"/>
                <Input type="text" placeholder="Last Name" class="inputs" change={this.UpdateState} id="lastName"/>
                <Input type="email" placeholder="Email" class="inputs" change={this.UpdateState} id="email"/>
                <Input type="password" placeholder="Password" class="inputs" change={this.UpdateState} id="password"/>
                <Button value="NEXT" handleClick={this.next}/>
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