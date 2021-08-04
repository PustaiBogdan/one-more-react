import React , {Component} from 'react'

class Welcome extends Component {
    render(){
        const {name,second}=this.props
        return (
            <div>
                <h1>Welcome  {name}</h1>
                <h1>And {second}</h1>
            </div>
        ) 
    }
}
export default Welcome