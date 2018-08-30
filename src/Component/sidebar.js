import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';



class Sidebar extends Component {
    constructor() 
    {
        super();
        this.state = {
          data:[],
       
       
        
          
      }
     
    
        }
        componentDidMount()
        {
          var img=[
            require('../images/download (1).png'),
              
             ];
  
          this.setState({
            data: img
          });
  
     
  
  
        }
     
        
        render() {
     
       
       
            return (
              <div>
                   {
            this.state.data && this.state.data.length
            && this.state.data.map((data, i) => {
         
              // console.log(data);
            return( <div key={i}>
               <div >
               <div >
               
               
               <img src={data}/>
              
               

               </div>
               
               </div>



            </div>
              
            )
            })
            
          }
       

      </div>
     
            )
          }
        }
export default Sidebar;