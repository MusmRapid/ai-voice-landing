import AdvantagesSection from "../components/AdvantagesSection";
import FeaturesSection from "../components/FeaturesSection";
import FinalCTA from "../components/FinalCTA";
import HeroSection from "../components/HeroSection";
import RegionsSection from "../components/RegionsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import PartnerSection from "../components/PartnerSection";
// import VoiceRecordings from "../components/Voice/VoiceRecording";

function Home() {
  return (
    <>
      <HeroSection />
      {/* <VoiceRecordings /> */}
      <WhyChooseUs />
      <FeaturesSection />
      <RegionsSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <PartnerSection/>
      <FinalCTA />
    </>
  );
}

export default Home;
