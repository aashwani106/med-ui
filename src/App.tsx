import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import Hero from './components/Hero';
import PromoCards from './components/PromoCards';

import TrendingSection from './components/TrendingSection';

import RecommendedSection from './components/RecommendedSection';

import BannerGrid from './components/BannerGrid';

import LatestNews from './components/LatestNews';

import ProcessSteps from './components/ProcessSteps';

import DeliveryBanner from './components/DeliveryBanner';

import Footer from './components/Footer';

import FadeIn from './components/FadeIn';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50 bg-white shadow-xl">
        <Navbar />
        <CategoryBar />
      </div>
      <main className="w-full max-w-[95%] mx-auto px-4">
        <FadeIn delay={0.1}>
          <Hero />
        </FadeIn>

        <FadeIn delay={0.2}>
          <PromoCards />
        </FadeIn>

        <FadeIn delay={0.2}>
          <TrendingSection />
        </FadeIn>

        <FadeIn delay={0.2}>
          <RecommendedSection />
        </FadeIn>

        <FadeIn delay={0.2}>
          <BannerGrid />
        </FadeIn>

        <FadeIn delay={0.2}>
          <LatestNews />
        </FadeIn>

        <FadeIn delay={0.2}>
          <ProcessSteps />
        </FadeIn>

        <FadeIn delay={0.2}>
          <DeliveryBanner />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}

export default App;
