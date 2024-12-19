import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Aboutme from "@/components/Aboutme";
import Skills from "@/components/Skills";
import Porto2 from "@/components/Portofolio2";
import Porto1 from "@/components/Portofolio1";
import Porto from "@/components/Portofolio";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Contacts from "@/components/Contacts";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutme />
      <Skills />
      <Porto />
      <Porto1 />
      <Porto2 />
      <Experience />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
}
