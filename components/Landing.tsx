import { ArrowRight, Contact } from "lucide-react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import ContactBtn from "./ContactBtn";

function Landing() {
  const expStyle =
    "flex flex-col gap-2px-6 py-4 rounded-lg mb-4 hover:scale-105 duration-300 transition-all ";
  return (
    <div className="relative h-screen">
      <Navbar />
      <div className="h-full grid grid-cols-9 mt-10 text-[#403D38]">
        <Profile className="col-span-2" />
        <div className="col-span-7 pl-20">
          <h1 className="text-[clamp(3rem,9vw,12rem)] font-bold mb-4 leading-none tracking-tight uppercase">
            FullStack{" "}
          </h1>
          <h2 className="text-[clamp(2rem,8vw,10rem)] text-[#BFBAB0] font-semibold mb-6 text-center leading-none tracking-tight uppercase ">
            Developer
          </h2>
          <p className="w-5/6 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            illum tempora excepturi exercitationem placeat blanditiis et qui
            maxime ullam. Dolorum atque aperiam error porro excepturi debitis,
            non ratione laboriosam quibusdam.
          </p>
          <div className="flex gap-10 mt-10">
            <div className={expStyle}>
              <h1 className="font-bold text-8xl">+6</h1>
              <span className="text-xl font-medium">Months of Experience</span>
            </div>
            <div className={expStyle}>
              <h1 className="font-bold text-8xl">+5</h1>
              <span className="text-xl font-medium">Technologies Learned</span>
            </div>
            <div className={expStyle}>
              <h1 className="font-bold text-8xl">+10</h1>
              <span className="text-xl font-medium">Projects Completed</span>
            </div>
          </div>
          <div className="flex justify-between items-start mt-2 ">
            <ContactBtn className="w-fit" />
            {/* <button className="flex items-center gap-2 text-[#A29B93] cursor-pointer duration-200 ">
              <span className="duration-200">My work</span>
              <ArrowRight className="w-5 hover:translate-x-1 duration-200 hover:text-[#403D38]" />
            </button> */}
            <div className="flex flex-col gap-3 uppercase text-right leading-none ">
              <span className="text-xl leading-none">Available for work</span>
              <h1 className="font-bold text-9xl">day&apos;25</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
