export default function PrivacyPolicy() {
    return (
        <section className="py-10 md:py-14">
            <div className="mx-auto w-full max-w-[1100px] rounded-2xl border border-[#d8dee6] bg-white p-6 shadow-sm md:p-10">
                <h1 className="text-3xl font-bold text-[#1f2a37] md:text-4xl">Privacy Policy</h1>
                <p className="mt-2 text-sm text-[#526173]">MediMarket USA</p>
                <p className="text-sm text-[#526173]">Effective Date: 01 Jan 2026</p>

                <div className="mt-8 space-y-7 text-[#2f3b4a]">
                    <div>
                        <h2 className="text-xl font-bold">1. Introduction</h2>
                        <p className="mt-2 leading-8">
                            At MediMarket USA, we value your privacy and are committed to protecting your personal information.
                            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our
                            website or purchase from us.
                        </p>
                        <p className="mt-2 leading-8">
                            By using our website, you agree to the practices described in this policy.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">2. Information We Collect</h2>
                        <p className="mt-2 leading-8">We may collect the following types of information:</p>
                        <p className="mt-3 font-semibold">Personal Information</p>
                        <ul className="mt-1 list-disc space-y-1 pl-5 leading-7">
                            <li>Full name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Billing and shipping address</li>
                            <li>Payment details</li>
                        </ul>
                        <p className="mt-3 font-semibold">Non-Personal Information</p>
                        <ul className="mt-1 list-disc space-y-1 pl-5 leading-7">
                            <li>IP address</li>
                            <li>Browser type</li>
                            <li>Device information</li>
                            <li>Pages visited</li>
                            <li>Cookies and usage data</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">3. How We Use Your Information</h2>
                        <p className="mt-2 leading-8">We use your information to:</p>
                        <ul className="mt-1 list-disc space-y-1 pl-5 leading-7">
                            <li>Process and fulfill orders</li>
                            <li>Provide customer support</li>
                            <li>Send order confirmations and updates</li>
                            <li>Improve our website and services</li>
                            <li>Prevent fraud and unauthorized transactions</li>
                            <li>Send promotional emails (only if you opt-in)</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">4. Payment Security</h2>
                        <p className="mt-2 leading-8">
                            All payments are processed through secure third-party payment providers. We do not store your full
                            payment card details on our servers.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">5. Sharing of Information</h2>
                        <p className="mt-2 leading-8">We do not sell or rent your personal information.</p>
                        <p className="mt-2 leading-8">We may share information with:</p>
                        <ul className="mt-1 list-disc space-y-1 pl-5 leading-7">
                            <li>Payment processors</li>
                            <li>Shipping providers</li>
                            <li>Service providers who assist in operating our website</li>
                            <li>Legal authorities if required by law</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">6. Cookies</h2>
                        <p className="mt-2 leading-8">We use cookies to:</p>
                        <ul className="mt-1 list-disc space-y-1 pl-5 leading-7">
                            <li>Improve website functionality</li>
                            <li>Analyze traffic</li>
                            <li>Enhance user experience</li>
                        </ul>
                        <p className="mt-2 leading-8">You may disable cookies in your browser settings.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">7. Data Protection</h2>
                        <p className="mt-2 leading-8">
                            We implement appropriate security measures to protect your personal information. However, no online
                            system is 100% secure.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">8. Your Rights</h2>
                        <p className="mt-2 leading-8">You have the right to:</p>
                        <ul className="mt-1 list-disc space-y-1 pl-5 leading-7">
                            <li>Access your personal information</li>
                            <li>Request correction of incorrect data</li>
                            <li>Request deletion of your data</li>
                            <li>Opt-out of marketing communications</li>
                        </ul>
                        <p className="mt-2 leading-8">To make a request, contact us at:</p>
                        <a href="mailto:info@medimarketusa.com" className="font-semibold text-[#1e4c8d] underline">
                            info@medimarketusa.com
                        </a>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">9. Changes to This Policy</h2>
                        <p className="mt-2 leading-8">
                            We may update this Privacy Policy from time to time. Changes will be posted on this page.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
