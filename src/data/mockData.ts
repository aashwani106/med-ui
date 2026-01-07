import banner1 from '../assets/hero/banner-1.png';
import banner2 from '../assets/hero/banner-2.png';
import banner3 from '../assets/hero/banner-3.png';
import frame9 from '../assets/cards/frame-9.png';
import medicineBg from '../assets/cards/medicine-bg.png';
// Note: We'll re-export images or use them in data structures here

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

// Trending Section Data
export const trendingProducts = Array(8).fill({
    name: "Medicine Name",
    usedFor: "Used for",
    price: "$400",
    image: medicineBg
});

export const trendingCategories = ["Medicine", "Vitamins", "Supplements", "Health Care"];

// Recommended Section Data
export const recommendedProducts = [
    {
        category: "Muscle Pain",
        name: "Pain Relief Gel",
        specs: "150ml • 24-hour relief",
        price: "$15.99",
        image: frame9
    },
    {
        category: "Symptom Relief",
        name: "Cold & Flu Relief",
        specs: "30 tablets • Fast acting",
        price: "$12.99",
        image: frame9
    },
    {
        category: "Gut Health",
        name: "Digestive Support",
        specs: "60 capsules • Daily formula",
        price: "$24.99",
        image: frame9
    },
    {
        category: "Bone Health",
        name: "Vitamin D3",
        specs: "90 softgels • High potency",
        price: "$18.99",
        image: frame9
    },
    {
        category: "Better Sleep",
        name: "Sleep Support",
        specs: "60 tablets • Natural formula",
        price: "$21.99",
        image: frame9
    },
    {
        category: "Mobility",
        name: "Joint Support",
        specs: "120 capsules • Triple action",
        price: "$32.99",
        image: frame9
    }
];

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

// Single Product Detail (Mock for the specific page request)
export const productDetails = {
    id: "brufen-600",
    name: "Brufen 600 Tablet",
    breadcrumbs: ["Home", "Trending this week", "Brufen 600 Tablet 15's"],
    image: frame9, // Using medicineBg as placeholder for main image
    images: [frame9, frame9, frame9, frame9], // Gallery
    boughtCount: "63 people bought in last 7 days",
    isPrescription: true,
    consumeType: "ORAL",
    returnPolicy: "NOT RETURNABLE",
    expiry: "2 Year",
    composition: "IBUPROFEN-600MG",
    manufacturer: "ABBOTT INDIA LTD",
    mrp: "$150",
    packaging: "15 Tablet",
    unitPrice: "$10/unit",
    description: "Brufen 600 Tablet is used to relieve mild to moderate pain, inflammation, and fever in adults and paediatrics above 6 months of age. It helps to treat conditions such as menstrual cramps, headache, neuralgia (nerve-related pain), migraine, back pain, dental pain, swelling and stiffness in joints and muscles, cold, and flu symptoms.\n\nBrufen 600 Tablet contains 'Ibuprofen', which works by blocking the effect of a chemical messenger in the body. It is known as cyclo-oxygenase (COX) enzymes that make other chemical prostaglandins. These prostaglandins are produced at injury sites and cause pain and swelling. By blocking the COX enzymes' effect, fewer prostaglandins are produced, which reduces mild to moderate pain, inflammation, and fever.",
    uses: [
        {
            title: "Pain Relief",
            description: "Brufen 600 Tablet is widely used to relieve mild to moderate pain, including headaches, menstrual cramps, toothaches, and muscle aches, offering effective comfort."
        },
        {
            title: "Anti-Inflammatory",
            description: "Brufen 600 Tablet reduces inflammation and swelling associated with various conditions such as arthritis and injuries, supporting recovery and mobility."
        },
        {
            title: "Fever Reduction",
            description: "Brufen 600 Tablet is effective in lowering fever in both adults and children, making it a trusted option for managing fever caused by illnesses or infections."
        },
        {
            title: "Post-Surgical Pain Management",
            description: "After surgical procedures, Brufen 600 Tablet is often prescribed to relieve pain and inflammation, aiding in a smoother recovery."
        },
        {
            title: "Osteoarthritis and Rheumatoid Arthritis",
            description: "Brufen 600 Tablet plays a role in managing chronic pain and improving joint function as part of treatment plans for osteoarthritis and rheumatoid arthritis."
        }
    ]
};
