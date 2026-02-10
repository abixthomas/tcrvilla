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
    "VRV AC System", "Butler Service", "Infinity Edge", "Rooftop Party Area",
    "Gym", "Security", "Parking", "Wi-Fi", "Power Backup"
];

// ULTRA-SAFE VERIFIED IMAGE SET (Re-using best performing images across categories)
const SAFE_ID_1 = "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80"; // Modern House
const SAFE_ID_2 = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"; // White Villa
const SAFE_ID_3 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"; // Modern Facade (Replacement for broken link)

const SAFE_APT_1 = "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"; // Modern Living Room
const SAFE_APT_2 = "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"; // Loft
const SAFE_APT_3 = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"; // Apartment Building

const VILLA_IMAGES = [SAFE_ID_1, SAFE_ID_2, SAFE_ID_3];
const APT_IMAGES = [SAFE_APT_1, SAFE_APT_2, SAFE_APT_3];
const PLOT_IMAGES = [SAFE_APT_3, SAFE_APT_1, SAFE_APT_2]; // Using Apt images for Plots
const FARM_IMAGES = [SAFE_APT_2, SAFE_APT_3, SAFE_APT_1]; // Using Apt images for Farms

// Title mappings by type for consistency
const TYPE_TITLES = {
    "Villa": ["Signature Riverside Villa", "Colonial Heritage Bungalow", "Modern Minimalist Haven", "Royal Palace Residence", "Garden Grove Villa", "Luxury Courtyard Home"],
    "Apartment": ["Sky-High Luxury Penthouse", "Urban Chic Apartment", "Architectural Masterpiece", "Premium City Suite", "Infinity Tower Flat"],
    "Plot": ["Prime Riverside Plot", "Commercial Highway Land", "Exclusive Gated Plot", "Scenic Hilltop Land"],
    "Farmhouse": ["Greenfield Farm Estate", "Serene Plantation Retreat", "Organic Eco Farm Stay", "Weekend Getaway Farm"]
};

const generateProperties = () => {
    return Array.from({ length: 108 }, (_, i) => {
        const typeOffset = i % 4;
        const type = PROPERTY_TYPES[typeOffset];
        const location = LOCATIONS[i % LOCATIONS.length];

        // Pick a relevant title for the type
        const typeSpecificTitles = TYPE_TITLES[type] || TITLES;
        const titleBase = typeSpecificTitles[i % typeSpecificTitles.length];

        // Price Calculation
        const basePrice = 4000000;
        const priceMultiplier = (i % 20) + 1;
        const price = basePrice + (priceMultiplier * 2500000);

        // Images allocation
        let baseImages = VILLA_IMAGES;
        if (type === "Apartment") baseImages = APT_IMAGES;
        else if (type === "Plot") baseImages = PLOT_IMAGES;
        else if (type === "Farmhouse") baseImages = FARM_IMAGES;

        // Shift images to create variety - Ensure modulo always hits a valid index
        const imgCount = baseImages.length;
        const secondIndex = (i + 1) % imgCount;
        const thirdIndex = (i + 2) % imgCount;

        const images = [
            baseImages[i % imgCount],
            baseImages[secondIndex],
            baseImages[thirdIndex]
        ];

        // Random Amenities
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
            bhk: type === "Plot" ? 0 : (i % 5) + 2,
            baths: type === "Plot" ? 0 : (i % 5) + 2,
            sqft: type === "Plot" ? (5 + (i % 20)) * 435 : 1200 + (i * 85),
            landArea: 5 + (i % 20),
            status: i % 7 === 0 ? "Hot Deal" : i % 5 === 0 ? "Featured" : "New",
            images: images,
            image: images[0], // Explicit fallback
            amenities: amenities,
            // DETERMINISTIC COORDINATES - No Math.random() to prevent hydration mismatch
            coordinates: {
                lat: 10.5276 + ((i % 10) * 0.01),
                lng: 76.2144 + ((i % 10) * 0.01)
            },
            agent: {
                name: "Thrissur Elite Realty",
                phone: "+91 9846 123 456"
            }
        };
    });
};

export const propertiesData = generateProperties();
