import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cta from "@/components/CTA"
import Partners from "@/components/Partners";
import Logos from "@/components/Logos";
import FloatingButtons from "@/components/StickyButtons"

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home" className="pt-20">
        <Hero />
      </section>
      <section id="services" className="pt-20">
        <Services />
      </section>
      <section id="about" className="pt-20">
        <About />
      </section>
      <Stats />
      
      <Clients />
      <Cta/>
      <Partners/>
      <Logos/>
      <section id="contact" className="pt-20">
        <Contact />
      </section>
      <Footer/>
      <FloatingButtons/>
      
    </>
  );
}


