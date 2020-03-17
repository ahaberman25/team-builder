import React, { useState } from 'react'
import Users from './Components/Users.Component'
import Form from './Components/Forms.Component'

import './App.css';

function App() {
  // setup registered user
  const [regUser, setRegUser] = useState([
    {
      id: Date.now(),
      username: 'ahaberman25',
      email: 'ahaberman25@gmail.com',
      role: 'Owner'
    }
  ])

  return (
    <div className="App">
      <h1>Registered Users</h1>
      <Users regUsers={regUser} />
      <Form />
    </div>
  );
}

export default App;
