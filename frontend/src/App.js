import "@/App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/context/AuthContext";
import AuthCallback from "@/components/AuthCallback";
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
import { Analytics } from "@vercel/analytics/react";

function Home() {
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

function AppRouter() {
  const location = useLocation();
  // Process OAuth session_id synchronously during render (prevents race conditions)
  if (location.hash?.includes("session_id=")) {
    return <AuthCallback />;
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <Analytics />
    </AuthProvider>
  );
}

export default App;
