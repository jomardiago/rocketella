import HeroSection from './components/HeroSection';
import BrandingSection from './components/BrandingSection';
import WeTransformSection from './components/WeTransformSection';
import MeetTheFounder from './components/MeetTheFounderSection';
import WhyWorkWithUs from './components/WorkWithUsSection';
import BenefitsSection from './components/BenefitsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrandingSection />
      <WeTransformSection />
      <MeetTheFounder />
      <WhyWorkWithUs />
      <BenefitsSection />
    </main>
  );
}
