"use client";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="mt-16 md:mt-30 justify-center flex flex-col items-center gap-8 sm:px-4">
      <div className="text-center">
        <h1 className="text-[clamp(2rem,7vw,10rem)] font-bold leading-none tracking-tight uppercase text-end c-inverse">
          Let&apos;s Talk
        </h1>
        <h2 className="text-[clamp(1.5rem,6vw,8rem)] font-bold c-accent leading-none tracking-tight uppercase mb-4 ">
          Contact!
        </h2>
      </div>
      <form
        className="px-6 md:px-7 py-8 bg-neutral-900 rounded-3xl w-full w-full sm:max-w-[500px] c-inverse flex flex-col gap-6"
        action=""
      >
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold outline-none">Name</label>
          <input
            className="border border-[#BFBAB0] px-4 py-2 rounded-3xl"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}

          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold outline-none">Email</label>
          <input
            className="border border-[#BFBAB0] px-4 py-2 rounded-3xl"
            type="email"
            placeholder="Your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold outline-none">Message</label>
          <textarea
            className="border border-[#BFBAB0] px-4 py-2 rounded-xl"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`flex items-center gap-1 bg-[#EB5E28] text-white px-6 py-3.5 rounded-4xl text-lg font-semibold hover:bg-[#d94e20] cursor-pointer duration-300 transition-all uppercase self-center mt-4`}
        >
          <span>contact</span>
          <ArrowRight
            className={`w-5 ${isHovered ? "translate-x-1" : ""} duration-200 `}
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;
