import React, { Component } from 'react';
import '../App.css';
import './home.css';
//import { Capture } from '../images/Capture.PNG';
//import { BrowserRouter, Route, Link } from 'react-router-dom';
//import bicycle from './bicycle.js';
//import mobile from './mobile.js';
//import Sidebar from './sidebar.js';
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      mobile: []



    }
    // this.onChangeSearch=this.onChangeSearch.bind(this);
    // this.search=this.search.bind(this);
  }

  componentDidMount() {
   let item = localStorage.getItem("itemname")
   console.log(item)
   this.setState({
       data:item
   })
  }
  onChangeSearch(e) {
    this.setState({ search: e.target.value });
    // console.log(this.state.search);

  }
  // search(){
  //   if(this.state.search=='Bicycle'||'bicycle'){
  //     this.props.history.push('/bicycle')
  //   }


  //   else{
  //     this.props.history.push('/mobile')
  //   }
  // }
  render() {



    return (
      <div>
          <div className="App-header">MINI CART
      <br /><input />
        <button>search</button>
        
      </div>
      <div> you added to your cart is:{this.state.data}</div>

       

      </div>
     
    )
  }
}
export default Cart;