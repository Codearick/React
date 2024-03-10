import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/next.svg'

const Navbar = () => {
    return (
        <header className="text-white bg-black body-font sticky top-0">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    {/* <Image
                        className='object-contain w-2 h-1'
                        fill={true}
                        src= {Logo}
                        priority
                        alt='NextShop'
                    /> */}
                <span className="ml-3 font-bold text-2xl text-white">Next Shop</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={"/"} className="mr-5 hover:text-gray-200">Home</Link>
                    <Link href={"/smartphones"} className="mr-5 hover:text-gray-200">Smartphones</Link>
                    <Link href={"/laptops"} className="mr-5 hover:text-gray-200">Laptops</Link>
                    <Link href={"/gadgets"} className="mr-5 hover:text-gray-200">Gadgets</Link>
                    <Link href={"/contact"} className="mr-5 hover:text-gray-200">Contact</Link>
                </nav>
                <button className="animate-pulse text-black inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="animate-pulse w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Navbar
