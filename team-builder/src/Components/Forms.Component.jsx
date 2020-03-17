import React, { useState } from 'react'

const UserForm = props => {
    const [formState, setFormState] = useState({
        username: '',
        password: ''
    })

    return(
        <p>form here</p>
    )
}

export default UserForm