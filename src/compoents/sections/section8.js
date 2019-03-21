import React, { Component } from 'react'
import axios from 'axios';
export default class Section8 extends Component {
    state={
        receipt:'',
        question1:'',
        question2:'',
        question3:'',
        question4:'',
    }
  
    handleChange=(e)=>{
        this.setState({
          [e.target.id]:[e.target.value]
        })
        console.log(this.state.receipt)
        
    }
    checked=(e)=>{
        
        var options=document.getElementsByName(e.target.name);
        console.log(e.target.name)
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
      
        axios.post('/api/section8',{section8:this.state}).then((res)=>{
          console.log(res)
        })
        }
    render() {

    return (
      <div>
      <div style={{margin:"50px",paddingBottom:40}} >
        <div>
            <textarea style={{fontSize:40,padding:"60px"}}   className="materialize-textarea " defaultValue="Statutory Requirement"></textarea>
                <textarea onChange={this.handleChange} className="materialize-textarea" placeholder="Description(optional)" id="receipt"/>
        </div>
        <div>
        <div >
            <span>Is tax deposited?</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}}>
                <input type="radio" name="question1" value="yes" onClick={this.checked}/>
                <span>Yes</span>
            </label>
            
            <label>
                <input type="radio" name="question1" value="no" onClick={this.checked}/>
                <span>no</span>
            </label>
        </div>
        <div>
            <br/>
            <span>Is Gst return filed?</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question2" value="yes" onClick={this.checked}/>
                <span>Yes</span>
            </label>
            <label>
                <input type="radio" name="question2" value="no" onClick={this.checked}/>
                <span>no</span>
            </label>
            
        </div>

            <div>
            <br/>
            <span>Is Income Tax Return filed?</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}}>
                <input type="radio" name="question3"  value="yes" onClick={this.checked}/>
                <span>Yes</span>
            </label>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question3" value="no" onClick={this.checked}/>
                <span>no</span>
            </label>
            </div>

            <div>
            <br/>
            <span>Is Tax audit applicable?</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question4"  value="yes"  onClick={this.checked}/>
                <span>Yes</span>
            </label>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question4" value="no"  onClick={this.checked}/>
                <span>no</span>
            </label>
            
        </div>

        </div>
        <button  className="btn" type="submit" onClick={this.handleSubmit}>post</button>


        
        
        </div>
        
      </div>
    )
  }
}
