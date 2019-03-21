import React, { Component } from 'react'
import axios from 'axios';

export default class Section2 extends Component {
    state={
        ans:'',
        radio_btn:''

    }
    handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
        console.log(this.state.ans)
      }
      handleSubmit=(e)=>{
        var state=this.state;
        console.log(state)
        e.preventDefault();
        console.log(this.state);
        
        axios.post('/api/section2',{section2:this.state}).then((res)=>{
          console.log(res)
        })
        
       
      }

      
      checked=(e)=>{
        var options=document.getElementsByName('group1');
        var len=options.length;
        for (var i=0;i<len;i++){
          if(options[i].checked){
            console.log(options[i].value)
            this.setState({
              radio_btn:options[i].value
            })
          }
        }
        console.log(this.state)
      }
  render() {
      
    return (
      <div className="">
        
        <div  style={{margin:50, paddingBottom:"20px"}} className="  ">
                <div >
                    <textarea style={{fontSize:40,padding:"60px"}}   className="materialize-textarea " defaultValue="Check lists"></textarea>
                    <textarea onChange={this.handleChange} className="materialize-textarea" id="ans" placeholder="form description" value={this.state.ans}/>
                </div>
                <div>
                <textarea style={{fontSize:40,padding:"60px"}}   className="materialize-textarea" defaultValue="Question"></textarea>
                <form>

                <div>

                <label>
                    <input name="group1" type="radio" onClick={this.checked}  value='option1'/>
                    <span>option 1</span>
                </label>
                <br/>
                <label>
                    <input name="group1" type="radio" onClick={this.checked} value='option2' />
                    <span>option 2</span>
                </label>
                <br/>
                <br/>
               
                </div>
                <button  className="btn" type="submit" onClick={this.handleSubmit}>post</button>

                </form>
                </div>

      </div>
      </div>
    )
  }
}
