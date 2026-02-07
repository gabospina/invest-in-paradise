// client/src/data/locations.ts

export interface Location {
    name: string;
    lat: number;
    lng: number;
    type: 'golf' | 'attraction';
    description: string;
    website: string;
    category: string;
}

export const puntaCanaLocations = {
    golfClubs: [
        {
            name: "Punta Cana Resort & Club",
            description: "Championship 18-hole golf course with ocean and lagoon views.",
            website: "https://www.puntacanagolf.com",
            lat: 18.5928,
            lng: -68.3881,
            type: 'golf' as const,
            category: "Championship Course"
        },
        {
            name: "Corales Golf Club",
            description: "Scenic 18-hole course designed by Tom Fazio with coastal views.",
            website: "https://www.coralesgolf.com",
            lat: 18.6050,
            lng: -68.4200,
            type: 'golf' as const,
            category: "PGA Tour Course"
        },
        {
            name: "Tortuga Bay Golf Club",
            description: "Luxury golf course with stunning Caribbean vistas.",
            website: "https://www.tortugabayresort.com",
            lat: 18.5800,
            lng: -68.3800,
            type: 'golf' as const,
            category: "Luxury Resort"
        },
        {
            name: "La Cana Golf Club",
            description: "Beautifully designed 18-hole course in tropical surroundings.",
            website: "https://www.lacanagolf.com",
            lat: 18.5980,
            lng: -68.3950,
            type: 'golf' as const,
            category: "Oceanfront Course"
        },
        {
            name: "Cocotal Golf & Country Club",
            description: "Designed by Jose 'Pepe' Gancedo, this course follows the natural terrain of an old coconut plantation.",
            website: "https://www.melia.com/en/golf/cocotal-golf-and-country-club",
            lat: 18.6758,
            lng: -68.4289,
            type: 'golf' as const,
            category: "Residential Golf"
        },
        {
            name: "Punta Espada Golf Club",
            description: "Jack Nicklaus signature course. Ranked #1 in the Caribbean and Mexico by Golfweek.",
            website: "https://www.puntaespadagolf.com",
            lat: 18.4125,
            lng: -68.3972,
            type: 'golf' as const,
            category: "World Class"
        }
    ],

    attractions: [
        {
            name: "Blue Mall Punta Cana",
            description: "Premium shopping destination featuring international luxury brands and fine dining.",
            website: "https://bluemallpuntacana.com.do",
            lat: 18.5298,
            lng: -68.3975,
            type: 'attraction' as const,
            category: "Shopping & Dining"
        },
        {
            name: "Bavaro Beach",
            description: "Pristine white sand beach with crystal-clear turquoise waters.",
            website: "https://www.bavaroresort.com",
            lat: 18.7150,
            lng: -68.4520,
            type: 'attraction' as const,
            category: "World-Class Beach"
        },
        {
            name: "Hoyo Azul",
            description: "Stunning natural cenote with crystal-clear blue waters.",
            website: "https://www.scapepark.com",
            lat: 18.5700,
            lng: -68.4100,
            type: 'attraction' as const,
            category: "Natural Wonder"
        },
        {
            name: "Manatí Park",
            description: "Ecological park with dolphin shows and tropical birds.",
            website: "https://www.manatipark.com",
            lat: 18.7350,
            lng: -68.4400,
            type: 'attraction' as const,
            category: "Family Park"
        },
        {
            name: "Indigenous Eyes Ecological Park",
            description: "Nature reserve with freshwater lagoons and hiking trails.",
            website: "https://www.indigenouseyes.com",
            lat: 18.5600,
            lng: -68.3900,
            type: 'attraction' as const,
            category: "Nature Reserve"
        },
        {
            name: "Bavaro Adventure Park",
            description: "Eco-adventure park offering zip-lining, buggy tours, and a flight simulator.",
            website: "https://bavaroadventurepark.com",
            lat: 18.6341,
            lng: -68.3995,
            type: 'attraction' as const,
            category: "Adventure"
        },
        {
            name: "Indigenous Eyes Nature Reserve",
            description: "A private protected area owned by the Puntacana Foundation, featuring 12 freshwater lagoons.",
            website: "https://www.puntacana.com/sustainability/nature-reserve",
            lat: 18.5130,
            lng: -68.3770,
            type: 'attraction' as const,
            category: "Nature Reserve"
        }
    ],

    // Helper functions
    getAllLocations(): Location[] {
        return [...this.golfClubs, ...this.attractions];
    },

    getByType(type: 'golf' | 'attraction'): Location[] {
        return type === 'golf' ? this.golfClubs : this.attractions;
    }
};