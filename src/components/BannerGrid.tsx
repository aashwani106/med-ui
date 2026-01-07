import { ArrowRight } from 'lucide-react';
import banner3 from '../assets/hero/banner-3.png';
import { bannerGridItems } from '../data/mockData';

export default function BannerGrid() {
    return (
        <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bannerGridItems.map((item) => (
                    <div key={item} className="relative h-[220px] rounded-[24px] overflow-hidden group cursor-pointer">
                        <img
                            src={banner3}
                            alt="Medical Banner"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Overlay gradient for better button visibility if needed, similar to promo cards */}
                        {/* <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div> */}

                        <div className="absolute bottom-8 left-8 z-10">
                            <button className="bg-[#2D2D2D] hover:bg-black text-white text-[10px] font-bold py-3 px-6 rounded-full flex items-center gap-2 transition-colors uppercase tracking-wider">
                                SHOP NOW <ArrowRight className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
