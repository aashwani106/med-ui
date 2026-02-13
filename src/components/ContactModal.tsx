import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName?: string;
}

export default function ContactModal({ isOpen, onClose, productName = "Brufen 600 Tablet" }: ContactModalProps) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [countryCode, setCountryCode] = useState('US');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [quantity, setQuantity] = useState('5');
    const [message, setMessage] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const whatsappNumber = '13468200015';
        const fullName = `${firstName} ${lastName}`.trim() || 'N/A';
        const note = message.trim() || 'N/A';
        const qty = quantity.trim() || 'N/A';

        const whatsappMessage = [
            'Hello MediMarket USA,',
            '',
            'I would like to place an order.',
            `Medicine: ${productName}`,
            `Quantity: ${qty} Packets`,
            '',
            'Customer Details:',
            `Name: ${fullName}`,
            `Email: ${email || 'N/A'}`,
            `Phone: ${phone || 'N/A'} (${countryCode})`,
            `Address: ${address || 'N/A'}`,
            `Message: ${note}`
        ].join('\n');

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                />

                {/* Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto no-scrollbar"
                >
                    <div className="p-8">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                            <button
                                onClick={onClose}
                                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>

                        {/* Form */}
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            {/* Name Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-gray-700">First name</label>
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-gray-700">Last name</label>
                                    <input
                                        type="text"
                                        placeholder="First name" // Screenshot has "First name" placeholder for last name too, but keeping it 'Last name' is better UX? User screenshot shows 'First name' inside Last name field. I'll stick to screenshot which is 'First name'.
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Email & Phone */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        placeholder="you@company.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-gray-700">Phone number</label>
                                    <div className="flex rounded-lg border border-gray-200 overflow-hidden focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                                        <select
                                            value={countryCode}
                                            onChange={(e) => setCountryCode(e.target.value)}
                                            className="px-3 py-2.5 bg-transparent border-r border-gray-200 text-gray-600 font-medium outline-none bg-white"
                                        >
                                            <option>US</option>
                                            <option>IN</option>
                                        </select>
                                        <input
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                            className="w-full px-4 py-2.5 outline-none placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-gray-700">Address</label>
                                <input
                                    type="text"
                                    placeholder="you@company.com" // Placeholder from screenshot
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400"
                                />
                            </div>

                            {/* Medicine & Quantity */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-gray-700">Medicine</label>
                                    <input
                                        type="text"
                                        defaultValue={productName}
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 outline-none"
                                        readOnly
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-gray-700">Quantity</label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)}
                                            min={1}
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">Packets</span>
                                    </div>
                                </div>
                            </div>


                            {/* Message */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-gray-700">Message</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400 min-h-[120px] resize-none"
                                />
                            </div>

                            {/* Privacy Checkbox */}
                            <div className="flex items-start gap-3 pt-2">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    required
                                    className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor="privacy" className="text-sm text-gray-600 cursor-pointer">
                                    You agree to our friendly <a href="#" className="underline decoration-gray-400 underline-offset-2 hover:text-gray-900">privacy policy</a>.
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#102a56] hover:bg-[#1e4c8d] text-white py-3 px-6 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-[0.98]"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
