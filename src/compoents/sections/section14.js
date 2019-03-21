import React, { Component } from 'react'
import axios from 'axios';
export default class Section14 extends Component {
  
    state={
        question1:'',
        question2:'',
        question3:'',
        question4:'',
        question5:'',
        creditors:''
    }
    handleChange=(e)=>{
        this.setState({
          [e.target.id]:[e.target.value]
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
    }
    handleSubmit=(e)=>{
        var state=this.state.ans;
        console.log(state)
        e.preventDefault();
        console.log(this.state);
        
        axios.post('/api/section14',{section14:this.state}).then((res)=>{
          console.log(res)
        })
        }
    render() {

    return (
      <div>
      <div style={{margin:"50px",paddingBottom:40}} >
        <div>
            <textarea style={{fontSize:40,padding:"60px"}}   className="materialize-textarea " defaultValue="Creditors"></textarea>
                <textarea onChange={this.handleChange} className="materialize-textarea" placeholder="Description(optional)" id="creditors"/>
        </div>
        <div>
        <div >
            <span>Is creditors a/c shows debit balance?</span>
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
            <span>Is Business has any Advance policy?</span>
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
        <div>
            <br/>
            <span>Is terms and agreement of the advance policy received?</span>
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

            <div>
            <br/>
            <span>Is Creditors a/c shows credit balance?</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}}>
                <input type="radio" name="question4" value="yes" onClick={this.checked}/>
                <span>Yes</span>
            </label>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question4" value="no" onClick={this.checked}/>
                <span>no</span>
            </label>
            </div>


            <div>
            <br/>
            <span>Is confirmation received from creditors?</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}}>
                <input type="radio" name="question5" value="yes" onClick={this.checked}/>
                <span>Yes</span>
            </label>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question5" value="no" onClick={this.checked}/>
                <span>no</span>
            </label>
            </div>
            <button  className="btn" type="submit" onClick={this.handleSubmit}>post</button>

        </div>
        </div>
        
      </div>
    )
  }
}
