import { ArrowRight } from 'lucide-react';
import deliveryBg from '../assets/delevery.png';

export default function DeliveryBanner() {
    return (
        <section className="mb-16">
            <div className="relative w-full h-[400px] rounded-[30px] overflow-hidden">
                {/* Background Image */}
                <img
                    src={deliveryBg}
                    alt="Contactless Delivery"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16">
                    <div className="max-w-lg">
                        <h2 className="text-3xl md:text-4xl text-white font-medium mb-2 leading-tight">
                            Fast, Free Shipping,
                        </h2>
                        <h2 className="text-3xl md:text-5xl text-white font-bold mb-6 leading-tight">
                            Contactless Delivery.
                        </h2>

                        <p className="text-white/90 text-sm md:text-base mb-10 font-medium">
                            Try it for now, risk free!
                        </p>

                        <button className="bg-[#383838] hover:bg-black text-white text-xs font-bold py-3.5 px-8 rounded-full flex items-center gap-2 transition-colors uppercase tracking-wider w-fit">
                            SHOP NOW <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
