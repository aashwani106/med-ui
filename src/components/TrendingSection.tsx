import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { trendingProducts, trendingCategories } from '../data/mockData';
import FadeIn from './FadeIn';

export default function TrendingSection() {
    const navigate = useNavigate();

    return (
        <section className="mb-16">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <h2 className="text-3xl font-bold text-gray-900">Trending this week</h2>

                <div className="flex items-center gap-8 flex-1 justify-end">
                    <div className="flex items-center gap-2   ">
                        {trendingCategories.map((cat, index) => (
                            <button
                                key={index}
                                className={`px-6 py-2 rounded-full cursor-pointer text-sm font-medium transition-colors ${index === 0
                                    ? "bg-[#0ea5e9] text-white"
                                    : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <a href="#" className="flex items-center gap-1 text-xs font-bold text-gray-600 hover:text-gray-900 uppercase tracking-wider whitespace-nowrap">
                        View All <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {trendingProducts.map((product, index) => (
                    <FadeIn
                        key={index}
                        delay={index * 0.1}
                        className="bg-white rounded-[20px] p-4 border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group"
                        onClick={() => navigate(`/product/${product.id}`)}
                    >
                        <div className="relative aspect-[1.4] mb-4 overflow-hidden rounded-xl">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-500 font-medium">{product.usedFor}</span>
                            <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                            <span className="text-lg font-bold text-[#0ea5e9]">{product.price}</span>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
