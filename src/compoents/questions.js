import React, { Component } from 'react';
import Section1 from './sections/section1';
import Section2 from './sections/section2';
import Section3 from './sections/Section3';
import Section4 from './sections/section4';
import Section5 from './sections/section5';
import Section6 from './sections/section6';
import Section7 from './sections/section7';
import Section8 from './sections/section8';
import Section9 from './sections/section9';
import Section10 from './sections/section10';
import Section11 from './sections/section11';
import Section12 from './sections/section12';
import Section13 from './sections/section13';
import Section14 from './sections/section14';
import Section15 from './sections/section15';
import Section16 from './sections/section16';
import Section17 from './sections/section17';
import axios from 'axios';
// export const Expansion=()=>{
//   return(
//     <div>
//     <a href='#' className="btn-floating black-text right top">  <i className="material-icons right">expand_less</i></a>  
    
//     <a href="#" className="btn-floating black-text right bottom">
//     <i className="material-icons right">expand_more</i></a>  
//     </div>
//   )
//}

export const Badges=({props})=>{
  return(
    <div  className="left top padd" style={{height:"30px", fontSize:"40px"  }}>
      <h4 className="badge grey white-text">Section {props}</h4>
    </div>
  )
}


 

export default class Questions extends Component {

  saveResp=()=>{
    console.log('huh')
    axios.post('/api/save',{data:'dave'}).then((res)=>{
      console.log('got data');
    })
  }
render() {
   
    return(
    <div className="container ">
     <div className=" card ">
     <Badges props={1}/>
        <Section1 className="container"/>
    </div>
      <div className="card">
      <Badges  props={2}/>
      
        <Section2/>
      </div>
      <div className="card" >
        <Badges props={3}/>
        <Section3/>
      </div>
      <div className="card " >
        <Badges props={4}/>
        <Section4/>
      </div>
      <div className="card" >
        <Badges props={5}/>
        <Section5/>
      </div>
      <div className="card" >
        <Badges props={6}/>
        <Section6/>
      </div>
      <div className="card" >
        <Badges props={7}/>
        <Section7/>
      </div>
      <div className="card" >
        <Badges props={8}/>
        <Section8/>
      </div>
      <div className="card" >
        <Badges props={9}/>
        <Section9/>
      </div>
      <div className="card" >
        <Badges props={10}/>
        <Section10/>
      </div>
      <div className="card" >
        <Badges props={11}/>
        <Section11/>
      </div>
      <div className="card" >
        <Badges props={12}/>
        <Section12/>
      </div>
      <div className="card" >
        <Badges props={13}/>
        <Section13/>
      </div>
      <div className="card" >
        <Badges props={14}/>
        <Section14/>
      </div>
      <div className="card" >
        <Badges props={15}/>
        <Section15/>
      </div>
      <div className="card" >
        <Badges props={16}/>
        <Section16/>
      </div>
      <div className="card" >
        <Badges props={17}/>
        <Section17/>
      </div>
        <button className="btn" onClick={this.saveResp}> save responses</button>
      
      </div>
  )
  }
}

