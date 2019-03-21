import React, { Component } from 'react'
import Navbar from './navbar'
import { BrowserRouter,Route} from "react-router-dom";
import Questions from './questions';
import Responses from './responses'
export default class MainComp extends Component {
  render() {
    return (
        <BrowserRouter>
        
            <Navbar />
            <div>
            
            <Route  exact path="/"  component={Questions} />
            <Route exact path="/responses" component={Responses}/>
            {console.log('this is working')}
            

            
            
            
            </div>
      </BrowserRouter>
    )
  }
}
