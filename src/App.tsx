import "./App.css";
import ContactSection from "./components/Contact-section";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PricingTable from "./components/Pricing-table";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content goes here */}
      <main className="flex-1">
        <PricingTable />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
