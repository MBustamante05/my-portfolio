import { ArrowUpRight } from "lucide-react"

function About() {
  const langTools = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Framer Motion",
  ];

  const frameworksLibs = [
    "Express.js",
    "Redux",
    "Jest",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
  ];

  const otherSkills = [
    "Version Control (Git)",
    "Agile Methodologies",
    "UI/UX Design Principles",
    "Testing & Debugging",
    "Deployment & CI/CD",
  ];
  return (
    <div className="mt-16 md:mt-30">
      <h1 className="text-5xl md:text-8xl  font-bold mb-8 md:mb-4 leading-none tracking-tight uppercase text-center">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold c-inverse">Languages & Tools</h3>
          <ul className="mt-4 space-y-2 text-base md:text-lg">
            {langTools.map((tool, index) => (
              <li key={index} className="text-[#ABA49C] hover:c-accent transition-colors ">{tool}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold c-inverse">Frameworks & Libraries</h3>
          <ul className="mt-4 space-y-2 text-base md:text-lg">
            {frameworksLibs.map((framework, index) => (
              <li key={index} className="text-[#ABA49C] hover:c-accent transition-colors ">{framework}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold c-inverse">Other Skills</h3>
          <ul className="mt-4 space-y-2 text-base md:text-lg">
            {otherSkills.map((skill, index) => (
              <li key={index} className="text-[#ABA49C] hover:c-accent transition-colors ">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 2xl:grid-cols-2 mt-16 md:mt-24 gap-8 2xl:gap-64 items-start">
        <div className="tracking-tight leading-none uppercase text-center md:text-left">
          <h1 className="c-inverse text-5xl md:text-8xl font-bold">Developer/</h1>
          <h1 className="c-inverse text-5xl md:text-8xl font-bold">Designer</h1>
          <ArrowUpRight className="w-16 h-16 md:w-24 md:h-24 c-accent mx-auto md:mx-0"/>
        </div>
        <div>
          <h2 className="text-base md:text-lg font-semibold mb-4 c-muted">(About Me)</h2>
          <p className="text-base md:text-lg text-[#ABA49C] leading-relaxed">
            I am a passionate FullStack Developer & Web Master with a knack for creating dynamic and responsive web applications. With expertise in both front-end and back-end technologies, I strive to deliver seamless user experiences and robust functionality. My goal is to bridge the gap between design and development, ensuring that every project I undertake is not only visually appealing but also highly efficient and scalable.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About