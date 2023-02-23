import React from 'react'

function Employee(props) {

  return (<>
    <button onClick={props.hello}>Say Hello!</button>
    <button onClick={() => props.hello()}>Say Hello-2!</button>
  </>
  )

}

export default Employee