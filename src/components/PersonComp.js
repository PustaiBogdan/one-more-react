import React from 'react'
import ListRenderComp from './ListRenderComp'
function PersonComp() {
    const PersObj= [{
        name:'fon',
        age:13,
        id:3
    },{
        name:'fon',
        age:13,
        id:5
    },{
        name:'hol',
        age:23,
        id:7
    },{
        name:'aqc',
        age:54,
        id:9 
    }]
    const PersNamesAndAges = PersObj.map ( person =><ListRenderComp key={person.id} person={person}/>)
    const PersNames = PersObj.map ( person => person.name + " ")
    console.log(PersNames);
    return (
        <div>
            {PersNames}
        </div>
    )
}

export default PersonComp
