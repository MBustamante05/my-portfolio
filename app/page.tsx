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
    <div className={`c-inverse ${styles.blackTexture} px-4 sm:px-8 md:px-12 lg:px-24 py-8 min-h-screen`}>
      <Navbar />
      
      {/* Desktop: Two columns, Mobile: Single column */}
      <div className="max-w-8xl mx-auto lg:flex lg:gap-8">
        {/* Profile - Sticky on desktop, at bottom on mobile */}
        <aside className="hidden lg:block lg:w-[350px] lg:flex-shrink-0">
          <Profile />
        </aside>

        {/* Main content */}
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
          
          {/* Profile shown here on mobile (before footer) */}
          <div className="lg:hidden mt-16 justify-center flex">
            <Profile />
          </div>
          
          <Footer />
        </main>
      </div>
    </div>
  );
}
