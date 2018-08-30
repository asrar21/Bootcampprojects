import React from 'react';

import './signup.css';
import {Postdata} from './postdata.js';

 class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
                
                email: "",
                password: "",
               
            }
    
    this.signup=this.signup.bind(this);
    this.onChangeEmail=this.onChangeEmail.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
   
    }
    signup(){

        Postdata('signup',this.state).then((result)=>{
            var responseJSON=result;
            alert(responseJSON);
        });
  

    }
    onChangeEmail(e){
        this.setState({email:e.target.value});
        // console.log(this.state);
    }
    onChangePassword(e){
        this.setState({password:e.target.value});
    }
    render() {
        return (
            <div className="signup-content">
                <div className="modal-login modal-sign-up">
                    <div className="modal-content sign-up">
                        <h3>Sign Up</h3>
                       
                        
                           
                            <input type="text" name="email"placeholder="Email" onChange={this.onChangeEmail} />
                            <input type="text" name="password"placeholder="Password"  onChange={this.onChangePassword} />
                           
                          <div className="signup-btn button">
                                <button onClick={this.signup}>Sign up Now</button>
                          </div>
                      
                    </div>
                </div>
            </div>
        )
    }
    
   
}
export default Signup;