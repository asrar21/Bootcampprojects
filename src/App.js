import React, { Component } from 'react';

import './App.css';
import Signin from './Component/signin.js';
import Home from './Component/home.js';
import Signup from './Component/signup.js';
import Bicycle from './Component/bicycle.js';
import Mobile from './Component/mobile.js';
import Cart from './Component/cart.js';
import Post from './Component/post.js';
import { BrowserRouter, Route } from 'react-router-dom'
 

class App extends Component {
 
    
    
      
      render() {
        
          return (
              <BrowserRouter>
              <div className="App">
              {/* <Signin/> */}
            

             
             <Route path="/post" component={Post}/>
             <Route path="/sign" component={Signin}/>
             <Route path="/home" component={Home}/>
             <Route path="/signup" component={Signup}/>
             <Route path="/bicycle" component={Bicycle}/>
             <Route path="/mobile" component={Mobile}/>
             <Route path="/cart" component={Cart}/>

             
              </div>
              </BrowserRouter>
          )
        }
      }

export default App;
