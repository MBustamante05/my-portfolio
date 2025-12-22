import ContactBtn from "./ContactBtn";
import { motion } from "framer-motion";

function Landing() {
  const expStyle =
    "flex flex-col gap-2 px-6 py-4 mb-4 hover:scale-105 duration-300 transition-all ";
  return (
    <section className="c-muted pt-2 mb-20">
      <div className="mb-10">
        <motion.h1
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="hidden lg:block text-[clamp(4rem,9vw,12rem)] font-bold leading-none tracking-tight uppercase c-inverse"
        >
          FullStack{" "}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="block lg:hidden text-[clamp(4rem,9vw,12rem)] font-bold leading-none tracking-tight uppercase c-inverse"
        >
          Thiago{" "}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="hidden lg:block text-[clamp(3rem,8vw,10rem)] c-accent font-semibold mb-6 text-center leading-none tracking-tight uppercase "
        >
          Developer
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="block lg:hidden text-[clamp(3rem,8vw,10rem)] c-accent font-semibold mb-6 text-center leading-none tracking-tight uppercase "
        >
          Bustamante
        </motion.h2>
      </div>
      <motion.p 
        initial={{ opacity: 0, x: 1500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, type: "tween"}}
      className="text-lg md:text-xl mb-10 max-w-3xl">
        FullStack Developer with expertise in building dynamic and user-centric
        web applications. Proficient in both front-end and back-end
        technologies, I specialize in creating seamless digital experiences that
        drive engagement and deliver results.
      </motion.p>
      <div className="flex gap-6 md:gap-10 mt-10 flex-wrap justify-start">
        <motion.div 
        initial={{ opacity: 0, y: 1500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, type: "tween"}}
        className={expStyle}>
          <h1 className="font-bold text-5xl md:text-8xl c-inverse">+6</h1>
          <span className="text-xl font-medium">Months of Experience</span>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 1500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, type: "tween"}}
        className={expStyle}>
          <h1 className="font-bold text-5xl md:text-8xl c-inverse">+5</h1>
          <span className="text-xl font-medium">Technologies Learned</span>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 1500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, type: "tween"}}
        className={expStyle}>
          <h1 className="font-bold text-5xl md:text-8xl c-inverse">+10</h1>
          <span className="text-xl font-medium">Projects Completed</span>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-8 gap-6">
        <ContactBtn className="w-fit" />
        {/* <button className="flex items-center gap-2 text-[#A29B93] cursor-pointer duration-200 ">
              <span className="duration-200">My work</span>
              <ArrowRight className="w-5 hover:translate-x-1 duration-200 hover:text-[#403D38]" />
            </button> */}
        <div className="flex flex-col gap-3 uppercase text-center md:text-right leading-none">
          <motion.span 
            initial={{ opacity: 0, x: -1500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "tween"}}
          className="text-lg md:text-xl leading-none">
            Available for work
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 3}}
          className="font-bold text-6xl md:text-9xl c-inverse">
            day&apos;25
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

export default Landing;
