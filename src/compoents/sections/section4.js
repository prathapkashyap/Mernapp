import React, { Component } from 'react'

import axios from 'axios';
export default class Section4 extends Component {
state={
    stuatuary_compliances:'',
    pan_no:'',
    working_process:'',
    address:'',
    bank_accounts:'',
    checkbox:[],
    radiobtn_ans:''

}

    handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        });
        console.log(this.state)
        console.log(e.target.id)
    }
    checked=(e)=>{
        
        var options=document.getElementsByName('group2');
        var len=options.length;
        for (var i=0;i<len;i++){
          if(options[i].checked){
            console.log(options[i].value)
            this.setState({
              radiobtn_ans:options[i].value
            })
          }
        }
        console.log(this.state)
      }

      checkBox=()=>{
          var box=document.getElementsByName('group1');
          var len=box.length;
          var arr=[]
          for (var i=0;i<len;i++){
              if(box[i].checked===true){
                  console.log(box[i].value)
                  if(!arr.includes(box[i].value)){
                      arr.push(box[i].value)
                      this.setState({
                          checkbox:arr
                      })
                      console.log(arr,'this is the array')
                      console.log(this.state.checkbox)
                  }
              }
          }
      }

      handleSubmit=(e)=>{
        var state=this.state.ans;
        console.log(state)
        e.preventDefault();
        console.log(this.state);
       
        axios.post('/api/section4',{section4:this.state}).then((res)=>{
          console.log(res)
        })
        }

      
    render() {
        return (
      <div>
        <div  style={{margin:50, paddingBottom:"30px"}} className=" ">
            
            <div >
                <textarea style={{fontSize:"40px",padding:"60px"}}   className="materialize-textarea hover"  defaultValue="stuatuary Compliances"></textarea>
                <textarea onChange={this.handleChange} className="materialize-textarea" placeholder="form description" id="stuatuary_compliances" value={this.state.question}/>
            </div>
            <br/>
            <div>
                <h5> Nature of Business</h5>
                <br/>
                <div style={{paddingBottom:"50px"}}>
                    <label style={{padding:"20px"}}> 
                        <input type="checkbox" name="group1" onClick={this.checkBox} value="option1"/>
                        <span>Option 1</span>
                    </label>
                    <br/>
                    <label style={{padding:"20px"}}   >
                        <input type="checkbox" name="group1" onClick={this.checkBox} value="option2" />
                        <span>Option2 </span>
                    </label>
                </div>
                <div style={{marginBottom:"40px", fontSize:"30px"}}>
                    <h5>Software used for accounts</h5>
                    <label >
                        <input type="radio" name="group2" value='tally' onClick={this.checked}/>
                        <span style={{fontSize:"20px"}}> Tally </span>
                    </label>
                    <br/>
                    <label >
                        <input type="radio" name="group2" value='busy'onClick={this.checked}/>
                        <span  style={{fontSize:"20px"}}> Busy </span>
                    </label>
                    <br/>
                    <label>
                        <input type="radio" name="group2" value="taxheal.in" onClick={this.checked}/>
                        <span style={{fontSize:"20px"}}> Taxheal.in </span>
                    </label>
                    <br/>
                    <label>
                        <input type="radio" name="group2" value="other" onClick={this.checked}/>
                        <span style={{fontSize:"20px"}}> Other</span>
                    </label>
                    <br/>
                    
                </div>

                <div>
                    <h5>Pan no. of business</h5>
                    <textarea onChange={this.handleChange}  className="materialize-textarea" defaultValue="" id="pan_no"/>
                    <br/>
                    <h5>Working Process of Business (in case of manufacurer)</h5>
                    <textarea  onChange={this.handleChange} className="materialize-textarea" defaultValue="" id="working_process"/>
                    <br/>
                    <h5>Address of the Business </h5>
                    <textarea onChange={this.handleChange}  className="materialize-textarea" defaultValue="" id="address"/>
                    <br/>
                    <h5>No. of bank accounts</h5>
                    <textarea onChange={this.handleChange}  className="materialize-textarea" defaultValue="" id="bank_accounts"/>
                    <br/>
                    
                </div>
            </div>
            <button  className="btn" type="submit" onClick={this.handleSubmit}>post</button>

        </div>

      </div>
    )
  }

}