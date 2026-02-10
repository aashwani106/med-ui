
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import garlicOil from '../assets/cards/garlic-oil.png';
import frame9 from '../assets/cards/frame-9.png';

export default function PromoCards() {
    const navigate = useNavigate();

    return (
        <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Card 1: White Background, Product Image */}
                <div className="bg-white rounded-[20px] p-8 border border-gray-100 flex items-center justify-between shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="flex flex-col items-start z-10 max-w-[60%]">
                        <span className="text-sm font-semibold text-gray-900 mb-2">Big Sale</span>
                        <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
                            Get An <br /> Extra <br /> <span className="text-3xl">20% Off</span>
                        </h3>
                        <p className="text-xs text-gray-500 mt-2 font-medium">
                            Discount on the entire Store an Doctor's Day!
                        </p>
                    </div>
                    <div className="absolute right-[-10px] bottom-[-10px] w-[140px] h-[140px] md:w-[160px] md:h-[160px]">
                        <img
                            src={garlicOil}
                            alt="Garlic Oil"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Card 2: Background Image, White Text */}
                <div className="relative rounded-[20px] overflow-hidden min-h-[220px] p-8 flex flex-col justify-between group">
                    <img
                        src={frame9}
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover blur-[2px] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="z-10 relative h-full flex flex-col justify-between">
                        <h3 className="text-lg font-bold text-white leading-relaxed max-w-[90%]">
                            Get 30% off all types of functional food your first purchase.
                        </h3>

                        <div className="flex items-end justify-between mt-6">
                            <span className="text-3xl font-bold text-white">30%</span>
                            <button
                                onClick={() => navigate('/products')}
                                className="bg-white text-gray-900 text-[10px] font-bold py-2 px-4 rounded-full flex items-center gap-1 hover:bg-gray-100 transition-colors uppercase tracking-wide"
                            >
                                Shop Now <ArrowRight className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card 3: Identical to Card 2 */}
                <div className="relative rounded-[20px] overflow-hidden min-h-[220px] p-8 flex flex-col justify-between group">
                    <img
                        src={frame9}
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover blur-[2px] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="z-10 relative h-full flex flex-col justify-between">
                        <h3 className="text-lg font-bold text-white leading-relaxed max-w-[90%]">
                            Get 30% off all types of functional food your first purchase.
                        </h3>

                        <div className="flex items-end justify-between mt-6">
                            <span className="text-3xl font-bold text-white">30%</span>
                            <button
                                onClick={() => navigate('/products')}
                                className="bg-white text-gray-900 text-[10px] font-bold py-2 px-4 rounded-full flex items-center gap-1 hover:bg-gray-100 transition-colors uppercase tracking-wide"
                            >
                                Shop Now <ArrowRight className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
