import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';
import mainLogo from '../assets/main-logo.png';
import medicineBg from '../assets/cards/medicine-bg.png';

export default function Footer() {
    return (
        <footer className="relative mt-8 border-t border-gray-200 bg-[#eef4f9]">
            <div className="pointer-events-none absolute inset-0 opacity-12">
                <img src={medicineBg} alt="" className="h-full w-full object-cover" />
            </div>

            <div className="relative mx-auto w-full max-w-[1600px] px-6 py-10 md:px-10 lg:px-14">
                <div className="grid grid-cols-1 gap-10 border-b border-[#d3dde8] pb-8 md:grid-cols-2 md:gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1.25fr]">
                    <div>
                        <img src={mainLogo} alt="MediMarket USA" className="h-10 w-auto object-contain" />
                        <p className="mt-4 max-w-[290px] text-sm leading-7 text-[#2f3b4a]">
                            Clarity gives you the blocks and components you need to create a truly professional website.
                        </p>
                        <div className="mt-5 flex gap-3">
                            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b7c4d3] text-[#1d2a3b] transition-colors hover:bg-white">
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1e4c8d] text-white transition-colors hover:bg-[#173d71]">
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b7c4d3] text-[#1d2a3b] transition-colors hover:bg-white">
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b7c4d3] text-[#1d2a3b] transition-colors hover:bg-white">
                                <Github className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#1e4c8d]">Company:</h4>
                        <div className="mt-3 flex flex-col gap-2.5 text-[27px] text-[#2f3b4a]">
                            <Link to="/" className="hover:text-[#1e4c8d]">Home</Link>
                            <Link to="/#how-to-book" className="hover:text-[#1e4c8d]">How to book</Link>
                            <Link to="/products" className="hover:text-[#1e4c8d]">Products</Link>
                            <Link to="/about" className="hover:text-[#1e4c8d]">about us</Link>
                            <a href="#" className="hover:text-[#1e4c8d]">Contacts</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#1e4c8d]">Policies:</h4>
                        <div className="mt-3 flex flex-col gap-2.5 text-[27px] text-[#2f3b4a]">
                            <a href="#" className="hover:text-[#1e4c8d]">Privacy Policy</a>
                            <a href="#" className="hover:text-[#1e4c8d]">Terms and Conditions</a>
                            <a href="#" className="hover:text-[#1e4c8d]">Return Policy</a>
                            <a href="#" className="hover:text-[#1e4c8d]">Customer Support Policy</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#1e4c8d]">Contact Details:</h4>
                        <div className="mt-3 space-y-3 text-[26px] text-[#2f3b4a]">
                            <div>
                                <p>Contact Number:</p>
                                <a href="tel:+13468200015" className="font-semibold hover:text-[#1e4c8d]">+1 346 820 0015</a>
                            </div>
                            <div>
                                <p>Company Email:</p>
                                <a href="mailto:info@medimarketusa.com" className="font-semibold underline hover:text-[#1e4c8d]">info@medimarketusa.com</a>
                            </div>
                            <div>
                                <p>Contact Email:</p>
                                <a href="mailto:mcgrathgeorge320@gmail.com" className="font-semibold underline hover:text-[#1e4c8d]">mcgrathgeorge320@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 pt-6 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-[#425062]">
                        Privacy Policy / Medi market USA © 2026 / All Rights Reserved
                    </p>

                    <div className="flex items-center gap-5 text-xl font-bold">
                        <span className="text-[#003087] italic">PayPal</span>
                        <span className="text-[#1A1F71]">VISA</span>
                        <div className="flex -space-x-1.5">
                            <span className="h-4 w-4 rounded-full bg-[#EB001B]"></span>
                            <span className="h-4 w-4 rounded-full bg-[#F79E1B]"></span>
                        </div>
                        <span className="text-[#E53238]">ebay</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
