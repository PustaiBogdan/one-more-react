import React from 'react'

const Bye = (props) =>{
    const {name,second} = props
    return(
        <div>
        <h1>Bye bye {name}</h1>
        <h2>se you {second}</h2>
        </div>
    ) 
}

export default Bye