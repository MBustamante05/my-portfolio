import { ArrowRight } from "lucide-react";
import React from "react";

type Props = {
  className?: string;
};

function ContactBtn({ className }: Props) {
  return (
    <div
      className={`flex items-center gap-1 bg-[#EB5E28] text-white px-8 py-3 rounded-3xl font-semibold hover:bg-[#d94e20] cursor-pointer duration-300 transition-all ${className} uppercase`}
    >
      <span>connect</span>
      <ArrowRight className="w-5 hover:translate-x-1 duration-200 -rotate-40" />
    </div>
  );
}

export default ContactBtn;
