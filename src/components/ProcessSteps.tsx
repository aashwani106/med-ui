

export default function ProcessSteps() {
    const steps = [
        {
            number: 1,
            title: "Send Query",
            description: "Browse medicines, add to query cart, and send us your request.",
            color: "bg-[#FFF4D9] text-[#AD842A]"
        },
        {
            number: 2,
            title: "Order Confirmation",
            description: "Our team will contact you to confirm availability.",
            color: "bg-[#DFF6FF] text-[#2A84AD]"
        },
        {
            number: 3,
            title: "Secure Payment",
            description: "Once confirmed, complete your payment securely online.",
            color: "bg-[#E4F8D7] text-[#5B8D2A]"
        },
        {
            number: 4,
            title: "Delivery",
            description: "our medicines will be packed and delivered to your doorstep.",
            color: "bg-[#EBEBFF] text-[#5B5BBD]"
        }
    ];

    return (
        <section className="mb-16">
            <div className="bg-white rounded-[40px] border border-gray-100 p-12 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
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
