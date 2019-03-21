import React, { Component } from 'react'
import axios from 'axios';
export default class Section7 extends Component {
state={
    registration_no:'',
    itret:'',
    gstret:'',
    chk_chalan:'',
    gst_reg_let:'',
    est_reg_let:'',
    vat_reg_let:'',
    pf_reg_let:'',
    roc_reg_let:'',
    stax_reg_let:''
    }
handleChange=(e)=>{
    this.setState({
     [e.target.id]:e.target.value
    });
    console.log(this.state)
  }
  handleSubmit=(e)=>{
    var state=this.state.ans;
    console.log(state)
    e.preventDefault();
    console.log(this.state);
    
    axios.post('/api/section7',{section7:this.state}).then((res)=>{
      console.log(res)
    })
    }

  render() {
    return (
      <div>
        <div style={{margin:"50px",paddingBottom:40}} >
        <div>
            <textarea style={{fontSize:40,padding:"60px"}}   className="materialize-textarea " defaultValue="Documentation"></textarea>
                <textarea onChange={this.handleChange} className="materialize-textarea" placeholder="please provide registration no." id="registration_no"/>
        </div>

        <div>
                    <h5>Is Income Tax return received?</h5>
                    <textarea onChange={this.handleChange}  className="materialize-textarea" defaultValue="" id="itret"/>
                    <br/>
                    <h5>Is Gst returns received?</h5>
                    <textarea  onChange={this.handleChange} className="materialize-textarea" defaultValue="" id="gstret"/>
                    <br/>
                    <h5>Is cheque challans received? </h5>
                    <textarea onChange={this.handleChange}  className="materialize-textarea" defaultValue="" id="chk_chalan"/>
                    <br/>
                    <h5>Is GST Registration letter received?</h5>
                    <textarea onChange={this.handleChange}  className="materialize-textarea" defaultValue="" id="gst_reg_let"/>
                    <br/>
                    <h5>Is ESI Registration letter received?</h5>
                    <textarea onChange={this.handleChange}  className="materialize-textarea" defaultValue="" id="est_reg_let"/>
                    <br/>
                    <h5>Is VAT Registration letter received?</h5>
                    <textarea onChange={this.handleChange}  className="materialize-textarea" defaultValue="" id="vat_reg_let"/>
                    <br/>
                    <h5>Is PF Registration letter received?</h5>
                    <textarea onChange={this.handleChange}  className="materialize-textarea" defaultValue="" id="pf_reg_let"/>
                    <br/>
                    <h5>Is ROC Registration letter received?</h5>
                    <textarea onChange={this.handleChange}  className="materialize-textarea" defaultValue="" id="roc_reg_let"/>
                    <br/>
                    <h5>Is Service Tax Registration letter received?</h5>
                    <textarea onChange={this.handleChange}  className="materialize-textarea" defaultValue="" id="stax_reg_let"/>
                    <br/>
                    
                </div>
                <button  className="btn" type="submit" onClick={this.handleSubmit}>post</button>

        
        </div>
            
        </div>
      
    )
  }
}
