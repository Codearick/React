import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-400 text-white flex justify-between p-4'>
        <div className="logo font-extrabold text-[24px] text-[rgb(85,87,128)] mx-12 cursor-pointer">
            Todo-it
        </div>
        <ul className='md:flex gap-7 cursor-pointer hidden'>
            <li className='hover:font-bold transition-all duration-100'>Home</li>
            <li className='hover:font-bold transition-all duration-100'>Tasks</li>
            <li className='hover:font-bold transition-all duration-100'>About</li>
            <li className='hover:font-bold transition-all duration-100'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar