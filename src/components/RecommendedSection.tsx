import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';
import { recommendedProducts } from '../data/mockData';

export default function RecommendedSection() {
    const navigate = useNavigate();

    return (
        <section className="mb-16 py-12  -mx-4 md:-mx-16 px-4 md:px-16 rounded-[40px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-[#2D2D2D]">Recommended For You</h2>
                <a href="#" className="flex items-center gap-1 text-[10px] font-bold text-gray-500 hover:text-gray-900 uppercase tracking-widest">
                    VIEW ALL <ArrowRight className="w-3 h-3" />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendedProducts.map((product, index) => (
                    <FadeIn
                        key={index}
                        delay={index * 0.1}
                        className="bg-white rounded-[20px] p-4 flex gap-4 items-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full cursor-pointer"
                        onClick={() => navigate(`/product/${product.id}`)}
                    >
                        <div className="w-[120px] h-full rounded-xl overflow-hidden flex-shrink-0 relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col justify-center h-full gap-2 w-full">
                            <span className="text-xs text-gray-500 font-bold tracking-wide">{product.category}</span>
                            <h3 className="text-base font-bold text-[#2D2D2D] leading-tight">{product.name}</h3>
                            <p className="text-xs text-gray-400 font-medium">{product.specs}</p>
                            <span className="text-xl font-bold text-[#0EA5E9] mt-1">{product.price}</span>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
