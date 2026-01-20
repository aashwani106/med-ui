const fs = require('fs');
const path = require('path');

const data = require('../temp_products.json');

const slugify = (text) => text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

const products = data.map(item => {
    return {
        id: slugify(item['Medicine Name']),
        name: item['Medicine Name'],
        breadcrumbs: ["Home", "Products", item['Medicine Name']],
        image: "frame9", // placeholder, will replacing string with variable in final file
        images: ["frame9", "frame9", "frame9", "frame9"],
        boughtCount: `${Math.floor(Math.random() * 100) + 20} people bought in last 7 days`,
        isPrescription: item['Category'].toLowerCase().includes('prescription') || item['Category'].toLowerCase().includes('opioid') || item['Category'].toLowerCase().includes('benzodiazepine'),
        consumeType: "ORAL",
        returnPolicy: "NOT RETURNABLE",
        expiry: "2 Year",
        composition: item['Composition'],
        manufacturer: "PHARMACEUTICALS LTD", // Default
        mrp: `$${item['MRP (USD)']}`,
        packaging: `${item['Quantity']} Units`,
        unitPrice: `$${item['Price per Unit (USD)']}/unit`,
        description: item['Product Introduction'],
        uses: [
            { title: "Uses", description: item['Uses'] },
            { title: "Benefits", description: item['Benefits'] },
            { title: "Side Effects", description: item['Side Effects'] },
            { title: "How to Use", description: item['How to Use'] }
        ]
    };
});

const tsContent = `import banner1 from '../assets/hero/banner-1.png';
import banner2 from '../assets/hero/banner-2.png';
import banner3 from '../assets/hero/banner-3.png';
import frame9 from '../assets/cards/frame-9.png';
import medicineBg from '../assets/cards/medicine-bg.png';

// Hero Slides Data
export const heroSlides = [
    {
        id: 1,
        title: "Your Prescription for Affordable Health Solutions!",
        description: "Elevate your health journey with exclusive discounts and unparalleled convenience. Your path to well-being starts here, where every purchase is a prescription for savings.",
        image: banner1,
        isOffer: false,
        theme: 'dark'
    },
    {
        id: 2,
        preTitle: "Todays Hot Offer",
        title: "Unlock 50% Off on Essential Medicines!",
        description: "Embrace wellness without breaking the bank! Enjoy a generous 25% discount on a wide range of vital medicines at our online pharmacy. Your health matters, and so does your budget.",
        image: banner2,
        isOffer: true,
        theme: 'light'
    },
    {
        id: 3,
        title: "Your Prescription for Affordable Health Solutions!",
        description: "Elevate your health journey with exclusive discounts and unparalleled convenience. Your path to well-being starts here, where every purchase is a prescription for savings.",
        image: banner3,
        isOffer: false,
        theme: 'light'
    }
];

// Category Bar Data
export const categories = [
    "Pain Relief",
    "Cold and Flu",
    "Diabetes Care",
    "Digestive Health",
    "First Aid",
    "Skin Care",
    "Heart Health",
    "Respiratory Health"
];

// All Products Data
export const allProducts = ${JSON.stringify(products, null, 4).replace(/"frame9"/g, 'frame9')};

// Trending Section Data (Sliced from allProducts)
export const trendingProducts = allProducts.slice(0, 8).map(p => ({
    name: p.name,
    usedFor: p.uses[0].description,
    price: p.mrp,
    image: p.image
}));

export const trendingCategories = ["Medicine", "Vitamins", "Supplements", "Health Care"];

// Recommended Section Data (Sliced & mapped)
export const recommendedProducts = allProducts.slice(8, 14).map(p => ({
    category: p.uses[0].description.split(',')[0] || "Health",
    name: p.name,
    specs: p.packaging + " • " + p.expiry,
    price: p.unitPrice.split('/')[0], // simplistic
    image: p.image
}));

// Latest News Data
export const newsItems = [
    {
        date: "August 11,2025",
        category: "US Medicine",
        title: "In this section, we delve into various aspects of health",
        description: "Explore the world of medical specialties through our blog's spotlight feature. From...",
        tags: ["Examination gloves", "Uncategorized"]
    },
    {
        date: "August 11,2025",
        category: "US Medicine",
        title: "Discover a treasure trove of practical tips for enhancing",
        description: "From nutrition advice to exercise routines, we're here to support your journey toward...",
        tags: ["Examination gloves", "Uncategorized"]
    },
    {
        date: "August 11,2025",
        category: "US Medicine",
        title: "Our patients' journeys are filled with courage, resilienc...",
        description: "In this section, we share inspiring narratives of individuals who have overcome health c...",
        tags: ["Examination gloves", "Uncategorized"]
    },
    {
        date: "August 11,2025",
        category: "US Medicine",
        title: "From organizing health fairs to partnering with local organiz...",
        description: "Find out how you can participate in community events and contribute to the h...",
        tags: ["Examination gloves", "Uncategorized"]
    }
];

// Process Steps Data
export const processSteps = [
    {
        number: 1,
        title: "Send Query",
        description: "Browse medicines, add to query cart, and send us your request.",
        color: "bg-[#FFF4D9] text-[#AD842A]"
    },
    {
        number: 2,
        title: "Order Confirmation",
        description: "Our team will contact you to confirm availability.",
        color: "bg-[#DFF6FF] text-[#2A84AD]"
    },
    {
        number: 3,
        title: "Secure Payment",
        description: "Once confirmed, complete your payment securely online.",
        color: "bg-[#E4F8D7] text-[#5B8D2A]"
    },
    {
        number: 4,
        title: "Delivery",
        description: "our medicines will be packed and delivered to your doorstep.",
        color: "bg-[#EBEBFF] text-[#5B5BBD]"
    }
];

// Banner Grid Data (IDs for mapping)
export const bannerGridItems = [1, 2, 3];

// Default product details fallback (First item)
export const productDetails = allProducts[0];
`;

fs.writeFileSync(path.resolve(__dirname, '../src/data/mockData.ts'), tsContent);
console.log('mockData.ts rewritten successfully.');
