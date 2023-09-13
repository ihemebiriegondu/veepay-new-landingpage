import React from 'react'
import logo from '../../../assets/icons/Veepay Logo.png'
import { Link } from 'react-router-dom'
import MyButtons from '../myButtons'

export default function Nav() {
  return (
    <nav className='bg-white py-3 md:ps-9 ps-4 md:pe-20 pe-6 flex justify-between items-center lg:shadow-none shadow-md'>
        <div className='md:w-40 md:h-12 w-24 h-7'>
            <img src={logo} alt="veepay logo" className='w-full h-full object-contain' />
        </div>
        <div className='flex items-center md:gap-6 gap-4 text-xs font-medium italic text-primary'>
            <Link to={'/'} className='underline'>Quick Buy</Link>
            <MyButtons link={'/'} text={'Login'} />
            <Link to={'/'} className='md:py-3.5 py-2 md:px-7 px-6 border border-primary rounded hover:bg-primary hover:text-white transition ease-in-out duration-500'>Sign Up</Link>
        </div>
    </nav>
  )
}
