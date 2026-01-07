import { useState } from 'react';
import { Share2, Info, TrendingUp } from 'lucide-react';
import { productDetails } from '../data/mockData';
import FadeIn from './FadeIn';
import LatestNews from './LatestNews';
import ProcessSteps from './ProcessSteps';
import DeliveryBanner from './DeliveryBanner';
import ContactModal from './ContactModal';

export default function ProductDetails() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setCursorPos({ x, y });
    };

    return (
        <FadeIn>
            <div className="pt-4 pb-16">
                {/* Breadcrumb - Adjusted padding to align with layout */}
                <div className="text-[11px] font-medium text-gray-500 mb-6 flex items-center gap-2">
                    {productDetails.breadcrumbs.map((item, index) => (
                        <span key={index} className="flex items-center gap-2">
                            <span className={index === productDetails.breadcrumbs.length - 1 ? "text-[#102a56]" : "hover:text-[#102a56] cursor-pointer transition-colors"}>
                                {item}
                            </span>
                            {index < productDetails.breadcrumbs.length - 1 && <span className="text-gray-300">/</span>}
                        </span>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column: Images */}
                    <div className="flex-1 flex gap-4 h-fit">
                        {/* Thumbnails */}
                        <div className="flex flex-col gap-4">
                            {productDetails.images.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`w-[70px] h-[70px] rounded-[16px] border cursor-pointer p-2 bg-white transition-all duration-300 ${selectedImage === index ? "border-[#1e4c8d] ring-1 ring-[#1e4c8d]" : "border-gray-200 hover:border-gray-300"
                                        }`}
                                >
                                    <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                                </div>
                            ))}
                        </div>
                        {/* Main Image */}



                        <div
                            className="flex-1 bg-[#F8F9FB] rounded-[24px] border border-gray-100 overflow-hidden h-[450px] relative cursor-crosshair"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onMouseMove={handleMouseMove}
                        >
                            <img
                                src={productDetails.images[selectedImage]}
                                alt={productDetails.name}
                                className="w-full h-full object-cover mix-blend-multiply transition-transform duration-100 ease-out"
                                style={{
                                    transformOrigin: `${cursorPos.x}% ${cursorPos.y}%`,
                                    transform: isHovered ? 'scale(2)' : 'scale(1)'
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="flex-1 pt-2">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-3">
                                <h1 className="text-2xl font-bold text-[#1D1D1D]">{productDetails.name}</h1>
                                {productDetails.boughtCount && (
                                    <span className="flex items-center gap-1.5 text-[10px] bg-[#E8F8EE] text-[#15803D] px-2.5 py-1 rounded-full font-bold uppercase tracking-wide">
                                        <TrendingUp className="w-3 h-3" />
                                        {productDetails.boughtCount}
                                    </span>
                                )}
                            </div>
                            <button className="p-2 hover:bg-gray-50 rounded-full border border-gray-200 text-gray-400 transition-colors">
                                <Share2 className="w-4 h-4" />
                            </button>
                        </div>

                        {productDetails.isPrescription && (
                            <div className="inline-flex items-center gap-1.5 bg-[#F0F4FF] text-[#3B82F6] px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider mb-8">
                                Prescription drug <Info className="w-3 h-3" />
                            </div>
                        )}

                        {/* Product Info Table */}
                        <div className="mb-8 bg-[#F5F5F5] rounded-xl overflow-hidden">
                            <div className="grid grid-cols-[1.5fr_2fr] py-4 border-b border-gray-100 items-center">
                                <span className="text-sm text-gray-500 font-semibold pl-2">Consume Type</span>
                                <span className="text-sm font-bold text-[#1D1D1D] text-right pr-2 uppercase">{productDetails.consumeType}</span>
                            </div>
                            <div className="grid grid-cols-[1.5fr_2fr] py-4 border-b border-gray-100 items-center">
                                <span className="text-sm text-gray-500 font-semibold pl-2">Return Policy</span>
                                <span className="text-sm font-bold text-[#1D1D1D] text-right pr-2 uppercase">{productDetails.returnPolicy}</span>
                            </div>
                            <div className="grid grid-cols-[1.5fr_2fr] py-4 border-b border-gray-100 items-center">
                                <span className="text-sm text-gray-500 font-semibold pl-2">Expires on or after</span>
                                <span className="text-sm font-bold text-[#1D1D1D] text-right pr-2">{productDetails.expiry}</span>
                            </div>
                            <div className="grid grid-cols-[1.5fr_2fr] py-4 border-b border-gray-100 items-center">
                                <span className="text-sm text-gray-500 font-semibold pl-2">Composition</span>
                                <span className="text-sm font-bold text-[#1E4C8D] text-right pr-2 uppercase">{productDetails.composition}</span>
                            </div>
                            <div className="grid grid-cols-[1.5fr_2fr] py-4 border-gray-100 items-center">
                                <span className="text-sm text-gray-500 font-semibold pl-2">Manufacturer/Marketer</span>
                                <span className="text-sm font-bold text-[#1E4C8D] text-right pr-2 uppercase">{productDetails.manufacturer}</span>
                            </div>
                        </div>

                        {/* Pricing Action */}
                        <div className="bg-transparent pt-4 border-t border-gray-200">
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="flex items-end gap-2 mb-1">
                                        <span className="text-xl font-bold text-[#1D1D1D]">MRP</span>
                                        <span className="text-3xl font-extrabold text-[#1D1D1D]">{productDetails.mrp}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1 text-[11px] font-medium text-gray-500">
                                        <span>{productDetails.packaging}</span>
                                        <span className="text-gray-300">•</span>
                                        <span>{productDetails.unitPrice}</span>
                                        <span className="text-gray-300">•</span>
                                        <span>(Inclusive of all Taxes)</span>
                                    </div>
                                    <p className="text-[11px] font-bold text-[#1E4C8D] cursor-pointer hover:underline">Confirm Discount on 1st Order</p>
                                </div>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="bg-[#1e4c8d] hover:bg-[#153a6d] text-white py-3 px-8 rounded-full font-bold text-sm shadow-md transition-all cursor-pointer"
                                >
                                    Order now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <ContactModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    productName={productDetails.name}
                />

                {/* Tabs / Info Sections */}
                <div className="mt-16 border-t border-gray-200 pt-8">
                    {/* Navigation Links */}
                    <div className="flex flex-col gap-4 mb-12">
                        {/* Row 1 */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            {["ABOUT MEDICINE", "USES AND BENEFITS", "SIDE EFFECTS", "DIRECTIONS FOR USE", "HOW IT WORKS", "STORAGE", "OVERDOSE", "DRUG WARNINGS,DRUG INTERACTIONS", "DIET & LIFESTYLE ADVISE", "THERAPEUTIC", "SAFETY ADVICE", "FAQS", "CUSTOMERS ALSO BOUGHT"].map((item, index, arr) => (
                                <div key={index} className="flex items-center gap-4">
                                    <a href="#" className="text-[10px] font-bold text-[#1E4C8D] tracking-widest hover:text-[#102a56] transition-colors whitespace-nowrap">
                                        {item}
                                    </a>
                                    {index < arr.length - 1 && <span className="text-gray-200 text-sm">|</span>}
                                </div>
                            ))}
                        </div>

                        {/* Row 2 */}
                        {/* <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            {["DRUG INTERACTIONS", "DIET & LIFESTYLE ADVISE", "THERAPEUTIC", "SAFETY ADVICE", "FAQS", "CUSTOMERS ALSO BOUGHT"].map((item, index, arr) => (
                                <div key={index} className="flex items-center gap-4">
                                    <a href="#" className="text-[10px] font-bold text-[#1E4C8D] tracking-widest hover:text-[#102a56] transition-colors whitespace-nowrap">
                                        {item}
                                    </a>
                                    {index < arr.length - 1 && <span className="text-gray-200 text-sm">|</span>}
                                </div>
                            ))}
                        </div> */}
                    </div>

                    <div className="w-full">
                        <div className="mb-10">
                            <h2 className="text-lg font-bold text-[#1D1D1D] mb-4">About {productDetails.name}</h2>
                            <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line text-justify">
                                {productDetails.description}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-bold text-[#1D1D1D] mb-6">Uses of {productDetails.name}</h2>
                            <ul className="flex flex-col gap-4">
                                {productDetails.uses.map((use, i) => (
                                    <li key={i} className="text-sm text-gray-500 leading-relaxed">
                                        <strong className="text-[#1D1D1D] mr-1">{use.title}:</strong>
                                        {use.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-100">
                    <LatestNews />
                    <ProcessSteps />
                    <DeliveryBanner />

                </div>


            </div>
        </FadeIn>
    );
}
