import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Process from "@/components/Process";
import Logos from "@/components/Logos";
import Evidence from "@/components/Evidence";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main style={{ overflowX: "hidden", maxWidth: "100vw" }}>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Process />
      <Logos />
      <Evidence />
      <Contact />
      <Footer />
    </main>
  );
}
