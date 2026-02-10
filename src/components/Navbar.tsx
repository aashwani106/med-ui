import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Phone, Menu, X } from 'lucide-react';
import mainLogo from '../assets/main-logo.png';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white relative z-[100]">
            <div className="w-full bg-white py-1 px-4 md:px-16 flex items-center justify-between">
                {/* Logo Section */}
                <Link to="/" className="flex items-center cursor-pointer">
                    <img src={mainLogo} alt="MediMarket Logo" className="h-10 w-auto object-contain" />
                </Link>

                {/* Navigation Links - Desktop */}
                <nav className="hidden md:flex items-center gap-10 text-[13px] font-bold tracking-wide text-gray-800">
                    <Link to="/" className="text-[#102a56] font-extrabold hover:text-[#1e4c8d] transition-colors uppercase">HOME</Link>
                    <Link to="/#how-to-book" className="hover:text-[#1e4c8d] transition-colors uppercase font-medium text-gray-600">HOW TO BOOK</Link>
                    <Link to="/products" className="hover:text-[#1e4c8d] transition-colors uppercase font-medium text-gray-600">PRODUCTS</Link>
                    <a href="#" className="hover:text-[#1e4c8d] transition-colors uppercase font-medium text-gray-600">ABOUT US</a>
                    <a href="#" className="hover:text-[#1e4c8d] transition-colors uppercase font-medium text-gray-600">CONTACTS</a>
                </nav>

                {/* Right Side: Search & CTA */}
                <div className="hidden md:flex items-center gap-6">
                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-5 pr-12 py-2.5 rounded-full border border-gray-200 bg-white text-sm w-56 focus:outline-none focus:border-[#1e4c8d] focus:ring-1 focus:ring-[#1e4c8d] placeholder-gray-300 font-light shadow-sm"
                        />
                        <Search className="w-4 h-4 text-gray-300 absolute right-4 top-1/2 -translate-y-1/2" />
                    </div>

                    {/* Contact Button */}
                    <button className="flex items-center gap-3 bg-[#1e4c8d] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-blue-900 transition-colors shadow-lg cursor-pointer">
                        <Phone className="w-4 h-4 fill-current" />
                        <span>+1 855-766-5885</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-[#1e4c8d] text-sm"
                        />
                        <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
                    </div>

                    <nav className="flex flex-col gap-2">
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="p-3 hover:bg-gray-50 rounded-lg text-[#102a56] font-extrabold uppercase text-sm">HOME</Link>
                        <Link to="/#how-to-book" onClick={() => setIsMobileMenuOpen(false)} className="p-3 hover:bg-gray-50 rounded-lg text-gray-600 font-medium uppercase text-sm">HOW TO BOOK</Link>
                        <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="p-3 hover:bg-gray-50 rounded-lg text-gray-600 font-medium uppercase text-sm">PRODUCTS</Link>
                        <a href="#" className="p-3 hover:bg-gray-50 rounded-lg text-gray-600 font-medium uppercase text-sm">ABOUT US</a>
                        <a href="#" className="p-3 hover:bg-gray-50 rounded-lg text-gray-600 font-medium uppercase text-sm">CONTACTS</a>
                    </nav>

                    <button className="w-full flex items-center justify-center gap-3 bg-[#1e4c8d] text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-blue-900 transition-colors shadow-md mt-2">
                        <Phone className="w-4 h-4 fill-current" />
                        <span>+1 855-766-5885</span>
                    </button>
                </div>
            )}
        </header>
    );
}
