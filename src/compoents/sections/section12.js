import React, { Component } from 'react'
import axios from 'axios';
export default class Section12 extends Component {
    state={
        
        question1:'',
        question2:'',
        cur_liabi:'',
        q3:''

    }
  
    handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
    }
    checked=(e)=>{
        
        var options=document.getElementsByName(e.target.name);
        var len=options.length;
        for (var i=0;i<len;i++){
          if(options[i].checked){
            console.log(options[i].value)
            this.setState({
              [e.target.name]:options[i].value
            })
          }
        }
        console.log(this.state)
      }
      handleSubmit=(e)=>{
        var state=this.state.ans;
        console.log(state)
        e.preventDefault();
        console.log(this.state);
        // axios.get('https://jsonplaceholder.typicode.com/users').then(function(res){
        //   console.log(res)
        // });
        axios.post('/api/section12',{section12:this.state}).then((res)=>{
          console.log(res)
        })
        }
    render() {

    return (
      <div>
      <div style={{margin:"50px",paddingBottom:40}} >
        <div>
            <textarea style={{fontSize:40,padding:"60px"}}   className="materialize-textarea " defaultValue="Current Liabilities"></textarea>
                <textarea onChange={this.handleChange} className="materialize-textarea" placeholder="Description(optional)" id="cur_liabi"/>
        </div>
        <div>
        <div >
            <span>Is there is any  Advance from customers?</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}}>
                <input type="radio" name="question1"  value="yes" onClick={this.checked}/>
                <span>Yes</span>
            </label>
            
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question1" value="no" onClick={this.checked}/>
                <span>no</span>
            </label>
        </div>
        <div>
            <br/>
            <span>Is policy/agreement/terms of point above received?</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question2" value="yes" onClick={this.checked}/>
                <span>Yes</span>
            </label>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question2" value="no" onClick={this.checked}/>
                <span>no</span>
            </label>
            
        </div>
            <br/>
            <span>Bill Period of advance (in days)</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}}  >
            <input type="text" name="question3" id='q3' onChange={this.handleChange}/>
                
           </label>
        
        </div>
        <button  className="btn" type="submit" onClick={this.handleSubmit}>post</button>

        </div>
      </div>
    )
  }
}
