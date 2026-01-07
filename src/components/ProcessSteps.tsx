

import { processSteps } from '../data/mockData';

export default function ProcessSteps() {
    return (
        <section className="mb-16">
            <div className="bg-white rounded-[40px] border border-gray-100 p-12 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => (
                        <div key={index} className="flex gap-4 items-start">
                            <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold ${step.color}`}>
                                {step.number}
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-bold text-[#2D2D2D]">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
