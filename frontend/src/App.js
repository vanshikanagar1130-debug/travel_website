import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Fleet from "@/components/Fleet";
import WhyUs from "@/components/WhyUs";
import EnquiryForm from "@/components/EnquiryForm";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

function App() {
  return (
    <div className="min-h-screen bg-cream font-sans">
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Fleet />
        <WhyUs />
        <EnquiryForm />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
