import React, { Component } from 'react'
import axios from 'axios';
export default class Section6 extends Component {
    state={
        ans:'',
        question1:'',
        question2:'',
        question3:''
    }
  
    handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
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
        
        axios.post('/api/section6',{section6:this.state}).then((res)=>{
          console.log(res)
        })
        }
    render() {

    return (
      <div>
      <div style={{margin:"50px",paddingBottom:40}} >
        <div>
            <textarea style={{fontSize:40,padding:"60px"}}   className="materialize-textarea " defaultValue="Receipt of statements"></textarea>
                <textarea onChange={this.handleChange} className="materialize-textarea" placeholder="Description(optional)" id="ans"/>
        </div>
        <div>
        <div >
            <span>Is Trial Balance signed and properly dated?</span>
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
            <span>Is Balance Sheet match with Trial Balance?</span>
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
            <span>Is profit and Loss match with Trial Balance?</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}}>
                <input type="radio" name="question3" value="yes" onClick={this.checked}/>
                <span>Yes</span>
            </label>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question3" value="no" onClick={this.checked}/>
                <span>no</span>
            </label>
        </div>
        <button  className="btn center" type="submit" onClick={this.handleSubmit}>post</button>

        </div>
        
      </div>
    )
  }
}
