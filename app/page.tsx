import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Process from "@/components/Process";
import Logos from "@/components/Logos";
import Evidence from "@/components/Evidence";
import Contact from "@/components/Contact";
import Participaciones from "@/components/Participaciones";
import Alliance from "@/components/Alliance";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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
      <Participaciones />
      <Alliance />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
