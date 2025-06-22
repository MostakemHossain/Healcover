import "./App.css";
import AboutSection from "./components/About-Section";
import ContactSection from "./components/Contact-section";
import FAQSection from "./components/Faq";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero-Section";
import Navbar from "./components/Navbar";
import PricingTable from "./components/Pricing-table";
import Service from "./components/Service";
import ServiceSection from "./components/Service-Section";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content goes here */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <Service/>
        <ServiceSection />
        <FAQSection/>
        <PricingTable />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
