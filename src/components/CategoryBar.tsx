import React from 'react';

const categories = [
    "Pain Relief",
    "Cold and Flu",
    "Diabetes Care",
    "Digestive Health",
    "First Aid",
    "Skin Care",
    "Heart Health",
    "Respiratory Health"
];

export default function CategoryBar() {
    return (
        <div className="w-full bg-[#f8f9fa] border-t border-b border-gray-100 py-3 flex justify-center">
            <div className="container px-6 md:px-16 flex items-center justify-between overflow-x-auto whitespace-nowrap gap-8 no-scrollbar">
                {categories.map((category, index) => (
                    <a
                        key={index}
                        href="#"
                        className="text-[14px] font-semibold text-gray-700 hover:text-[#1e4c8d] transition-colors tracking-wide"
                    >
                        {category}
                    </a>
                ))}
            </div>
        </div>
    );
}
