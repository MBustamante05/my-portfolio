"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import styles from "@/components/textures.module.css";
import Profile from "@/components/Profile";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Contact from "@/components/Contact";
import { ArrowUpRight, Github } from "lucide-react";

// Datos de ejemplo - reemplaza con tus datos reales o fetch desde una API
const projectsData = {
  "ecommerce-platform": {
    title: "E-commerce Platform",
    description: "Una plataforma de comercio electrónico completa con carrito de compras, gestión de inventario y procesamiento de pagos. Diseñada para ofrecer una experiencia de usuario fluida y moderna.",
    longDescription: `Este proyecto nació de la necesidad de crear una solución escalable para pequeñas y medianas empresas que buscan digitalizar sus ventas. La plataforma incluye un panel de administración completo, integración con múltiples pasarelas de pago, y un sistema de notificaciones en tiempo real.
    
    La arquitectura del proyecto está diseñada para soportar alto tráfico y permite una fácil integración con sistemas de terceros a través de APIs RESTful.`,
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Stripe", icon: "💳" },
    ],
    challenges: [
      {
        title: "Optimización de rendimiento",
        description: "Implementar carga lazy de imágenes y paginación infinita para manejar catálogos con miles de productos sin afectar el rendimiento."
      },
      {
        title: "Seguridad en pagos",
        description: "Integrar Stripe de manera segura cumpliendo con PCI DSS, implementando tokenización y validación en el servidor."
      },
      {
        title: "Gestión de estado compleja",
        description: "Coordinar el estado del carrito, inventario en tiempo real y sesiones de usuario a través de múltiples componentes."
      }
    ],
    images: [
      "/mock1.jpg",
      "/mock2.jpg",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project"
  }
  // Agrega más proyectos aquí
};

function ProjectDetailPage() {
  const [showContent, setShowContent] = useState(false);
  const params = useParams();
  const projectId = params?.id as string;
  
  // Obtener datos del proyecto
  const project = projectsData[projectId as keyof typeof projectsData];

  // Si no existe el proyecto, mostrar mensaje
  if (!project) {
    return (
      <div className={`c-inverse ${styles.blackTexture} min-h-screen flex items-center justify-center`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
          <Link href="/" className="text-blue-400 hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 1500, borderRadius: "150rem 150rem 0 0" }}
      animate={{ opacity: 1, y: 0, borderRadius: "0px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      onAnimationComplete={() => setShowContent(true)}
      className={`c-inverse ${styles.blackTexture} px-4 sm:px-8 md:px-12 lg:px-24 py-8 min-h-screen`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
      </motion.div>

      {/* Desktop: Two columns, Mobile: Single column */}
      <div className="max-w-8xl mx-auto lg:flex lg:gap-8">
        {/* Profile - Sticky on desktop, at bottom on mobile */}
        <aside className="hidden lg:block lg:w-[350px] lg:flex-shrink-0">
          <Profile />
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 mt-10 md:mt-0 c-muted">
          <AnimatePresence>
            {showContent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Back button */}
                <div className="mb-8">
                  <Link 
                    href="/#projects" 
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Volver a proyectos
                  </Link>
                </div>

                {/* Project header */}
                <div className="mb-12">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 c-inverse">{project.title}</h1>
                  <p className="text-xl">{project.description}</p>
                  
                  {/* Links */}
                  <div className="flex gap-4 mt-6 items-center">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white px-6 py-3.5 rounded-4xl text-lg font-semibold border border-[#bfbab0] hover:border-white transition-colors"
                      >
                        <Github className="w-5 h-5 inline-block mr-2" />
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-[#EB5E28] text-white px-6 py-3.5 rounded-4xl text-lg font-semibold hover:bg-[#d94e20] cursor-pointer duration-300 transition-all "
                      >
                        Live
                        <ArrowUpRight className="w-5" />
                      </a>
                    )}
                  </div>
                </div>
                 {/* Technologies section */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 c-inverse">Tecnologías utilizadas</h2>
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-6 py-1 bg-neutral-900 border border-[#BFBAB0]/20 text-xs hover:border-[#EB5E28] hover:text-[#EB5E28] transition-colors cursor-default duration-300 ease-in-out rounded-full flex items-center justify-center text-center gap-2"
                      >
                        <div className="text-xl mb-2">{tech.icon}</div>
                        <div className="font-medium text-lg">{tech.name}</div>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* Images gallery (opcional) */}
                {project.images && project.images.length > 0 && (
                  <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 c-inverse">Galería</h2>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.images.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="rounded-lg overflow-hidden border border-[#bfbab0]/20 hover:border-white transition-colors duration-300 cursor-pointer"
                        >
                          <img 
                            src={image} 
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Description section */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-4 c-inverse">Descripción del proyecto</h2>
                  <div className="whitespace-pre-line leading-relaxed text-xl">
                    {project.longDescription}
                  </div>
                </section>


                {/* Challenges section */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 c-inverse">Retos y soluciones</h2>
                  <div className="space-y-6">
                    {project.challenges.map((challenge, index) => (
                      <motion.div
                        key={challenge.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className="bg-[#1A1A1A] border border-[#BFBAB0]/20 rounded-lg p-6"
                      >
                        <h3 className="text-xl font-semibold mb-3 text-[#EB5E28]">
                          {challenge.title}
                        </h3>
                        <p className="leading-relaxed text-lg c-inverse">
                          {challenge.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </section>

                <Contact />

                {/* Profile shown here on mobile (before footer) */}
                <div className="lg:hidden mt-16 justify-center flex">
                  <Profile />
                </div>
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </motion.div>
  );
}

export default ProjectDetailPage;