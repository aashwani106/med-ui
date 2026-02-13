export default function ReturnRefundPolicy() {
    return (
        <section className="py-10 md:py-14">
            <div className="mx-auto w-full max-w-[1100px] rounded-2xl border border-[#d8dee6] bg-white p-6 shadow-sm md:p-10">
                <h1 className="text-3xl font-bold text-[#1f2a37] md:text-4xl">Return &amp; Refund Policy</h1>
                <p className="mt-2 text-sm text-[#526173]">MediMarket USA</p>
                <p className="text-sm text-[#526173]">Effective Date: 01 Jan 2026</p>

                <div className="mt-8 space-y-7 text-[#2f3b4a]">
                    <div>
                        <h2 className="text-xl font-bold">1. General Policy</h2>
                        <p className="mt-2 leading-8">
                            Due to the sensitive nature of medicines and healthcare products, returns are subject to strict
                            conditions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">2. Eligible Returns</h2>
                        <p className="mt-2 leading-8">We accept returns only if:</p>
                        <ul className="mt-1 list-disc space-y-1 pl-5 leading-7">
                            <li>The product was damaged during delivery</li>
                            <li>The wrong item was delivered</li>
                            <li>The product is defective</li>
                        </ul>
                        <p className="mt-2 leading-8">You must notify us within 48 hours of delivery.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">3. Non-Returnable Items</h2>
                        <p className="mt-2 leading-8">For safety and hygiene reasons, we do NOT accept returns on:</p>
                        <ul className="mt-1 list-disc space-y-1 pl-5 leading-7">
                            <li>Opened medicines</li>
                            <li>Used healthcare products</li>
                            <li>Prescription medications (unless damaged or incorrect)</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">4. Return Process</h2>
                        <p className="mt-2 leading-8">To initiate a return:</p>
                        <ul className="mt-1 list-disc space-y-1 pl-5 leading-7">
                            <li>
                                Email us at:{' '}
                                <a href="mailto:info@medimarketusa.com" className="font-semibold text-[#1e4c8d] underline">
                                    info@medimarketusa.com
                                </a>
                            </li>
                            <li>Provide your order number</li>
                            <li>Attach photos of the product</li>
                            <li>Wait for approval before sending the item back</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">5. Refunds</h2>
                        <p className="mt-2 leading-8">Once approved and inspected:</p>
                        <ul className="mt-1 list-disc space-y-1 pl-5 leading-7">
                            <li>Refunds will be processed within 5 to 10 business days</li>
                            <li>Refunds will be issued to the original payment method</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">6. Shipping Costs</h2>
                        <p className="mt-2 leading-8">If the return is due to our error, we cover return shipping.</p>
                        <p className="mt-2 leading-8">Otherwise, customers are responsible for return shipping costs.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">7. Order Cancellations</h2>
                        <p className="mt-2 leading-8">
                            Orders can be cancelled before shipment. Once shipped, cancellation is not possible.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
