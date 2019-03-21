import React, { Component } from 'react'
import axios from 'axios';
export default class Section9 extends Component {
    state={
        share_capital:'',
        question1:'',
        question2:'',
        question3:'',
        question4:'',
        question5:'',
        question6:'',
        question7:'',
        question8:'',
        question9:'',

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
        // axios.get('https://jsonplaceholder.typicode.com/users').then(function(res){
        //   console.log(res)
        // });
        axios.post('/api/section9',{section9:this.state}).then((res)=>{
          console.log(res)
        })
        }
    render() {

    return (
      <div>
      <div style={{margin:"50px",paddingBottom:40}} >
        <div>
            <textarea style={{fontSize:40,padding:"60px"}}   className="materialize-textarea " defaultValue="Share Capital"></textarea>
                <textarea onChange={this.handleChange} className="materialize-textarea" placeholder="Description(optional)" id="share_capital"/>
        </div>
        <div>
        <div >
            <span>Is Equity shares Issued during the year?</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}}>
                <input type="radio" name="question1" value="yes" onClick={this.checked}/>
                <span>Yes</span>
            </label>
            
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question1" value="no" onClick={this.checked}/>
                <span>no</span>
            </label>
        </div>
        <div>
            <br/>
            <span>Is Equity shares Issued on Premium?</span>
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
            <span>Is valuation report of point no. 2 received?</span>
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
            <span>Is Preference Shares issued during the year?</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question4"  value="yes" onClick={this.checked}/>
                <span>Yes</span>
            </label>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question4" value="no" onClick={this.checked}/>
                <span>no</span>
            </label>
            
            </div>
            <div>
            <br/>
            <span>Is Preference Shares issued on Premium?</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question5"  value="yes" onClick={this.checked}/>
                <span>Yes</span>
            </label>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question5" value="no" onClick={this.checked}/>
                <span>no</span>
            </label>
            
            </div>

            <div>
            <br/>
            <span>Is valuation report of point no. 5 received?</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question6"  value="yes" onClick={this.checked}/>
                <span>Yes</span>
            </label>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question6" value="no" onClick={this.checked}/>
                <span>no</span>
            </label>
            
            </div>

            <div>
            <br/>
            <span>Is Debentures Issued during the year?</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question7"  value="yes" onClick={this.checked}/>
                <span>Yes</span>
            </label>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question7" value="no" onClick={this.checked}/>
                <span>no</span>
            </label>
            
            </div>

            <div>
            <br/>
            <span>Is Debentures Issued on Premium?</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question8"  value="yes" onClick={this.checked}/>
                <span>Yes</span>
            </label>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question8" value="no" onClick={this.checked}/>
                <span>no</span>
            </label>
            
            </div>

            <div>
            <br/>
            <span>Is Valuation report of pont no. 8 received?</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question9"  value="yes" onClick={this.checked}/>
                <span>Yes</span>
            </label>
            <label>
                <input type="radio" name="question9" value="no" onClick={this.checked}/>
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
