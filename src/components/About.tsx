import { Link } from 'react-router-dom';
import { BadgeDollarSign, Headset, Lock, ShieldCheck, Truck } from 'lucide-react';
import mainMedImage from '../assets/about/main-med.jpg';
import whoWeAreImage from '../assets/about/whoweare.jpg';
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
                <section className=" px-5 py-14 md:px-10 md:py-16 lg:px-14">
                <div className="mx-auto w-full max-w-[1100px]">
                    <FadeIn className="text-center" delay={0.04}>
                        <span className="inline-flex items-center rounded-full bg-[#b8efe5] px-4 py-1.5 text-xs font-semibold text-[#0f7f73]">
                            ✨ Why Choose Us
                        </span>
                        <h2 className="mt-5 text-4xl font-bold text-[#182233] md:text-5xl">
                            Why Customers Trust MediMarket USA
                        </h2>
                    </FadeIn>

                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                        <FadeIn delay={0.08}>
                            <article className="rounded-2xl border border-[#d9dee5] bg-white p-5 shadow-sm">
                            <div className="mb-4 inline-flex rounded-xl bg-[#c5f2e6] p-3 text-[#079a86]">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1c2433] md:text-3xl">✓ Quality You Can Rely On</h3>
                            <p className="mt-2 text-base text-[#4f5f73] md:text-lg">
                                We source products from trusted suppliers to ensure high standards.
                            </p>
                        </article>
                        </FadeIn>

                        <FadeIn delay={0.12}>
                            <article className="rounded-2xl border border-[#d9dee5] bg-white p-5 shadow-sm">
                            <div className="mb-4 inline-flex rounded-xl bg-[#d7e4ff] p-3 text-[#2f61ff]">
                                <BadgeDollarSign className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1c2433] md:text-3xl">✓ Affordable Pricing</h3>
                            <p className="mt-2 text-base text-[#4f5f73] md:text-lg">
                                We work to keep prices competitive so you get better value.
                            </p>
                        </article>
                        </FadeIn>

                        <FadeIn delay={0.16}>
                            <article className="rounded-2xl border border-[#d9dee5] bg-white p-5 shadow-sm">
                            <div className="mb-4 inline-flex rounded-xl bg-[#eadcff] p-3 text-[#8a2be2]">
                                <Lock className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1c2433] md:text-3xl">✓ Secure &amp; Private</h3>
                            <p className="mt-2 text-base text-[#4f5f73] md:text-lg">
                                Your personal and payment information is protected with advanced systems.
                            </p>
                        </article>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <article className="rounded-2xl border border-[#d9dee5] bg-white p-5 shadow-sm">
                            <div className="mb-4 inline-flex rounded-xl bg-[#ffe7d2] p-3 text-[#ff6a00]">
                                <Truck className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1c2433] md:text-3xl">✓ Fast, Reliable Delivery</h3>
                            <p className="mt-2 text-base text-[#4f5f73] md:text-lg">
                                We deliver directly to your doorstep with care and speed.
                            </p>
                        </article>
                        </FadeIn>
                    </div>

                    <FadeIn className="mx-auto mt-6 max-w-[560px]" delay={0.24}>
                        <article className="rounded-2xl border border-[#d9dee5] bg-white p-5 shadow-sm">
                            <div className="mb-4 inline-flex rounded-xl bg-[#c9efd9] p-3 text-[#0b9f4f]">
                                <Headset className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1c2433] md:text-3xl">✓ Customer Support</h3>
                            <p className="mt-2 text-base text-[#4f5f73] md:text-lg">
                                Our support team is here to help with questions about products and orders.
                            </p>
                        </article>
                    </FadeIn>
                </div>
            </section>
            </FadeIn>
        </div>
    );
}
