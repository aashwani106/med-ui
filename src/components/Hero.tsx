import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { heroSlides } from '../data/mockData';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mt-6 md:mt-10 mb-12">
      <div className="rounded-[30px] overflow-hidden min-h-[600px] flex relative transition-all duration-500">

        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full flex items-center px-6 md:px-16 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            {/* Full Background Image */}
            <img
              src={slide.image}
              alt="Banner Background"
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />

            {/* Text Content */}
            <div className={`w-full md:w-1/2 flex flex-col items-start z-20 ${slide.theme === 'light' ? 'text-black' : 'text-white'}`}>
              {slide.isOffer && (
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
                  {slide.preTitle}
                </span>
              )}

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                {slide.title}
              </h1>

              <p className={`text-lg md:text-xl mb-10 leading-relaxed max-w-xl ${slide.theme === 'light' ? 'text-gray-800' : 'text-white/90'}`}>
                {slide.description}
              </p>

              <button className={`${slide.theme === 'light'
                ? 'bg-[#0e7664] text-white hover:bg-[#0b5c4e]'
                : 'bg-white text-[#0e7664] hover:bg-gray-100'
                } transition-colors px-8 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 tracking-wide group cursor-pointer`}>
                SHOP NOW
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-8 md:left-20 flex gap-2 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide
                ? (heroSlides[currentSlide].theme === 'light' ? "bg-[#0e7664]" : "bg-white")
                : (heroSlides[currentSlide].theme === 'light' ? "bg-[#0e7664]/40 hover:bg-[#0e7664]/60" : "bg-white/40 hover:bg-white/60")
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
