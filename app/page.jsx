import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Services from "@/components/Services";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
