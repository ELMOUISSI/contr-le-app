import React, { useState } from 'react'
import UserTable from './UserTable'
import UsersAdd from './UsersAdd'

const UserApp = () => {
    
    const [users,setUsers]=useState([])
    const [lastId,setlastId]=useState(1)

    const addUser=(data)=>{
      setUsers(prevState=>[...prevState,data.paylod])
      setlastId(prevState=>prevState+1)
      console.table(data)
    }


  return (
    <div className='container'>
      <UsersAdd lastId={lastId} onAddUser={addUser}/>
      <hr />
      <br />
      <hr />
      <UserTable users={users}/>
      
    </div>
  )
}

export default UserApp
