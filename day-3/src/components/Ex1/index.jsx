import React from 'react'

const User = ({user}) => {
  return (
    <div class="user">
        <h3>{user.id}</h3>
        <p>Name: {user.name}</p>
        <p>UseName: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Street: {user.address.street}</p>
    </div>
  )
}

export default User