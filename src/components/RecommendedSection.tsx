import { ArrowRight } from 'lucide-react';
import frame9 from '../assets/cards/frame-9.png';
import luisBin from '../assets/cards/luis-bin.png';

export default function RecommendedSection() {
    const products = [
        {
            category: "Muscle Pain",
            name: "Pain Relief Gel",
            specs: "150ml • 24-hour relief",
            price: "$15.99",
            image: frame9
        },
        {
            category: "Symptom Relief",
            name: "Cold & Flu Relief",
            specs: "30 tablets • Fast acting",
            price: "$12.99",
            image: frame9
        },
        {
            category: "Gut Health",
            name: "Digestive Support",
            specs: "60 capsules • Daily formula",
            price: "$24.99",
            image: frame9
        },
        {
            category: "Bone Health",
            name: "Vitamin D3",
            specs: "90 softgels • High potency",
            price: "$18.99",
            image: frame9
        },
        {
            category: "Better Sleep",
            name: "Sleep Support",
            specs: "60 tablets • Natural formula",
            price: "$21.99",
            image: frame9
        },
        {
            category: "Mobility",
            name: "Joint Support",
            specs: "120 capsules • Triple action",
            price: "$32.99",
            image: frame9
        }
    ];

    return (
        <section className="mb-16 py-12 bg-[#FFF8F3] -mx-4 md:-mx-16 px-4 md:px-16 rounded-[40px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-[#2D2D2D]">Recommended For You</h2>
                <a href="#" className="flex items-center gap-1 text-[10px] font-bold text-gray-500 hover:text-gray-900 uppercase tracking-widest">
                    VIEW ALL <ArrowRight className="w-3 h-3" />
                </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Product Grid (Left Side) - 2 Columns */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-auto lg:h-[552px]">
                    {products.map((product, index) => (
                        <div key={index} className="bg-white rounded-[20px] p-4 flex gap-4 items-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                            {/* Image Container */}
                            <div className="w-[120px] h-full rounded-xl overflow-hidden flex-shrink-0 relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-center h-full gap-2 w-full">
                                <span className="text-xs text-gray-500 font-bold tracking-wide">{product.category}</span>
                                <h3 className="text-base font-bold text-[#2D2D2D] leading-tight">{product.name}</h3>
                                <p className="text-xs text-gray-400 font-medium">{product.specs}</p>
                                <span className="text-xl font-bold text-[#0EA5E9] mt-1">{product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Promo Card (Right Side) */}
                <div className="bg-gradient-to-b from-[#DF8A54] to-[#B7571E] rounded-[16px] p-4 text-white relative overflow-hidden flex flex-col h-[552px] border border-transparent">
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-start gap-2">
                        <span className="text-xs font-medium opacity-90 uppercase tracking-wide">Big Sale</span>
                        <h3 className="text-2xl font-medium">Get An Extra</h3>
                        <div className="text-4xl font-bold mb-2">20% Off</div>
                        <p className="text-xs opacity-90 mb-6 font-medium max-w-[80%]">
                            Discount on the entire Store an Doctor's Day!
                        </p>

                        <button className="bg-[#383838] text-white text-xs font-bold py-3 px-8 rounded-full flex items-center gap-2 hover:bg-black transition-colors uppercase tracking-wider">
                            SHOP NOW <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Decorative Background Circles (Subtle) */}
                    <div className="absolute top-[20%] right-[-30%] w-[350px] h-[350px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

                    {/* Product Image */}
                    <div className="absolute bottom-[-5%] right-[-15%] w-[100%] h-[65%] flex items-end justify-end pointer-events-none">
                        <img
                            src={luisBin}
                            alt="Luis Bien Promotion"
                            className="w-full h-full object-contain object-bottom drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
