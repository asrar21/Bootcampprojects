import React, { Component } from 'react';
import '../App.css';
import './home.css';
//import {Capture} from'../images/Capture.PNG';
import {  Link } from 'react-router-dom';
//import {Postdata} from './ad.js';
 class Bicycle extends Component {
    constructor() 
    {
        super();
        this.state = {
          data:[],
       
         hercul:[],
         hercules:[],
        
          
      }
      this.add=this.add.bind(this);
        }
      
      componentDidMount()
      {
        fetch("http://localhost:4001/bicycle")
      .then((response) => response.json())
      .then((findresponse) => {
        //   for(var i=0;i<findresponse.data.length;i++){
        //     var k=findresponse.data[i]
        //   }
        //  console.log(k)

        this.setState({
          data: findresponse.data
        });

      })


      }
    
      add(name){
        localStorage.setItem("itemname",name)
      }
        
        render() {
     
       
       
            return (
              <div>
        <div className="App-header">MINI CART
        <br/><input />
        <button>search</button>
        </div>

        <div >
          {
            this.state.data && this.state.data.length
            && this.state.data.map((data, i) => {
         
              // console.log(data);
            return( <div key={i}>
               <div className="modal-home">
               <div  className="modal-content">
               <img src={ require('../images/b2.jpg') } alt="" className="mobile" />
               
               <div>{data.name}</div>
               <div>${data.price}</div>
               <Link to="/bicycle"><button onClick={()=>{this.add(data.name)}} >add to cart</button></Link>

               </div>
               
               </div>



            </div>
              
            )
            })
            
          }
          {/* <div>{data}</div> */}
          
          {/* {this.state.data} */}
          {/* <input placeholder="Search" onChange={this.onChangeSearch}/>
               */}
          {/*               
              <div className="Home-btn button">
                <button onClick={this.search}>Search</button>
                </div> */}
        </div>


      </div>
     
            )
          }
        }
export default Bicycle;