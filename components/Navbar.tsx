import React from 'react'

function Navbar() {
  const ulStyle = "hover:underline hover:underline-offset-4 hover:text-[#403D38] cursor-pointer duration-200"
  return (
    <header className="flex justify-between items-center text-xl text-[#ABA49C]">
      <h1>FullStack Developer & Web Master</h1>
        <ul className='flex gap-5'>
          <li className={ulStyle}>Home</li>
          <li className={ulStyle}>About</li>
          <li className={ulStyle}>Projects</li>
          <li className={ulStyle}>Contact</li>
        </ul>
    </header>
  )
}

export default Navbar