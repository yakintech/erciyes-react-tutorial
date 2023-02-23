import React from 'react'


//props -> string, boolean, object, array...
function Title(props) {

  return (
    <>
        <h1 style={{color:'tomato', backgroundColor:'black'}}>{props.name} - {props.year}</h1>
    </>
  )

}

export default Title
