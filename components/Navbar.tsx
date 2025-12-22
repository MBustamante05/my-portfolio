
function Navbar() {
  const liStyle = "hover:underline hover:underline-offset-4 hover:decoration-[#EB5E28] cursor-pointer duration-200"
  return (
    <header className="flex justify-between items-center text-xl text-[#ABA49C]">
      <h1>FullStack Developer & Web Master</h1>
        <ul className='flex gap-5'>
          <li className={liStyle}><a href="#home">Home</a></li>
          <li className={liStyle}><a href="#projects">Projects</a></li>
          <li className={liStyle}><a href="#about">About</a></li>
          <li className={liStyle}><a href="#contact">Contact</a></li>
        </ul>
    </header>
  )
}

export default Navbar