import React from 'react'

const Navbar = ()=> {
  return (
    <div className='nav bg-slate-400 h-10 w-[100vw] flex sticky top-0 justify-end mx-4 p-4 pb-9'>
    <ul className=' flex gap-5'>
        <li>Home</li>
        <li>Service</li>
        <li>About us</li>
        <li>Contact</li>
    </ul>  
    </div>
  )
}

export default Navbar
