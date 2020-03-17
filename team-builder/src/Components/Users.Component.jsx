import React from 'react'

const Users = props => {
    
    // console.log(props.regUsers)
    return(
        <div className='regUsers-container'>
            {props.regUsers.map(user => (
                <div className="note" key={user.id}>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <p>{user.role}</p>
                </div>
            ))}
        </div>
    )
}

export default Users