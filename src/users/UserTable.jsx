import React from 'react' 

const UserTable = ({users}) => {
  console.log(users)
  return (
    <>
    <h1>users</h1>
    <table className='table table-striped table-inverse table-responsive'> 
    <thead className='thead-inverse'>
        <tr> 
        <td>ID</td>
        <td> FULL NAME</td>
        <td> COUNTRY </td></tr>
        
        
    </thead>
    <tbody>
       {
       (users.length>0)?users.map((user,key)=> <tr key={key}>
            <td>{user.id}</td>
            <td>{user.fullName}</td>
            <td>{user.country}</td>
            </tr> ): <tr> <td colSpan={3} align={"center"}> no items</td> </tr>
       }
    </tbody>

    </table>
    
    </>
  )
}

export default UserTable
