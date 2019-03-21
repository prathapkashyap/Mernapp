import React, { Component } from 'react'
import axios from 'axios';
export default class Section1 extends Component {
state={
    ans:''
}
handleChange=(e)=>{
    this.setState({
      ans:e.target.value
    })
    console.log(this.state.ans)
  }
  
  handleSubmit=(e)=>{
    var state=this.state.ans;
    console.log(state)
    e.preventDefault();
    console.log(this.state);
    
    axios.post('/api/section1',{section1:this.state}).then((res)=>{
      console.log(res)
    })
    }
  

  render() {
    return (
        <div className="" >
         
            <div  style={{margin:50}} >
            
                <div style={{padding:"50px"}}>
                    <h3 style={{fontSize:40,padding:"20px"}}   className="materialize-textarea hover" defaultValue="Check lists">Check lists</h3>
                    <textarea onChange={this.handleChange} className="materialize-textarea" placeholder="form description" id="ans" value={this.state.ans}/>
                </div>
                <button  className="btn" type="submit" onClick={this.handleSubmit}>post</button>
                
            </div>
        </div>
     
    
    )
  }
}
