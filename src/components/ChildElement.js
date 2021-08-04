import React from 'react'

function ChildElement(props) {
    return (
        <div>
            <button onClick={props.propName}>Click me</button>    
        </div>
    )   
}

export default ChildElement
