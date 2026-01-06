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

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50 bg-white shadow-xl">
        <Navbar />
        <CategoryBar />
      </div>
      <main className="w-full max-w-[95%] mx-auto px-4">
        <Hero />
        <PromoCards />
        <TrendingSection />
        <RecommendedSection />
        <BannerGrid />
        <LatestNews />
        <ProcessSteps />
        <DeliveryBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
