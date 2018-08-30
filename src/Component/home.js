import React, { Component } from 'react';
import '../App.css';
import './home.css';
//import { Capture } from '../images/Capture.PNG';
import {  Link } from 'react-router-dom';
// import bicycle from './bicycle.js';
// import mobile from './mobile.js';
import Sidebar from './sidebar.js';
class Home extends Component {
  constructor() {
    super();

   
    this.state = {
      data: [],
      mobile: [],
      image:[],
      search:[]



    }
    


    this.search=this.search.bind(this);
    this.onChange=this.onChange.bind(this);
  }

  componentDidMount() {
    var img=[
   require('../images/m1.jpg'),
      require('../images/b2.jpg')
    ];
    console.log(img);
    fetch("http://localhost:4001/category")
      .then((response) => response.json())
      .then((findresponse) => {
        //   for(var i=0;i<findresponse.data.length;i++){
        //     var k=findresponse.data[i]
        //   }
        //  console.log(k)

        this.setState({
          data: findresponse.data,img
          
        });

      })


  }
  onChange(e) {
    this.setState({ search: e.target.value });
    console.log(this.state.search);

  }
  search(){
    var k=this.state.search
  
    this.props.history.push(k)

  }
  render() {



          

              
         


    return (
      <div>
      <div className="App-header">MINI CART
      <br /><input onChange={this.onChange}/>
        <button onClick={this.search}>search</button>
        <Link to="/cart"><button >view your cart</button></Link>
        <Link to="/sign"><button className="right">Logout</button></Link>
      </div>
      
     
      <div >
      
  
        {
            
          
          this.state.data&& this.state.data.length 
          && this.state.data.map((data, i) => {
            return (
            <div key={i}>
              <div className="modal-home">
                <div className="modal-content">
               <Sidebar/>
                  {/* <img src={require('../images/m1.jpg')}  alt=""className="mobile" /> */}

                  <div>{data.name}</div>
                  
                  <Link to={data.name}><button>see all</button></Link>

                </div>

              </div>



            </div>)


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
export default Home;