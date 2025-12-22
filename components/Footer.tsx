import { Code } from "lucide-react";

function Footer() {
  return (
    <div className="mt-16 md:mt-20 py-8 text-center">
      <footer className="text-neutral-500 text-sm ">
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-px bg-neutral-800"></div>
          <Code className="w-5 h-5" />
          <div className="w-16 h-px bg-neutral-800"></div>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Thiago Bustamante. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
