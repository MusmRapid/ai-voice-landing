// import { useAtom } from "jotai";
import { useAtom } from "jotai";
import AdvantagesSection from "../components/AdvantagesSection";
import FeaturesSection from "../components/FeaturesSection";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import RegionsSection from "../components/RegionsSection";
import ScrollToTop from "../components/ScrollToTop";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import { themeAtom } from "../atom/themeAtom";
// import VoiceRecordings from "../components/Voice/VoiceRecording";

function App() {
  const [theme] = useAtom(themeAtom);

  return (
    <div className={`home-page ${theme === 'dark' ? 'dark-mode' : 'light-mode'} transition-colors duration-500`}>
      <Header />
      <HeroSection />
      {/* <VoiceRecordings /> */}
      <WhyChooseUs />
      <FeaturesSection />
      <RegionsSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
}


export default App;
