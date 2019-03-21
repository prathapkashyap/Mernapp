import React, { Component } from 'react'
import axios from 'axios'

export default class Responses extends Component {

constructor(props){
  super(props)
  this.state={
    answers:[]
  }

}

componentDidMount(){
  axios.get('/api/responses').then((answers)=>{
  
    this.setState({
      answers:Object.entries(answers.data[0])
      
    })
    console.log(this.state.answers)
    
    
  })
  }
  

  

  render() {
    
    return (
      <div  className="container">
         <ul className="">
           {this.state.answers.map((answer,i)=>
            <li key={answer[0]}  className="card ">
            <h3 > {answer[0]}</h3>
             {Object.entries(answer[1]).map(each=>
               <span >
                 <h5 className="container">{Object.entries(each)[0].toString().slice(2)}  :  {Object.entries(each)[1].toString().slice(2)}</h5>
                 
                 <br/>
                 </span>
               )}
            
              
            </li>
           )}
         </ul>
         

      </div>
    )
  }
}
