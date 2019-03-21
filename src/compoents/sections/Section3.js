import React, { Component } from 'react'
import axios from 'axios'
import Section2 from './section2';

export default class Section3 extends Component {
    state={
        concern_name:'',
       end_year:'',
        people_involved:'',
        people_assigned:''
    }

    handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
        console.log(this.state)
      }
      handleSubmit=(e)=>{
        var state=this.state.ans;
        console.log(state)
        e.preventDefault();
        console.log(this.state);
        
        axios.post('/api/section3',{section3:this.state}).then((res)=>{
          console.log(res)
        })
        }
  render() {
    return (
      <div >
    
        <Section2/>
        <div style={{padding:'30px'}}>
            <h5>Name of the concern</h5>
            <textarea className=" materialize-textarea " id="concern_name" onChange={this.handleChange}></textarea>
            <h5>Audit for the year ended</h5>
            <textarea className=" materialize-textarea " id="end_year" onChange={this.handleChange}></textarea>
            <h5>Name of the  people involved in Audit</h5>
            <textarea className=" materialize-textarea " id="people_involved" onChange={this.handleChange}></textarea>
            <h5>People to whom the audit is assigned </h5>
            <textarea className=" materialize-textarea " id="people_assigned" onChange={this.handleChange}></textarea>
            <button  className="btn center" type="submit" onClick={this.handleSubmit}>post</button>

        </div>
      </div>
    )
  }
}
