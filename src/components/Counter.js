import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    countIncrease(){
        this.setState  ( prevState => ({
            count : prevState.count + 1
}))
    }
countIncreaseFive(){
    this.countIncrease()
    this.countIncrease()
    this.countIncrease()
    this.countIncrease()
    this.countIncrease()


}


    render() {
        return (
            <div>
                 <div> count - {this.state.count}</div>
                <button onClick= { ()=> this.countIncreaseFive()}>Increase</button>
            </div>
        )
    }
}

export default Counter
