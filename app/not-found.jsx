import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='mt-28 text-2xl'>
      <h2>Page Not Found</h2>
      <Link href='/'>
        
      <button className='text-black p-2 m-4 text-sm bg-blue-300 rounded-md'>Go to home</button>
      </Link>
    </div>
  )
}

export default NotFound
