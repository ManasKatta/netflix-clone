import React from 'react'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'><a href='http://localhost:3000/'>NETFLIX</a></h1>
        <div>
            {/* <button className='text-white pr-4'>Sign In</button>
            <button className='bg-red-600 px-7 py-3 rounded cursor-pointer text-white'>Sign Up</button> */}
          <Searchbar />
        </div>
    </div>
  )
}

export default Navbar