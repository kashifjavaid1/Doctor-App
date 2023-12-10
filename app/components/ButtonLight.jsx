import Link from 'next/link'
import React from 'react'

const ButtonLight = () => {
  return (
    <div className='bg-white cursor-pointer  w-fit text-black rounded-xl shadow-md font-bold px-6 py-2 '><Link href={'/signin'}>Sign in</Link></div>
  )
}

export default ButtonLight