import { useAtom } from "jotai";
import AdvantagesSection from "./components/AdvantagesSection";
import FeaturesSection from "./components/FeaturesSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import RegionsSection from "./components/RegionsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseUs from "./components/WhyChooseUs";
import { themeAtom } from "./atom/themeAtom";

function App() {
  const [theme] = useAtom(themeAtom);

  return (
    <div className={`transition-colors duration-500 ${theme === 'dark' ? 'bg-heroLeft' : 'bg-lightBg'}`}>
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <FeaturesSection />
      <RegionsSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}


export default App;
