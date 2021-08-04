import React from 'react'

const Hello = (props) =>{
    console.log(props);

    function clickFunction(){
        console.log("clicked");
    }
    return  (
        <div>
        <h1>Hello {props.name}</h1>
        {props.children}

        <button onClick={clickFunction}>Cleck me</button>
        </div>
    ) 
}

export default Hello