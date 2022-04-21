import React, {useContext} from 'react'
import {LoginContext} from '../App'



function Profile() {
  
  const {username,setShowprofile} = useContext(LoginContext);
  return (
    <>
    <div className='container'>
    <h1>profile</h1>
    <h1>Username:{username}</h1>
    <button onClick={() => setShowprofile(false)}>Login page</button>
    </div>
    

    </>
    
  )
}

export default Profile