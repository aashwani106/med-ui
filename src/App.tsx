import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
// import CategoryBar from './components/CategoryBar';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import AllProducts from './components/AllProducts';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import ReturnRefundPolicy from './components/ReturnRefundPolicy';

// Simple ScrollToTop component
function ScrollToTopComp() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTopComp />
      <div className="min-h-screen">
        <div className="sticky top-0 z-50 bg-white shadow-xl">
          <Navbar />
          {/* <CategoryBar /> */}
        </div>
        <main className="w-full max-w-[95%] mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/return-refund-policy" element={<ReturnRefundPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
