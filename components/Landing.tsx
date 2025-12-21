import { ArrowRight, Contact } from "lucide-react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import ContactBtn from "./ContactBtn";

function Landing() {
  const expStyle =
    "flex flex-col gap-2px-6 py-4 -lg mb-4 hover:scale-105 duration-300 transition-all ";
  return (
    <section className="c-muted pt-10 mb-20">
      <div className="mb-10">
        <h1 className="text-[clamp(3rem,9vw,12rem)] font-bold mb-4 leading-none tracking-tight uppercase c-inverse">
          FullStack{" "}
        </h1>
        <h2 className="text-[clamp(2rem,8vw,10rem)] c-accent font-semibold mb-6 text-center leading-none tracking-tight uppercase ">
          Developer
        </h2>
      </div>
      <p className="text-xl mb-10 max-w-3xl">
        FullStack Developer with expertise in building dynamic and
        user-centric web applications. Proficient in both front-end and back-end
        technologies, I specialize in creating seamless digital experiences
        that drive engagement and deliver results.
      </p>
      <div className="flex gap-10 mt-10 flex-wrap">
        <div className={expStyle}>
          <h1 className="font-bold text-8xl c-inverse">+6</h1>
          <span className="text-xl font-medium">Months of Experience</span>
        </div>
        <div className={expStyle}>
          <h1 className="font-bold text-8xl c-inverse">+5</h1>
          <span className="text-xl font-medium">Technologies Learned</span>
        </div>
        <div className={expStyle}>
          <h1 className="font-bold text-8xl c-inverse">+10</h1>
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
          <h1 className="font-bold text-9xl c-inverse">day&apos;25</h1>
        </div>
      </div>
    </section>
  );
}

export default Landing;
