import React from 'react'
import logo from '../../../assets/icons/Veepay Logo.png'
import { Link } from 'react-router-dom'
import MyButtons from '../myButtons'

export default function Nav() {
  return (
    <nav className='bg-white py-3 px-9 flex justify-between items-center'>
        <div>
            <img src={logo} alt="veepay logo" />
        </div>
        <div className='flex items-center gap-6 text-xs font-medium italic text-primary'>
            <Link to={'/'} className='underline'>Quick Buy</Link>
            <MyButtons link={'/'} text={'Login'} />
            <Link to={'/'} className='py-3.5 px-7 border border-primary rounded hover:bg-primary hover:text-white transition ease-in-out duration-500'>Sign Up</Link>
        </div>
    </nav>
  )
}
