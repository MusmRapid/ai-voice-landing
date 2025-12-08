import AdvantagesSection from "./components/AdvantagesSection";
import FeaturesSection from "./components/FeaturesSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import RegionsSection from "./components/RegionsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <FeaturesSection />
      <RegionsSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer/>
    </>
  );
}

export default App;
