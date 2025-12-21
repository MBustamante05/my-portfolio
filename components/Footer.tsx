import { Code } from 'lucide-react'

function Footer() {
  return (
    <div className='mt-15'>
      <footer className="text-center text-neutral-500 text-sm ">
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-px bg-neutral-800"></div>
          <Code className="w-5 h-5" />
          <div className="w-16 h-px bg-neutral-800"></div>
        </div>
        &copy; {new Date().getFullYear()} Thiago Bustamante. All rights reserved.
      </footer>
    </div>
  )
}

export default Footer