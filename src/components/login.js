import React, { useContext } from 'react'
import { LoginContext } from '../App'


function Login() {
  const { setUsername, setShowprofile } = useContext(LoginContext);
  return (
    <>
      <div className='container'>
        <div className='form'>
          <h1>login page</h1>
          <div>
            <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <input type="text" placeholder='password' />
          </div>
          <button onClick={() => setShowprofile(true)}>login</button>
        </div>

      </div>

    </>
  )
}

export default Login