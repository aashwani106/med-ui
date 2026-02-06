import { useNavigate } from 'react-router-dom';
import { allProducts } from '../data/mockData';
import FadeIn from './FadeIn';

export default function AllProducts() {
    const navigate = useNavigate();

    return (
        <div className="py-12">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">All Products</h2>
                <p className="text-gray-500 mt-2">Browse our full collection of medicines and health products</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {allProducts.map((product, index) => (
                    <FadeIn
                        key={product.id}
                        delay={Math.min(index * 0.05, 1)}
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
                            <span className="text-xs text-gray-500 font-medium">{product.uses && product.uses[0] ? product.uses[0].description : ''}</span>
                            <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                            <span className="text-lg font-bold text-[#0ea5e9]">{product.mrp}</span>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
}
