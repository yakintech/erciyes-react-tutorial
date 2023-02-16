import React from 'react'

function JsxEventSample() {

    const hello = () => {
        alert('Hello Reactjs!!')
    }

    return (<>
        <button onClick={hello}>Hello</button>
        <button onClick={() => hello()}>Hello-2</button>
        <button onClick={() => alert('Hello Reactjs-3')}>Hello-3</button>
        <input type='text' onChange={() => hello()} />
    </>
    )
}

export default JsxEventSample



