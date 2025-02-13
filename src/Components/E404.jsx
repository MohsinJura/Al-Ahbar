import React from 'react'
import { Link } from 'react-router-dom'

const E404 = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center py-12'>
        <h1 className='text-blue-500 heading'>4<span className='text-white'>0</span>4</h1>
        <h2 className='heading-lg'>File Not Found!</h2>
        <button className='btn-long mt-4' >
          <Link to={'/'}>Back to Home</Link>
        </button>
      </div>
    </div>
  )
}

export default E404
