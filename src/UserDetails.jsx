import React from 'react'
import { Link, useParams } from 'react-router'

const UserDetails = () => {
  const paramsData = useParams();
  console.log(paramsData.id);
  return (
    <div>
        <h1>User Detail Page</h1>
        <h2>User id is: {paramsData.id}</h2>
        <h3><Link to={"/users"}>Back</Link></h3>
    </div>
  )
}

export default UserDetails