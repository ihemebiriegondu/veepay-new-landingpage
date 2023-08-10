import React from 'react'
import callIcon from '../../assets/icons/call icon.png'

export default function TopLinks() {
  return (
    <div className='flex items-center justify-between text-xs py-2 px-7 text-primary'>
        <div className='flex items-center'>
            <img src={callIcon} alt="phone icon" />
            <a href="tel:+2379031771297">+237 903 177 1297</a>
        </div>
        <div className='flex items-center'>
            <img src={callIcon} alt="phone icon" />
            <a href="mailto:ihemebiriegondu@gmail.com">ihemebiriegondu@gmail.com</a>
        </div>
    </div>
  )
}
