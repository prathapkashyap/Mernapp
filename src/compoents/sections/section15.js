import React, { Component } from 'react'
import axios from 'axios';
export default class Section15 extends Component {
    state={
        question1:'',
        question2:'',
        question3:'',
        question4:'',
        question5:'',
        question6:'',
        question7:'',
        question8:'',
        question9:'',
        question10:'',
        dues_orders:''
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
        
        axios.post('/api/section15',{section15:this.state}).then((res)=>{
          console.log(res)
        })
        }
    render() {

    return (
      <div>
      <div style={{margin:"50px",paddingBottom:40}} >
        <div>
            <textarea style={{fontSize:40,padding:"60px"}}   className="materialize-textarea " defaultValue="Statutory Dues and Orders"></textarea>
                <textarea onChange={this.handleChange} className="materialize-textarea" placeholder="Description(optional)" id="dues_orders"/>
        </div>
        <div>
        <div >
            <span>Is there any Income Tax Order pending?</span>
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
            <span>Is there any GST Orders Passed during the year?</span>
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
            <span>Is there any audits conducted by the department,if any?</span>
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
            <span>Are there any defaults in paying ESI dues?</span>
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
            <span>Are there any defaults in paying PF dues?</span>
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
            <span>Is TDS Depsited in time & quaterly statements filed in time also check TDS Challans?</span>
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
            <span>Are TDS Certificate issued in time?</span>
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
            <span>Is there any deduction claimed in respect of Sec 43B?</span>
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
            <span>Is any bonus or commission payable to employees?</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question9"  value="yes" onClick={this.checked}/>
                <span>Yes</span>
            </label>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question9" value="no" onClick={this.checked}/>
                <span>no</span>
            </label>
            
            </div>

            <div>
            <br/>
            <span>Is there any Leave encashment provided by an employer to his employees?</span>
            <br/>
            <br/>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question10"  value="yes" onClick={this.checked}/>
                <span>Yes</span>
            </label>
            <label style={{paddingLeft:"80px",paddingRight:"80px"}} >
                <input type="radio" name="question10" value="no" onClick={this.checked}/>
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
