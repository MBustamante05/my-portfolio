import Landing from "@/components/Landing";
import styles from "../components/textures.module.css";
import Projects from "@/components/Projects";
import Profile from "@/components/Profile";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={`c-inverse ${styles.blackTexture} px-24 py-8 min-h-screen`}>
      <Navbar />
      {/* Layout de dos columnas */}
      <div className="max-w-8xl mx-auto flex gap-8">
        {/* Columna izquierda - Profile (Sticky) */}
        <aside className="w-[350px] flex-shrink-0">
          <Profile />
        </aside>

        {/* Columna derecha - Contenido que hace scroll */}
        <main className="flex-1 min-w-0">
          <section id="home">
            <Landing />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
}
