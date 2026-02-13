import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Phone, Menu, X, Mail } from 'lucide-react';
import mainLogo from '../assets/main-logo.png';
import whatsappIcon from '../assets/logos_whatsapp-icon.png';
import { allProducts } from '../data/mockData';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/products') return;
        const params = new URLSearchParams(location.search);
        setSearchTerm(params.get('search') || '');
    }, [location.pathname, location.search]);

    const medicineSuggestions = useMemo(() => {
        const query = searchTerm.trim().toLowerCase();
        if (!query) return [];

        return allProducts
            .filter((product) => {
                const searchable = [product.name, product.id, product.usage, product.composition]
                    .filter(Boolean)
                    .join(' ')
                    .toLowerCase();
                return searchable.includes(query);
            })
            .slice(0, 6);
    }, [searchTerm]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const query = searchTerm.trim();
        navigate(query ? `/products?search=${encodeURIComponent(query)}` : '/products');
        setIsMobileMenuOpen(false);
    };

    const handleSuggestionSelect = (productId: string) => {
        navigate(`/product/${productId}`);
        setSearchTerm('');
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="w-full bg-white relative z-[100] border-b border-[#e6ebf1]">
            <div className="mx-auto w-full max-w-[1600px] bg-white py-2.5 px-4 md:px-8 lg:px-12 flex items-center justify-between gap-4">
                {/* Logo Section */}
                <Link to="/" className="flex items-center cursor-pointer">
                    <img src={mainLogo} alt="MediMarket Logo" className="h-9 w-auto object-contain" />
                </Link>

                {/* Navigation Links - Desktop */}
                <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-[#485466] whitespace-nowrap">
                    <Link to="/" className="text-[#102a56] font-bold hover:text-[#1e4c8d] transition-colors uppercase">HOME</Link>
                    <Link to="/#how-to-book" className="hover:text-[#1e4c8d] transition-colors uppercase">HOW TO BOOK</Link>
                    <Link to="/products" className="hover:text-[#1e4c8d] transition-colors uppercase">PRODUCTS</Link>
                    <Link to="/about" className="hover:text-[#1e4c8d] transition-colors uppercase">ABOUT US</Link>
                </nav>

                {/* Right Side: Search & CTA */}
                <div className="hidden md:flex items-center gap-2.5 lg:gap-3">
                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 h-10 rounded-full border border-[#d7dee8] bg-[#f7f9fc] text-sm w-36 lg:w-40 xl:w-44 focus:outline-none focus:border-[#1e4c8d] placeholder-gray-400"
                        />
                        <button type="submit" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-[#1e4c8d] transition-colors">
                            <Search className="w-4 h-4" />
                        </button>

                        {medicineSuggestions.length > 0 && (
                            <div className="absolute top-[calc(100%+8px)] left-0 w-full rounded-xl border border-[#d7dee8] bg-white shadow-lg z-[120] overflow-hidden">
                                {medicineSuggestions.map((product) => (
                                    <button
                                        key={product.id}
                                        type="button"
                                        onClick={() => handleSuggestionSelect(product.id)}
                                        className="w-full px-3 py-2.5 text-left hover:bg-[#f4f8ff] transition-colors border-b last:border-b-0 border-gray-100"
                                    >
                                        <p className="text-sm font-semibold text-[#1f2a37]">{product.name}</p>
                                        <p className="text-xs text-gray-500">{product.usage || product.composition}</p>
                                    </button>
                                ))}
                            </div>
                        )}
                    </form>

                    <a
                        href="tel:+13468200015"
                        className="hidden xl:inline-flex items-center gap-2.5 bg-[#1e4c8d] text-white text-sm font-semibold px-5 h-10 rounded-full hover:bg-[#173d71] transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        <span>+1 346 820 0015</span>
                    </a>

                    <a
                        href="mailto:info@medimarketusa.com"
                        className="hidden xl:inline-flex items-center gap-2.5 bg-[#1e4c8d] text-white text-sm font-semibold px-5 h-10 rounded-full hover:bg-[#173d71] transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        <span>info@medimarketusa.com</span>
                    </a>

                    <a
                        href="https://wa.me/13468200015"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full text-white transition-colors"
                        aria-label="WhatsApp"
                    >
                        <img src={whatsappIcon} alt="WhatsApp" className="h-12 w-12 object-contain" />
                    </a>
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
                    <form onSubmit={handleSearch} className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-[#1e4c8d] text-sm"
                        />
                        <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1e4c8d] transition-colors">
                            <Search className="w-4 h-4" />
                        </button>

                        {medicineSuggestions.length > 0 && (
                            <div className="absolute top-[calc(100%+8px)] left-0 w-full rounded-xl border border-[#d7dee8] bg-white shadow-lg z-[120] overflow-hidden">
                                {medicineSuggestions.map((product) => (
                                    <button
                                        key={product.id}
                                        type="button"
                                        onClick={() => handleSuggestionSelect(product.id)}
                                        className="w-full px-3 py-2.5 text-left hover:bg-[#f4f8ff] transition-colors border-b last:border-b-0 border-gray-100"
                                    >
                                        <p className="text-sm font-semibold text-[#1f2a37]">{product.name}</p>
                                        <p className="text-xs text-gray-500">{product.usage || product.composition}</p>
                                    </button>
                                ))}
                            </div>
                        )}
                    </form>

                    <nav className="flex flex-col gap-2">
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="p-3 hover:bg-gray-50 rounded-lg text-[#102a56] font-extrabold uppercase text-sm">HOME</Link>
                        <Link to="/#how-to-book" onClick={() => setIsMobileMenuOpen(false)} className="p-3 hover:bg-gray-50 rounded-lg text-gray-600 font-medium uppercase text-sm">HOW TO BOOK</Link>
                        <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="p-3 hover:bg-gray-50 rounded-lg text-gray-600 font-medium uppercase text-sm">PRODUCTS</Link>
                        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="p-3 hover:bg-gray-50 rounded-lg text-gray-600 font-medium uppercase text-sm">ABOUT US</Link>
                    </nav>

                    <a href="tel:+13468200015" className="w-full flex items-center justify-center gap-3 bg-[#1e4c8d] text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-blue-900 transition-colors shadow-md mt-2">
                        <Phone className="w-4 h-4 fill-current" />
                        <span>+1 346 820 0015</span>
                    </a>
                    <a href="mailto:info@medimarketusa.com" className="w-full flex items-center justify-center gap-3 bg-[#1e4c8d] text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-blue-900 transition-colors shadow-md">
                        <Mail className="w-4 h-4" />
                        <span>info@medimarketusa.com</span>
                    </a>
                </div>
            )}
        </header>
    );
}
