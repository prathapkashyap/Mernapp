import React, { Component } from 'react'
import axios from 'axios';
export default class Section5 extends Component {
    state={
        receipt:''
    }
 
    handleChange=(e)=>{
        this.setState({
          [e.target.id]:[e.target.value]
        })
    }
    checked=(e)=>{
        
        var options=document.getElementsByName('group2');
        var len=options.length;
        for (var i=0;i<len;i++){
          if(options[i].checked){
            console.log(options[i].value)
            this.setState({
              [e.target.id]:options[i].value
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
        
        axios.post('/api/section',{section5:this.state}).then((res)=>{
          console.log(res)
        })
        }
    render() {

    
    return (
      <div >
        <div style={{margin:"50px",}} >
        <div>
            <textarea style={{fontSize:40,padding:"60px"}}   className="materialize-textarea " defaultValue="Receipt of statements"></textarea>
                <textarea onChange={this.handleChange} className="materialize-textarea" placeholder="Description(optional)" id="receipt" value={this.state.recepient}/>
            </div>
            <div >
        
        <textarea style={{fontSize:40,padding:"60px"}}   className=" container materialize-textarea  " defaultValue="Question"></textarea>

        <div style={{margin:30, padding:"20px"}}>
            <label>
                <input type="radio" name="group1" />
                <span style={{fontSize:"20px", paddingRight:"20px"}}> 1 </span>
            </label>
            <label>
                <input type="radio" name="group1" />
                <span style={{fontSize:"20px", paddingRight:"20px"}}> 2 </span>
            </label>
            <label>
                <input type="radio" name="group1" />
                <span style={{fontSize:"20px", paddingRight:"20px"}}> 3 </span>
            </label>
            <label>
                <input type="radio" name="group1" />
                <span style={{fontSize:"20px", paddingRight:"20px"}}> 4 </span>
            </label>
            <label>
                <input type="radio" name="group1" />
                <span style={{fontSize:"20px", paddingRight:"20px"}}> 5 </span>
            </label>

        </div>

        </div>
        <button  className="btn" type="submit" onClick={this.handleSubmit}>post</button>

        </div>


       
        

      </div>
    )
  }
}
