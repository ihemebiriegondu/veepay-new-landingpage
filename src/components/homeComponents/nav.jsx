import React from 'react'
import logo from '../../assets/icons/Veepay Logo.png'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='bg-white py-3 px-9 flex justify-between items-center'>
        <div>
            <img src={logo} alt="veepay logo" />
        </div>
        <div className='flex items-center gap-6 text-sm font-medium italic text-primary'>
            <Link to={'/'} className='underline'>Quick Buy</Link>
            <Link to={'/'} className='py-3.5 px-7 text-white rounded bg-primary hover:bg-primary/70 transition ease-in-out duration-500'>Login</Link>
            <Link to={'/'} className='py-3.5 px-7 border border-primary rounded hover:bg-primary hover:text-white transition ease-in-out duration-500'>Sign Up</Link>
        </div>
    </nav>
  )
}
