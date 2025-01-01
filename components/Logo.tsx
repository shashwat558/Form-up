import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'} className='cursor-pointer'>

    <div className='text-4xl font-bold'>Form-<span className='text-blue-400 text-4xl font-bold'>Up</span></div>
    </Link>
  )
}

export default Logo