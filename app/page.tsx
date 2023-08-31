import HeroSection from './components/HeroSection';
import BrandingSection from './components/BrandingSection';
import WeTransformSection from './components/WeTransformSection';
import MeetTheFounderSection from './components/MeetTheFounderSection';
import WhyWorkWithUsSection from './components/WorkWithUsSection';
import BenefitsSection from './components/BenefitsSection';
import WhatWeOfferSection from './components/WhatWeOfferSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrandingSection />
      <WeTransformSection />
      <MeetTheFounderSection />
      <WhyWorkWithUsSection />
      <BenefitsSection />
      <WhatWeOfferSection />
    </main>
  );
}
