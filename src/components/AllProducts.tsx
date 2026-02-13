import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { allProducts } from '../data/mockData';
import FadeIn from './FadeIn';
import ProcessSteps from './ProcessSteps';
import DeliveryBanner from './DeliveryBanner';

export default function AllProducts() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    const searchQuery = (searchParams.get('search') || '').trim().toLowerCase();

    const filteredProducts = useMemo(() => {
        if (!searchQuery) return allProducts;

        return allProducts.filter((product) => {
            const searchable = [
                product.name,
                product.id,
                product.usage,
                product.composition,
                product.description
            ]
                .filter(Boolean)
                .join(' ')
                .toLowerCase();

            return searchable.includes(searchQuery);
        });
    }, [searchQuery]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    const productsPerPage = 12;
    const totalPages = Math.max(1, Math.ceil(filteredProducts.length / productsPerPage));
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

    return (
        <>
         <div className="py-12">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">All Products</h2>
                <p className="text-gray-500 mt-2">Browse our full collection of medicines and health products</p>
            </div>

            {filteredProducts.length === 0 ? (
                <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center text-gray-500">
                    No medicines found for "{searchParams.get('search')}".
                </div>
            ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentProducts.map((product, index) => (
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
                            <span className="text-xs text-gray-500 font-medium line-clamp-2">
                                {product.usage || (product.uses && product.uses[0] ? product.uses[0].description : '')}
                            </span>
                            <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                            <span className="text-lg font-bold text-[#0ea5e9]">{product.mrp}</span>
                            <div className="flex items-center gap-2 text-[11px] font-medium text-gray-500">
                                <span>{product.packaging}</span>
                                <span className="text-gray-300">•</span>
                                <span>{product.unitPrice}</span>
                                <span className="text-gray-300">•</span>
                                <span>(Inclusive of all Taxes)</span>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
            )}

            {filteredProducts.length > 0 && (
            <div className="mt-10 flex items-center justify-center gap-2">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition-colors"
                >
                    Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-full text-sm font-bold transition-colors ${currentPage === page
                            ? 'bg-[#0ea5e9] text-white'
                            : 'border border-gray-200 text-gray-600 hover:border-[#0ea5e9] hover:text-[#0ea5e9]'
                            }`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition-colors"
                >
                    Next
                </button>
            </div>
            )}
        </div>

        <FadeIn delay={0.2}>
                <ProcessSteps />
            </FadeIn>

            <FadeIn delay={0.2}>
                <DeliveryBanner />
            </FadeIn>
        </>
       

        
    );
}
