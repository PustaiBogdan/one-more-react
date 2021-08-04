import React, { Component } from 'react'
import ChildElement from './ChildElement'

 class ParentElement extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:"Hello from the parent element"
         }
         this.parentFunction=this.parentFunction.bind(this);
     }
     parentFunction(){
         alert(`message ${this.state.message}`);
     }
    render() {
        return (
            <div>
                <ChildElement propName={this.parentFunction}/>
            </div>
        )
    }
}

export default ParentElement
