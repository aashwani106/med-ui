import { Twitter, Facebook, Instagram, Github } from 'lucide-react';
import mainLogo from '../assets/main-logo.png';

// Since I don't see payment icons in assets, I'll use placeholders or icons from a library if available, otherwise text.
// Actually, I can use simple text or icon components for payment methods if necessary, or just skip if no assets. 
// However, the screenshot shows "PayPal", "VISA", "Mastercard", "eBay" (likely branding). 
// I'll stick to text/icons for now.

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="w-full max-w-[95%] mx-auto px-4">


                {/* Contact Info Row (as per screenshot layout which is a bit unique, grid-like) */}
                {/* Re-evaluating screenshot: 
                    It looks like a row for "Company" title, then columns below it? 
                    Or "Company" is a column header, and "Page1", "Page1", "Page1" are items in that column?
                    Looking closely at the screenshot structure:
                    Left: Logo + Text + Socials
                    Middle-Right Grid:
                    Row 1: Label "COMPANY", Item "Page1", Item "Page1", Item "Page1" -> This looks like horizontal distribution?
                    Row 2: Label "CONTACT US", Item "Phone...", Item "Email...", Item "Address..."
                    
                    Let's adjust grid to match this specific table-like layout.
                 */}

                <div className="hidden md:grid md:grid-cols-[1.5fr_3fr] gap-12 mb-16">
                    {/* Left: Brand */}
                    <div className="flex flex-col gap-6">
                        <img src={mainLogo} alt="Medimarket USA" className="h-[50px] w-auto object-contain self-start" />
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Clarity gives you the blocks and components you need to create a truly professional website.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-900 hover:text-gray-900 transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#1e40af] border border-[#1e40af] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-900 hover:text-gray-900 transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-900 hover:text-gray-900 transition-colors">
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Info Grid */}
                    <div className="flex flex-col justify-center gap-12">
                        {/* Row 1 */}
                        <div className="grid grid-cols-4 items-start">
                            <h3 className="text-[#3B82F6] font-bold text-xs tracking-widest uppercase">COMPANY</h3>
                            <a href="#" className="text-gray-500 text-sm hover:text-gray-900">Page1</a>
                            <a href="#" className="text-gray-500 text-sm hover:text-gray-900">Page1</a>
                            <a href="#" className="text-gray-500 text-sm hover:text-gray-900">Page1</a>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-4 items-start">
                            <h3 className="text-[#3B82F6] font-bold text-xs tracking-widest uppercase">CONTACT US</h3>
                            <div>
                                <span className="text-gray-500 text-xs block mb-1">Phone Number</span>
                                <span className="text-gray-900 text-sm font-medium">+1 312 589 6300</span>
                            </div>
                            <div>
                                <span className="text-gray-500 text-xs block mb-1">Email</span>
                                <span className="text-gray-900 text-sm font-medium">+1 312 589 6300</span>
                            </div>
                            <div>
                                <span className="text-gray-500 text-xs block mb-1">Address</span>
                                <span className="text-gray-900 text-sm font-medium">+1 312 589 6300</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile version (simplified stack) */}
                <div className="md:hidden flex flex-col gap-8 mb-12">
                    <div className="flex flex-col gap-6">
                        <img src={mainLogo} alt="Medimarket USA" className="h-12 w-auto object-contain self-start" />
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Clarity gives you the blocks and components you need to create a truly professional website.
                        </p>
                        {/* Socials */}
                        <div className="flex gap-4">
                            {/* ... simplified icons for mobile ... */}
                            <Twitter className="w-5 h-5 text-gray-400" />
                            <Facebook className="w-5 h-5 text-blue-600" />
                            <Instagram className="w-5 h-5 text-gray-400" />
                            <Github className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                    {/* Mobile Links */}
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[#3B82F6] font-bold text-xs tracking-widest uppercase">COMPANY</h3>
                            <a href="#" className="text-gray-500 text-sm hover:text-gray-900">Page1</a>
                            <a href="#" className="text-gray-500 text-sm hover:text-gray-900">Page1</a>
                            <a href="#" className="text-gray-500 text-sm hover:text-gray-900">Page1</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[#3B82F6] font-bold text-xs tracking-widest uppercase">CONTACT US</h3>
                            <div>
                                <span className="text-gray-500 text-xs block mb-1">Phone Number</span>
                                <span className="text-gray-900 text-sm font-medium">+1 312 589 6300</span>
                            </div>
                            <div>
                                <span className="text-gray-500 text-xs block mb-1">Email</span>
                                <span className="text-gray-900 text-sm font-medium">+1 312 589 6300</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        <span className="font-medium text-gray-900">Privacy Policy</span> / Medi market USA © 2026 / All Rights Reserved
                    </p>

                    <div className="flex items-center gap-4">
                        {/* Payment Icons Placeholder - using text/styled blocks to represent images as I don't have the exact svg assets handy, simulating the look */}
                        <span className="text-[#003087] font-bold italic text-lg">PayPal</span>
                        <span className="text-[#1A1F71] font-bold text-lg">VISA</span>
                        <div className="flex -space-x-1">
                            <div className="w-3 h-3 rounded-full bg-[#EB001B]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#F79E1B]"></div>
                        </div>
                        <span className="text-[#E53238] font-bold text-lg">ebay</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
