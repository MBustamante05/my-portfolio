import { ChevronRight, Globe, Smartphone } from "lucide-react";

interface ProjectCardProps {
  number: string;
  category: string;
  title: string;
  description: string;
  gradient: string;
  year: string;
  side: "left" | "right";
  tech: string[];
  image?: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function ProjectCard({
  number,
  category,
  title,
  description,
  gradient,
  year,
  side,
  tech,
  image,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: ProjectCardProps) {
  return (
    <div
      className="relative mb-32"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Timeline Dot in Center */}
      <div className="absolute left-1/2 top-8 w-4 h-4 transform -translate-x-1/2 z-20 rounded-full">
        <div className={`w-4 h-4 bg-gradient-to-r ${gradient} rounded-full`}></div>
        <div
          className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full animate-ping opacity-75`}
        ></div>
      </div>

      {/* Horizontal Dotted Lines */}
      {side === "left" ? (
        <div
          className="absolute left-0 right-1/2 top-10 h-px transform translate-x-8"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to left,  #BFBAB0 0, #FFFDF1  5px, transparent 5px, transparent 10px)",
          }}
        ></div>
      ) : (
        <div
          className="absolute left-1/2 right-0 top-10 h-px transform -translate-x-8"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to left,  #BFBAB0 0, #FFFDF1  5px, transparent 5px, transparent 10px)",
          }}
        ></div>
      )}

      {/* Content - Alternating Sides */}
      {side === "left" ? (
        // Left Side Layout
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`text-right pr-8 transform transition-all duration-500 ${
              isHovered ? "-translate-x-4" : ""
            }`}
          >
            <div className="text-sm mb-2 flex items-center justify-end gap-2 c-muted">
              <span>{category}</span>
              <span className="w-8 h-px bg-gray-700"></span>
              <span>{number}</span>
            </div>

            <h2 className="text-5xl font-bold mb-4 ">{title}</h2>

            <div className="flex items-center gap-2 font-semibold cursor-pointer group justify-end c-accent">
              <span>View Project</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>

            <div className="mt-8 text-sm c-muted">Q4 {year}</div>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2 justify-end">
              {tech.map((techItem, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-primary border -full text-xs c-inverse hover:border-[#EB5E28] hover:text-[#EB5E28] transition-colors cursor-default duration-300 ease-in-out rounded-full"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>

          {/* Card */}
          <div
            className={`pl-8 transform transition-all duration-500 ${
              isHovered ? "scale-105 -translate-y-2" : ""
            }`}
          >
            <div
              className={`relative rounded-2xl shadow-2xl overflow-hidden mt-12`}
            >
              <div className="bg-[#EB5E28] rounded-2xl min-h-[400px] relative overflow-hidden">
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                <div className=" flex items-end justify-center absolute p-4 left-0 right-0 bottom-0 text-center cursor-pointer">
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full z-20 object-cover hover:-rotate-6 hover:scale-105 transition-transform duration-500 p-2 border border-dashed border-black rounded-lg"
                    />
                  ) : (
                    <>
                      {category === "MOBILE APP" ? (
                        <Smartphone className="w-24 h-24 mx-auto c-inverse" />
                      ) : (
                        <Globe className="w-24 h-24 mx-auto c-inverse" />
                      )}
                      <div className="mt-8 text-sm c-inverse">
                        {title} Interface
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Right Side Layout
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Card */}
          <div
            className={`pr-8 transform transition-all duration-500 ${
              isHovered ? "scale-105 -translate-y-2" : ""
            }`}
          >
            <div className={`rounded-2xl shadow-2xl overflow-hidden  mt-12`}>
              <div className="bg-neutral-900 rounded-2xl p-6 min-h-[400px] relative overflow-hidden">
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                <div className=" flex items-end justify-center absolute p-4 left-0 right-0 bottom-0 text-center cursor-pointer">
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full z-20 object-cover hover:rotate-6 hover:scale-105 transition-transform duration-500 p-2 border border-dashed border-[#EB5E28] rounded-2xl"
                    />
                  ) : (
                    <>
                      {category === "MOBILE APP" ? (
                        <Smartphone className="w-24 h-24 mx-auto c-inverse" />
                      ) : (
                        <Globe className="w-24 h-24 mx-auto c-inverse" />
                      )}
                      <div className="mt-8 text-sm c-inverse">
                        {title} Interface
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`pl-8 transform transition-all duration-500 ${
              isHovered ? "translate-x-4" : ""
            }`}
          >
            <div className=" text-sm mb-2 flex items-center gap-2">
              <span>{number}</span>
              <span className="w-8 h-px bg-gray-700"></span>
              <span>{category}</span>
            </div>

            <h2 className="text-5xl font-bold mb-4 leading-tight">
              {title}
            </h2>

            <div className="flex items-center gap-2 c-accent font-semibold cursor-pointer group">
              <span>View Project</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>

            <div className="mt-8 text-sm c-muted">Q4 {year}</div>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {tech.map((techItem, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-primary border -full text-xs c-inverse hover:border-[#EB5E28] hover:text-[#EB5E28] transition-colors cursor-default duration-300 ease-in-out rounded-full"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
