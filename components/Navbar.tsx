'use client'
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const liStyle = "hover:underline hover:underline-offset-4 hover:decoration-[#EB5E28] cursor-pointer duration-200";
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 md:relative p-4 sm:px-8 md:p-0 bg-black/95 md:bg-none flex justify-between items-center text-xl text-[#ABA49C] mb-8 ">
      <h1 className="text-sm sm:text-base md:text-xl">FullStack Developer & Web Master</h1>
      
      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-5'>
        <li className={liStyle}><Link href="/#home">Home</Link></li>
        <li className={liStyle}><Link href="/#projects">Projects</Link></li>
        <li className={liStyle}><Link href="/#about">About</Link></li>
        <li className={liStyle}><Link href="/#contact">Contact</Link></li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-50"
        aria-label="Menu"
      >
        <span className={`w-6 h-0.5 bg-[#ABA49C] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#ABA49C] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#ABA49C] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className='flex flex-col gap-8 items-center justify-center h-full text-2xl'>
          <li className={liStyle} onClick={() => setIsOpen(false)}>
            <Link href="/#home">Home</Link>
          </li>
          <li className={liStyle} onClick={() => setIsOpen(false)}>
            <Link href="/#projects">Projects</Link>
          </li>
          <li className={liStyle} onClick={() => setIsOpen(false)}>
            <Link href="/#about">About</Link>
          </li>
          <li className={liStyle} onClick={() => setIsOpen(false)}>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar