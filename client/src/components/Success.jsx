import React from 'react'
import { Link } from 'react-router-dom'
const Success = () => {
  return (
    <div>
      <h1>Payment successfully paid</h1>
      <Link to='/' >go to home</Link>
    </div>
  )
}

export default Success
