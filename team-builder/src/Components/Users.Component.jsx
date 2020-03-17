import React from 'react'

const Users = props => {
    
    // console.log(props.regUsers)
    return(
        <div className='regUsers-container'>            
            {// map through the data being sent
                props.regUsers.map(user => (
                <div className="regUserList" key={user.id}>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <p>{user.role}</p>
                </div>
            ))}
        </div>
    )
}

export default Users