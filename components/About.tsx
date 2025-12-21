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
    <div className="mt-30">
      <h1 className="text-[clamp(2rem,7vw,10rem)] font-bold mb-4 leading-none tracking-tight uppercase text-center c-inverse">Skills</h1>
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <h3 className="text-2xl font-semibold c-inverse">Languages & Tools</h3>
          <ul className="mt-4 space-y-2 text-lg">
            {langTools.map((tool, index) => (
              <li key={index} className="text-[#ABA49C] hover:c-accent ">{tool}</li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-2xl font-semibold c-inverse">Frameworks & Libraries</h3>
          <ul className="mt-4 space-y-2 text-lg">
            {frameworksLibs.map((framework, index) => (
              <li key={index} className="text-[#ABA49C] hover:c-accent ">{framework}</li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-2xl font-semibold c-inverse">Other Skills</h3>
          <ul className="mt-4 space-y-2 text-lg">
            {otherSkills.map((skill, index) => (
              <li key={index} className="text-[#ABA49C] hover:c-accent ">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-24 gap-10 items-start">
        <div className="col-span-1 tracking-tight leading-none uppercase">
          <h1 className="c-inverse text-8xl font-bold">Developer/</h1>
          <h1 className="c-inverse text-8xl font-bold">Designer</h1>
          <ArrowUpRight className="w-24 h-24 c-accent"/>
        </div>
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-4 c-muted">(About Me)</h2>
          <p className="text-lg text-[#ABA49C] leading-relaxed">
            I am a passionate FullStack Developer & Web Master with a knack for creating dynamic and responsive web applications. With expertise in both front-end and back-end technologies, I strive to deliver seamless user experiences and robust functionality. My goal is to bridge the gap between design and development, ensuring that every project I undertake is not only visually appealing but also highly efficient and scalable.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About