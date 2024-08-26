import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import ServicesPage from "@/components/ServicesPage";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}
