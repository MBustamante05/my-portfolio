"use client";
import {  ArrowUpRight } from "lucide-react";
import React, { useState } from "react";

type Props = {
  className?: string;
};

function ContactBtn({ className }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center gap-1 bg-[#EB5E28] text-white px-6 py-3.5 rounded-4xl text-lg font-semibold hover:bg-[#d94e20] cursor-pointer duration-300 transition-all ${className} uppercase`}
    >
      <span>contact</span>
      <ArrowUpRight
        className={`w-5 ${
          isHovered ? "translate-x-1 -translate-y-1" : ""
        } duration-200 `}
      />
    </div>
  );
}

export default ContactBtn;
