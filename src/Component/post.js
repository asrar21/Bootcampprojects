import React from 'react';

import './signup.css';
import {Postdata} from './posts.js';

 class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
                
                name: "",
                description: "",
                price:""
               
            }
    
    this.post=this.post.bind(this);
    this.onChangeName=this.onChangeName.bind(this);
    this.onChangeDescription=this.onChangeDescription.bind(this);
    this.onChangePrice=this.onChangePrice.bind(this);
   
    }
    post(){
        console.log("")

        Postdata('signup',this.state).then((result)=>{
            var responseJSON=result;
            alert(responseJSON);
        });
    }
  

    // }
    onChangeName(e){
        this.setState({name:e.target.value});
        // console.log(this.state);
    }
    onChangeDescription(e){
        this.setState({description:e.target.value});
    }
    onChangePrice(e){
        this.setState({price:e.target.value});
    }
    render() {
        return (
            <div className="signup-content">
                <div className="modal-login modal-sign-up">
                    <div className="modal-content sign-up">
                        <h3>Add New Category</h3>
                       
                        
                           
                            <input type="text" name="name"placeholder="name" onChange={this.onChangeName} />
                           
                            <input type="text" name="description"placeholder="description" onChange={this.onChangeDescription} />
                            <input type="text" name="price"placeholder="price"  onChange={this.onChangePrice} />
                           
                          <div className="signup-btn button">
                                <button onClick={this.post}>insert</button>
                          </div>
                      
                    </div>
                </div>
            </div>
        )
    }
    
   
}
export default Post;