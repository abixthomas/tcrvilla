// Luxury Property Data Generator
// Generates 100+ unique, high-end listings for the Revolutionary Properties Page

const LOCATIONS = [
    "Punkunnam", "Viyyur", "Kuttoor", "Puthur", "M.G. Road",
    "Ayyanthole", "Mannuthy", "Ollur", "Amala Nagar", "Sobha City Area"
];

const PROPERTY_TYPES = ["Villa", "Apartment", "Plot", "Farmhouse"];

const TITLES = [
    "Signature Riverside Villa", "Sky-High Luxury Penthouse", "Colonial Heritage Bungalow",
    "Modern Minimalist Haven", "Greenfield Farm Estate", "Royal Palace Residence",
    "Urban Chic Apartment", "Waterfront Serenity Home", "Architectural Masterpiece", "Garden Grove Villa"
];

const AMENITIES_POOL = [
    "Swimming Pool", "Home Theater", "Smart Automation", "Private Garden",
    "Helipad Access", "Golf Course View", "Italian Marble", "Solar Powered",
    "VRV AC System", "Butler Service", "Infinity Edge", "Rooftop Party Area"
];

// Curated high-quality Unsplash Collections for variety
const VILLA_IMAGES = [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600596542815-2a4d04774c13?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
];

const APT_IMAGES = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
];

const generateProperties = () => {
    return Array.from({ length: 108 }, (_, i) => {
        const typeOffset = i % 4;
        const type = PROPERTY_TYPES[typeOffset];
        const location = LOCATIONS[i % LOCATIONS.length];
        const titleBase = TITLES[i % TITLES.length];

        // Price Calculation with some randomness
        // Base: 40L, Max: 5Cr
        const basePrice = 4000000;
        const priceMultiplier = (i % 20) + 1;
        const price = basePrice + (priceMultiplier * 2500000);

        // Images allocation
        const baseImages = type === "Apartment" ? APT_IMAGES : VILLA_IMAGES;
        // Shift images to create variety
        const images = [
            baseImages[i % baseImages.length],
            baseImages[(i + 1) % baseImages.length],
            baseImages[(i + 2) % baseImages.length]
        ];

        // Random Amenities (3-6 per property)
        const amenityCount = (i % 4) + 3;
        const amenities = [];
        for (let j = 0; j < amenityCount; j++) {
            amenities.push(AMENITIES_POOL[(i + j) % AMENITIES_POOL.length]);
        }

        return {
            id: i + 1,
            title: `${titleBase} in ${location}`,
            type: type,
            location: location,
            price: price,
            bhk: (i % 5) + 2, // 2 to 6 BHK
            sqft: 1200 + (i * 85),
            status: i % 7 === 0 ? "Hot Deal" : i % 5 === 0 ? "Featured" : "New",
            images: images,
            amenities: amenities,
            coordinates: { // Pseudo-coordinates for Map viz
                lat: 10.5276 + (Math.random() * 0.1),
                lng: 76.2144 + (Math.random() * 0.1)
            },
            agent: {
                name: "Thrissur Elite Realty",
                phone: "+91 9846 123 456"
            }
        };
    });
};

export const propertiesData = generateProperties();
