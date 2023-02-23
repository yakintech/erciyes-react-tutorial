import React from 'react'

function UserList(props) {
    return (<>
        <h1>Users</h1>
        <ul>
            {
                props.users.map(item => <li>{item}</li>)
            }
        </ul>
    </>)
}

export default UserList