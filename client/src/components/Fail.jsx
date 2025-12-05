import React from 'react'
import {Link } from 'react-router-dom'
const Fail = () => {
  return (
    <div>
      <h1>payment failed</h1>
      <Link to= "/">Try again</Link>
    </div>
  )
}

export default Fail
