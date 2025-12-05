import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

// Placeholder sections
const FeaturesSection: React.FC = () => (
  <section id="features" className="w-full py-32 text-center text-white bg-heroRight/20">
    <h2 className="mb-8 text-4xl font-bold">Features</h2>
    <p className="max-w-3xl mx-auto text-lg">
      Multi-industry AI voice agent, supports 17 languages, avatar selection, and seamless Twilio integration.
    </p>
  </section>
);

const HowItWorksSection: React.FC = () => (
  <section id="howitworks" className="w-full py-32 text-center text-white bg-heroLeft/10">
    <h2 className="mb-8 text-4xl font-bold">How It Works</h2>
    <p className="max-w-3xl mx-auto text-lg">
      Choose a prompt → select avatar & language → interact with AI voice agent → achieve your goal.
    </p>
  </section>
);

const DemoSection: React.FC = () => (
  <section id="demo" className="w-full py-32 text-center text-white bg-heroRight/20">
    <h2 className="mb-8 text-4xl font-bold">Demo</h2>
    <p className="max-w-3xl mx-auto text-lg">
      See our AI voice agent in action. Try it out and experience realistic conversations.
    </p>
  </section>
);

const PricingSection: React.FC = () => (
  <section id="pricing" className="w-full py-32 text-center text-white bg-heroLeft/10">
    <h2 className="mb-8 text-4xl font-bold">Pricing</h2>
    <p className="max-w-3xl mx-auto text-lg">
      Flexible plans for businesses of any size, from startups to enterprises.
    </p>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-lato bg-gradient-to-r from-heroLeft to-heroRight">
      <Header />
      
      <div id="hero">
        <HeroSection />
      </div>

      <FeaturesSection />
      <HowItWorksSection />
      <DemoSection />
      <PricingSection />

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
