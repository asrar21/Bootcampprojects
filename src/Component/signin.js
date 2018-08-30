import React from 'react';

import './signup.css';

import {Postdata} from './login.js';
// import {Redirect} from 'react-router-dom';
import Home from './home.js';
// import Signup from './signup.js';
import { BrowserRouter,Route, Link } from 'react-router-dom'

 class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
                
            email: "",
            password: "",
           

        }

// this.login=this.login.bind(this);
this.onChangeEmail=this.onChangeEmail.bind(this);
this.onChangePassword=this.onChangePassword.bind(this);
// changeHandler(fieldName, event) {
//     let newSignupFields = { ...this.state.SignupFields };
//     newSignupFields[fieldName] = event.target.value;
//     this.setState({ SignupFields: newSignupFields });
}
login(){
    Postdata('login',this.state).then((result)=>{
        let responseJSON=result;
        console.log("response: ");
        alert(responseJSON.message)
       
       
    })
    this.props.history.push('/home')

   
  
 

   
  
    
   
   
}

onChangeEmail(e){
    this.setState({email:e.target.value});
    
}
onChangePassword(e){
    this.setState({password:e.target.value})
}
    render() {
        // if(this.state.redirect===true){
        //     return  this.props.history.push("/home")
        // }
       
       
        return (
<div>
            <div className="signup-content">
                            
                <div className="modal-login modal-sign-up">
                    <div className="modal-content sign-up">
                        <h3>Sign In</h3>
                        <form >
                            
                            
                            
                        <input type="text" name="email"placeholder="Email" onChange={this.onChangeEmail} />
                            <input type="text" name="password"placeholder="Password"  onChange={this.onChangePassword} />
                           
                            <div className="signup-btn">
                                <button onClick={this.login.bind(this)}>Sign in</button><br/>
                                
                            </div>
                        </form>
                    </div>
                </div>

            </div>
           
            <div className="signup-btn">
            <Link to="/signup"><button>Signup</button></Link>
        </div>
        <BrowserRouter>
   
   {/* <Signin/> */}
 


  
  <Route path="/home" component={Home}/>


  
 
   </BrowserRouter>
            </div>
        )
    }
    
   
}
export default Signin;