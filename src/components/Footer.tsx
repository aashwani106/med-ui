import { Link } from 'react-router-dom';
import { Mail, MessageCircle } from 'lucide-react';
import mainLogo from '../assets/main-logo.png';
import medicineBg from '../assets/cards/medicine-bg.png';

export default function Footer() {
    return (
        <footer className="relative mt-8 border-t border-gray-200 bg-[#eef4f9]">
            <div className="pointer-events-none absolute inset-0 opacity-10">
                <img src={medicineBg} alt="" className="h-full w-full object-cover" />
            </div>

            <div className="relative mx-auto w-full max-w-[1600px] px-6 py-7 md:px-10 lg:px-14">
                <div className="grid grid-cols-1 gap-8 border-b border-[#d3dde8] pb-6 md:grid-cols-2 md:gap-8 lg:grid-cols-[1.35fr_1fr_1fr_1.3fr]">
                    <div>
                        <img src={mainLogo} alt="MediMarket USA" className="h-9 w-auto object-contain" />
                        <p className="mt-4 max-w-[320px] text-[15px] leading-7 text-[#2f3b4a]">
                            Clarity gives you the blocks and components you need to create a truly professional website.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.11em] text-[#1e4c8d]">Company</h4>
                        <div className="mt-2.5 flex flex-col gap-1.5 text-[16px] font-semibold text-[#2f3b4a]">
                            <Link to="/" className="hover:text-[#1e4c8d]">Home</Link>
                            <Link to="/#how-to-book" className="hover:text-[#1e4c8d]">How to book</Link>
                            <Link to="/products" className="hover:text-[#1e4c8d]">Products</Link>
                            <Link to="/about" className="hover:text-[#1e4c8d]">about us</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.11em] text-[#1e4c8d]">Policies</h4>
                        <div className="mt-2.5 flex flex-col gap-1.5 text-[16px] font-semibold text-[#2f3b4a]">
                            <Link to="/privacy-policy" className="hover:text-[#1e4c8d]">Privacy Policy</Link>
                            <Link to="/terms-and-conditions" className="hover:text-[#1e4c8d]">Terms and Conditions</Link>
                            <Link to="/return-refund-policy" className="hover:text-[#1e4c8d]">Return Policy</Link>
                            {/* <a href="#" className="hover:text-[#1e4c8d]">Customer Support Policy</a> */}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.11em] text-[#1e4c8d]">Contact Details</h4>
                        <div className="mt-2.5 space-y-2.5 text-[16px] text-[#2f3b4a]">
                            <div>
                                <p>Contact Number:</p>
                                <a href="https://wa.me/13468200015" target="_blank" rel="noopener noreferrer" className="mt-0.5 inline-flex items-center gap-2 font-semibold hover:text-[#1e4c8d]">
                                    <MessageCircle className="h-4 w-4 text-[#22c55e]" />
                                    +1 346 820 0015
                                </a>
                            </div>
                            <div>
                                <p>Contact Email:</p>
                                <a href="mailto:mcgrathgeorge320@gmail.com" className="mt-0.5 inline-flex items-center gap-2 font-semibold underline hover:text-[#1e4c8d]">
                                    <Mail className="h-4 w-4 text-[#1e4c8d]" />
                                    mcgrathgeorge320@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 pt-4 md:flex-row md:items-center md:justify-between">
                    <p className="text-xs text-[#425062]">
                        <Link to="/privacy-policy" className="hover:text-[#1e4c8d]">Privacy Policy</Link> / Medi market USA © 2026 / All Rights Reserved
                    </p>

                    <div className="flex flex-wrap items-center gap-2.5 text-sm font-bold">
                        <span className="rounded-md border border-[#cad3df] bg-[#9ae66d] px-2 py-1 text-[#1d2a1a] shadow-sm">wise</span>
                        <span className="rounded-md border border-[#cad3df] bg-white px-2 py-1 text-[#003087] shadow-sm">PayPal</span>
                        <span className="rounded-md border border-[#cad3df] bg-[#101010] px-2 py-1 text-white shadow-sm">Cash App</span>
                        <span className="rounded-md border border-[#cad3df] bg-white px-2 py-1 text-[#111111] shadow-sm">venmo</span>
                        <span className="rounded-md border border-[#cad3df] bg-white px-2 py-1 text-[#111111] shadow-sm">Apple Pay</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
