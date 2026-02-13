import { Link } from 'react-router-dom';
import { BadgeDollarSign, Headset, Lock, Mail, Phone, ShieldCheck, Truck } from 'lucide-react';
import mainMedImage from '../assets/about/main-med.jpg';
import whoWeAreImage from '../assets/about/whoweare.jpg';
import commitmentImage from '../assets/about/commitment.jpg';
import medicImage from '../assets/about/medic.png';
import FadeIn from './FadeIn';

export default function About() {
    return (
        <div className="py-8 md:py-10">
            <FadeIn>
                <section className="bg-[#068b80] px-5 rounded-[30px] py-8 md:px-10 md:py-12 lg:px-14">
                <div className="mx-auto  grid w-full max-w-[1450px] grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
                    <FadeIn className="max-w-[690px]" delay={0.05}>
                        <h1 className="text-[48px] font-bold leading-[1.1] text-white sm:text-[56px] lg:text-[64px]">
                            Caring for Your Health, One Order at a Time
                        </h1>
                        <p className="mt-5 max-w-[620px] text-base leading-8 text-white/90 md:text-lg">
                            At MediMarket USA, we make healthcare simple, affordable, and accessible delivering trusted medicines and wellness products straight to your door.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-3">
                            <Link
                                to="/products"
                                className="rounded-md  bg-white px-6 py-2.5 text-sm font-medium text-[#0b655e] transition-colors hover:bg-white/90"
                            >
                                Shop Now
                            </Link>
                            <a
                                href="tel:+18557665885"
                                className="rounded-md bg-white px-6 py-2.5 text-sm font-medium text-[#3f4a56] transition-colors hover:bg-white/90"
                            >
                                Contact Us
                            </a>
                        </div>
                    </FadeIn>

                    <FadeIn className="md:justify-self-end" delay={0.12} direction="left">
                        <img
                            src={mainMedImage}
                            alt="Hand holding blister packs"
                            className="h-[280px] w-full max-w-[560px] rounded-2xl object-cover shadow-xl sm:h-[340px] lg:h-[400px]"
                        />
                    </FadeIn>
                </div>
            </section>
            </FadeIn>

            <FadeIn delay={0.1}>
                <section className=" px-5 py-10 md:px-10 md:py-12 lg:px-14">
                <div className="mx-auto grid w-full max-w-[1450px] grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
                    <FadeIn delay={0.05} direction="right">
                        <img
                            src={whoWeAreImage}
                            alt="Medical staff at work"
                            className="h-[260px] w-full rounded-xl object-cover shadow-lg sm:h-[320px] lg:h-[420px]"
                        />
                    </FadeIn>

                    <FadeIn className="max-w-[680px]" delay={0.12}>
                        <span className="inline-flex items-center rounded-full  px-3 py-1 text-[11px] font-semibold text-[#0c7f73]">
                            Who We Are
                        </span>
                        <h2 className="mt-4 text-4xl font-bold text-[#1d2734] lg:text-5xl">About MediMarket USA</h2>
                        <p className="mt-5 text-base leading-8 text-[#5a6572] md:text-lg">
                            MediMarket USA is an online healthcare marketplace dedicated to providing high-quality medicines, wellness essentials, and health products at prices you can trust.
                        </p>
                        <p className="mt-4 text-base leading-8 text-[#5a6572] md:text-lg">
                            We believe everyone deserves convenient access to reliable healthcare solutions without the stress of high costs or complicated processes. That&apos;s why we combine trusted sourcing, secure ordering, and fast delivery all in one place.
                        </p>
                    </FadeIn>
                </div>
            </section>
            </FadeIn>

            <FadeIn delay={0.15}>
                <section className=" px-5 py-14 text-center md:px-10 md:py-16 lg:px-14">
                <FadeIn className="mx-auto max-w-[980px]" delay={0.05}>
                    <span className="inline-flex items-center rounded-full bg-[#d5e8ff] px-3 py-1 text-[11px] font-semibold text-[#315c97]">
                    💙 Our Mission
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-[#1d2734] lg:text-5xl">Our Mission</h2>
                    <p className="mx-auto mt-5 max-w-[860px] text-base leading-8 text-[#5a6572] md:text-lg">
                        Our mission is to make healthcare more affordable and accessible for individuals and families across the country. We aim to simplify the way people shop for medicines by offering a safe, transparent, and user-friendly online experience.
                    </p>
                </FadeIn>
            </section>
            </FadeIn>

            <FadeIn delay={0.2}>
                <section className="px-5 py-14 md:px-10 md:py-16 lg:px-14">
                <div className="mx-auto w-full max-w-[1320px]">
                    <FadeIn className="text-center" delay={0.04}>
                        <span className="inline-flex items-center rounded-full bg-[#b8efe5] px-4 py-1.5 text-xs font-semibold text-[#0f7f73]">
                            ✨ Why Choose Us
                        </span>
                        <h2 className="mt-5 text-4xl font-bold leading-tight text-[#182233] md:text-5xl">
                            Why Customers Trust MediMarket USA
                        </h2>
                    </FadeIn>

                    <div className="mt-8 grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <FadeIn delay={0.08} className="h-full">
                            <article className="flex h-full min-h-[185px] flex-col rounded-xl border border-[#d8dee6] bg-[#fbfcfd] p-4">
                            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#c5f2e6] text-[#079a86]">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            <h3 className="text-xl font-bold leading-tight text-[#1c2433] md:text-2xl">✓ Quality You Can Rely On</h3>
                            <p className="mt-1.5 text-xs leading-6 text-[#4f5f73] md:text-sm">
                                We source products from trusted suppliers to ensure safety and authenticity.
                            </p>
                        </article>
                        </FadeIn>

                        <FadeIn delay={0.12} className="h-full">
                            <article className="flex h-full min-h-[185px] flex-col rounded-xl border border-[#d8dee6] bg-[#fbfcfd] p-4">
                            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#d7e4ff] text-[#2f61ff]">
                                <BadgeDollarSign className="h-5 w-5" />
                            </div>
                            <h3 className="text-xl font-bold leading-tight text-[#1c2433] md:text-2xl">✓ Affordable Pricing</h3>
                            <p className="mt-1.5 text-xs leading-6 text-[#4f5f73] md:text-sm">
                                We work to keep prices competitive so you can save on everyday health needs.
                            </p>
                        </article>
                        </FadeIn>

                        <FadeIn delay={0.16} className="h-full">
                            <article className="flex h-full min-h-[185px] flex-col rounded-xl border border-[#d8dee6] bg-[#fbfcfd] p-4">
                            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#eadcff] text-[#8a2be2]">
                                <Lock className="h-5 w-5" />
                            </div>
                            <h3 className="text-xl font-bold leading-tight text-[#1c2433] md:text-2xl">✓ Secure &amp; Private</h3>
                            <p className="mt-1.5 text-xs leading-6 text-[#4f5f73] md:text-sm">
                                Your personal and payment information is protected with advanced systems.
                            </p>
                        </article>
                        </FadeIn>
                    </div>

                    <div className="mx-auto mt-4 grid max-w-[840px] grid-cols-1 items-stretch gap-4 md:grid-cols-2">
                        <FadeIn delay={0.2} className="h-full">
                            <article className="flex h-full min-h-[185px] flex-col rounded-xl border border-[#d8dee6] bg-[#fbfcfd] p-4">
                            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#ffe7d2] text-[#ff6a00]">
                                <Truck className="h-5 w-5" />
                            </div>
                            <h3 className="text-xl font-bold leading-tight text-[#1c2433] md:text-2xl">✓ Fast, Reliable Delivery</h3>
                            <p className="mt-1.5 text-xs leading-6 text-[#4f5f73] md:text-sm">
                                We deliver directly to your doorstep with care and efficiency.
                            </p>
                        </article>
                        </FadeIn>

                        <FadeIn delay={0.24} className="h-full">
                        <article className="flex h-full min-h-[185px] flex-col rounded-xl border border-[#d8dee6] bg-[#fbfcfd] p-4">
                            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#c9efd9] text-[#0b9f4f]">
                                <Headset className="h-5 w-5" />
                            </div>
                            <h3 className="text-xl font-bold leading-tight text-[#1c2433] md:text-2xl">✓ Customer Support</h3>
                            <p className="mt-1.5 text-xs leading-6 text-[#4f5f73] md:text-sm">
                                Our support team is here to help with questions about products and orders.
                            </p>
                        </article>
                    </FadeIn>
                    </div>
                </div>
            </section>
            </FadeIn>

            <FadeIn delay={0.25}>
                <section className="px-5 py-14 md:px-10 md:py-16 lg:px-14">
                    <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
                        <FadeIn className="max-w-[620px]" delay={0.05}>
                            <span className="inline-flex items-center rounded-full bg-[#d9dee4] px-4 py-1.5 text-sm font-semibold text-[#3c4654]">
                                🚚 Our Commitment to Care
                            </span>

                            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#2b3139] md:text-5xl">
                                Our Commitment to Care
                            </h2>

                            <p className="mt-5 text-base leading-8 text-[#30363f] md:text-[17px]">
                                Healthcare is personal, and we treat it that way. From the moment you place an order to the time it arrives at your home, we focus on accuracy, safety, and service. We&apos;re committed to building long-term trust with every customer we serve.
                            </p>
                        </FadeIn>

                        <FadeIn className="w-full lg:justify-self-stretch" delay={0.12} direction="left">
                            <img
                                src={commitmentImage}
                                alt="Package delivered at doorstep"
                                className="h-[320px] w-full rounded-2xl object-cover shadow-xl sm:h-[420px] lg:h-[560px]"
                            />
                        </FadeIn>
                    </div>
                </section>
            </FadeIn>

            <FadeIn delay={0.3}>
                <section className="px-5 py-14 md:px-10 md:py-16 lg:px-14">
                    <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
                        <FadeIn className="max-w-[620px]" delay={0.05}>
                            <span className="inline-flex items-center rounded-full bg-[#bfeee5] px-4 py-1.5 text-sm font-semibold text-[#0f756b]">
                                📞 Get in Touch
                            </span>

                            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#1f2a37] md:text-5xl">
                                We&apos;re Here to Help
                            </h2>

                            <p className="mt-4 text-base leading-8 text-[#3f4a58] md:text-[17px]">
                                Have questions about a product or your order? Our team is ready to assist you.
                            </p>

                            <div className="mt-7 space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#b8efe5] text-[#0f8f80]">
                                        <Phone className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold text-[#1f2a37]">Phone</p>
                                        <a href="tel:+13468200015" className="text-sm text-[#445062] hover:text-[#1e4c8d]">+1 346 820 0015</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#b8efe5] text-[#0f8f80]">
                                        <Mail className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold text-[#1f2a37]">Company Email</p>
                                        <a href="mailto:info@medimarketusa.com" className="text-sm text-[#445062] hover:text-[#1e4c8d]">info@medimarketusa.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#b8efe5] text-[#0f8f80]">
                                        <Mail className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold text-[#1f2a37]">Contact Email</p>
                                        <a href="mailto:mcgrathgeorge320@gmail.com" className="text-sm text-[#445062] hover:text-[#1e4c8d]">mcgrathgeorge320@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href="tel:+13468200015"
                                    className="inline-flex items-center justify-center rounded-md bg-[#1e4c8d] px-7 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#163a6f]"
                                >
                                    Contact Us
                                </a>
                                <Link
                                    to="/products"
                                    className="inline-flex items-center justify-center rounded-md border border-[#2f3a4a] px-7 py-2.5 text-sm font-medium text-[#2f3a4a] transition-colors hover:bg-[#eef2f7]"
                                >
                                    Browse Products
                                </Link>
                            </div>
                        </FadeIn>

                        <FadeIn className="lg:justify-self-end" delay={0.12} direction="left">
                            <img
                                src={medicImage}
                                alt="Customer support representative"
                                className="h-[320px] w-full max-w-[620px] rounded-2xl object-cover shadow-xl sm:h-[420px] lg:h-[540px]"
                            />
                        </FadeIn>
                    </div>
                </section>
            </FadeIn>
        </div>
    );
}
