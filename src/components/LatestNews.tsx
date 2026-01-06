import { ArrowRight } from 'lucide-react';
import newsCardBg from '../assets/cards/news-card.png';

export default function LatestNews() {
    const newsItems = [
        {
            date: "August 11,2025",
            category: "US Medicine",
            title: "In this section, we delve into various aspects of health",
            description: "Explore the world of medical specialties through our blog's spotlight feature. From...",
            tags: ["Examination gloves", "Uncategorized"]
        },
        {
            date: "August 11,2025",
            category: "US Medicine",
            title: "Discover a treasure trove of practical tips for enhancing",
            description: "From nutrition advice to exercise routines, we're here to support your journey toward...",
            tags: ["Examination gloves", "Uncategorized"]
        },
        {
            date: "August 11,2025",
            category: "US Medicine",
            title: "Our patients' journeys are filled with courage, resilienc...",
            description: "In this section, we share inspiring narratives of individuals who have overcome health c...",
            tags: ["Examination gloves", "Uncategorized"]
        },
        {
            date: "August 11,2025",
            category: "US Medicine",
            title: "From organizing health fairs to partnering with local organiz...",
            description: "Find out how you can participate in community events and contribute to the h...",
            tags: ["Examination gloves", "Uncategorized"]
        }
    ];

    return (
        <section className="mb-16">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-[#2D2D2D]">The Latest News</h2>
                <a href="#" className="flex items-center gap-1 text-[10px] font-bold text-gray-500 hover:text-gray-900 uppercase tracking-widest">
                    VIEW ALL <ArrowRight className="w-3 h-3" />
                </a>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {newsItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-[24px] p-4 border border-gray-200 hover:shadow-lg transition-shadow group flex flex-col h-full">
                        {/* Image */}
                        <div className="relative aspect-[1.6] mb-4 rounded-2xl overflow-hidden">
                            <img
                                src={newsCardBg}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1">
                            <div className="text-[10px] text-gray-400 mb-2 font-medium">
                                {item.date} / <span className="text-gray-500">{item.category}</span>
                            </div>

                            <h3 className="text-lg font-bold text-[#2D2D2D] mb-3 leading-tight line-clamp-3">
                                {item.title}
                            </h3>

                            <p className="text-xs text-gray-500 mb-6 leading-relaxed line-clamp-3">
                                {item.description}
                            </p>

                            <div className="mt-auto flex gap-2 flex-wrap">
                                {item.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-3 py-1.5 bg-[#EFF6FF] text-[#3B82F6] text-[10px] font-bold rounded-full whitespace-nowrap"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
