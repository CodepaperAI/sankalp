export interface Neighbourhood {
  slug: string;
  name: string;
  city: string;
  tagline: string;
  description: string[];
  stats: {
    avgPrice: string;
    avgDaysOnMarket: number;
    priceChangeYoY: string;
    activeListings: number;
  };
  highlights: string[];
  schools: string[];
  amenities: string[];
  transitNotes: string;
  idealFor: string[];
  seoTitle: string;
  seoDescription: string;
}

export const neighbourhoods: Neighbourhood[] = [
  {
    slug: "oakville",
    name: "Oakville",
    city: "Oakville",
    tagline: "Lakeside luxury meets family living.",
    description: [
      "Oakville is one of the most sought-after communities in the Greater Toronto Area — a blend of upscale lakeside living, top-ranked schools, and a charming downtown that feels worlds away from the city. With tree-lined streets, heritage estates, and some of the best waterfront in Ontario, it consistently ranks among Canada's best places to live.",
      "The south Oakville neighbourhoods along Lakeshore Road offer stately homes with mature lots, walking distance to boutique shopping and the harbour. Further north, communities like Glen Abbey, River Oaks, and Joshua Creek deliver newer builds with excellent school access and proximity to the QEW and GO Transit.",
      "For families relocating to the GTA, Oakville offers the rare combination of small-town charm with big-city accessibility — downtown Toronto is 35 minutes by GO train. The cultural scene includes the Oakville Centre for the Performing Arts, galleries along Lakeshore, and a thriving restaurant district.",
    ],
    stats: {
      avgPrice: "$1,650,000",
      avgDaysOnMarket: 18,
      priceChangeYoY: "+4.2%",
      activeListings: 245,
    },
    highlights: [
      "Lakefront trails and Bronte Creek Provincial Park",
      "Top-rated public and private schools (Appleby College, St. Mildred's)",
      "Charming downtown with independent shops and restaurants",
      "35 minutes to Union Station via GO Transit",
      "Strong appreciation history — consistent top performer",
    ],
    schools: [
      "Appleby College (private, K-12)",
      "St. Mildred's-Lightbourn School (private, girls)",
      "Abbey Park High School (public)",
      "Oakville Trafalgar High School (public)",
      "White Oaks Secondary School (public)",
    ],
    amenities: [
      "Glen Abbey Golf Club",
      "Sixteen Mile Creek trails",
      "Oakville Centre for the Performing Arts",
      "Bronte Harbour & Beach",
      "Whole Foods, Pusateri's, local farmers' market",
    ],
    transitNotes:
      "Oakville GO Station provides express service to Union Station (35 min). QEW and 403 access for drivers. Bronte GO Station serves the west end.",
    idealFor: ["Luxury buyers", "Families with school-age children", "Downsizers seeking lakeside living", "Commuters to downtown Toronto"],
    seoTitle: "Oakville Real Estate Guide — Homes, Schools, Market Data",
    seoDescription:
      "Explore Oakville real estate with Sankalp. Average home price $1.65M, top-ranked schools, lakeside living. Your complete neighbourhood guide to buying in Oakville, Ontario.",
  },
  {
    slug: "brampton",
    name: "Brampton",
    city: "Brampton",
    tagline: "Community, culture, and room to grow.",
    description: [
      "Brampton is one of the fastest-growing cities in Canada — and one of the most culturally vibrant. With a young, diverse population, excellent value for space, and a strong sense of community, it's become the destination of choice for families seeking larger homes without the Toronto price tag.",
      "Neighbourhoods like Credit Valley, Castlemore, and Vales of Humber offer spacious detached homes with 4-5 bedrooms, double-car garages, and family-sized lots. Mount Pleasant and Sandalwood bring newer builds with modern finishes. Heart Lake and Bramalea offer established communities with mature trees and parks.",
      "For South Asian families in particular, Brampton offers an unmatched cultural infrastructure — mandirs, gurdwaras, South Asian grocery stores, Bollywood cinemas, and community centres are woven into the fabric of daily life. The food scene rivals any in the GTA.",
    ],
    stats: {
      avgPrice: "$1,050,000",
      avgDaysOnMarket: 22,
      priceChangeYoY: "+2.8%",
      activeListings: 410,
    },
    highlights: [
      "Excellent value — 4-5 bed homes under $1.2M",
      "Rich cultural infrastructure and community centres",
      "Gage Park and Professor's Lake recreation areas",
      "Growing transit with Brampton GO and future LRT",
      "Strong rental demand for investment properties",
    ],
    schools: [
      "Heart Lake Secondary School (public)",
      "St. Edmund Campion Secondary School (Catholic)",
      "Turner Fenton Secondary School (public)",
      "Brampton Christian School (private)",
      "Guru Gobind Singh Children's Foundation School",
    ],
    amenities: [
      "Gage Park and community gardens",
      "Professor's Lake Recreation Centre",
      "Powerade Centre (now CAA Centre)",
      "Garden Square — outdoor events year-round",
      "Peel Art Gallery Museum and Archives",
    ],
    transitNotes:
      "Brampton GO Transit with service to Union Station (50 min). Züm rapid transit connects major corridors. Highway 410 and 407 ETR for drivers.",
    idealFor: ["First-time buyers", "Growing families", "Investors seeking rental income", "Newcomers from South Asia"],
    seoTitle: "Brampton Real Estate Guide — Homes, Community, Market Data",
    seoDescription:
      "Explore Brampton real estate with Sankalp. Average home price $1.05M, family-sized homes, vibrant community. Your complete guide to buying in Brampton, Ontario.",
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    city: "Mississauga",
    tagline: "Urban energy with suburban space.",
    description: [
      "Mississauga offers the best of both worlds — a downtown core with a growing skyline of luxury condos alongside established family neighbourhoods with tree-lined streets and top schools. As the sixth-largest city in Canada, it has its own identity, economy, and cultural scene.",
      "The City Centre / Square One area is a condo hotspot with rapid development — M City, Exchange District, and Parkside Village are transforming it into a true urban core. Lorne Park and Mineola offer estate-calibre homes near the lake. Erin Mills, Meadowvale, and Churchill Meadows provide excellent family communities.",
      "Port Credit is Mississauga's gem — a lakeside village with a main street feel, marinas, restaurants, and some of the most desirable real estate in the GTA. It's where the city meets the water, and demand consistently outpaces supply.",
    ],
    stats: {
      avgPrice: "$1,180,000",
      avgDaysOnMarket: 20,
      priceChangeYoY: "+3.5%",
      activeListings: 380,
    },
    highlights: [
      "Port Credit waterfront — the GTA's best-kept secret",
      "Square One City Centre — major condo development corridor",
      "Strong employment base (airport, corporate HQs)",
      "Excellent GO Transit and MiWay connections",
      "Diverse housing stock — condos to waterfront estates",
    ],
    schools: [
      "Cawthra Park Secondary School (arts, public)",
      "Lorne Park Secondary School (public)",
      "St. Francis Xavier Secondary School (Catholic)",
      "Applewood Heights Secondary School (public)",
      "Mentor College (private)",
    ],
    amenities: [
      "Port Credit Harbour and Marina",
      "Celebration Square — festivals and skating",
      "Rattray Marsh Conservation Area",
      "Square One Shopping Centre",
      "Living Arts Centre — performing arts",
    ],
    transitNotes:
      "Multiple GO stations (Port Credit, Cooksville, Erindale, Meadowvale). MiWay bus network. Highway 403, QEW, and 401 access. Pearson Airport 15 minutes away.",
    idealFor: ["Condo investors (Square One)", "Waterfront luxury buyers (Port Credit)", "Families (Erin Mills, Meadowvale)", "Pre-construction investors"],
    seoTitle: "Mississauga Real Estate Guide — Condos, Homes, Market Data",
    seoDescription:
      "Explore Mississauga real estate with Sankalp. From Port Credit waterfront to Square One condos. Average home price $1.18M. Your complete neighbourhood guide.",
  },
  {
    slug: "yorkville",
    name: "Yorkville",
    city: "Toronto",
    tagline: "Toronto's most prestigious address.",
    description: [
      "Yorkville is Toronto's premier luxury neighbourhood — where designer boutiques, world-class dining, and some of the country's most valuable real estate converge. Located north of Bloor between Avenue Road and Yonge, it's the address that signals arrival.",
      "The residential market is dominated by ultra-luxury condos — One Bloor, The Residences at the Four Seasons, 1 Yorkville, and the upcoming towers that continue to reshape the skyline. Prices per square foot regularly exceed $2,000, and penthouses have traded above $20M.",
      "Beyond the condos, the Victorian and Edwardian houses on streets like Hazelton, Scollard, and Berryman remain among the most exclusive freehold properties in Canada. The neighbourhood's cultural weight — ROM, AGO, Royal Conservatory — adds a dimension that pure luxury can't buy.",
    ],
    stats: {
      avgPrice: "$2,800,000",
      avgDaysOnMarket: 28,
      priceChangeYoY: "+1.8%",
      activeListings: 95,
    },
    highlights: [
      "Canada's most valuable residential real estate per sqft",
      "Walking distance to ROM, AGO, Royal Conservatory",
      "Designer retail — Holt Renfrew, Hermès, Louis Vuitton",
      "World-class dining on Avenue Road and Cumberland",
      "Bloor-Yonge subway interchange — best transit in the city",
    ],
    schools: [
      "University of Toronto Schools (public, gifted)",
      "Branksome Hall (private, girls)",
      "Upper Canada College (private, nearby)",
      "Jesse Ketchum Junior and Senior Public School",
      "De La Salle College (Catholic, nearby)",
    ],
    amenities: [
      "Royal Ontario Museum (ROM)",
      "Art Gallery of Ontario (AGO)",
      "Yorkville Village and Cumberland Terrace",
      "Philosopher's Walk and Queen's Park",
      "Sassafraz, Café Boulud, Sotto Sotto restaurants",
    ],
    transitNotes:
      "Bloor-Yonge interchange — all subway lines converge. Bay and Museum stations also serve the area. Walking distance to everything.",
    idealFor: ["Ultra-luxury condo buyers", "International investors", "Downsizers from North Toronto estates", "Professionals seeking walkable urban living"],
    seoTitle: "Yorkville Real Estate Guide — Luxury Condos & Homes in Toronto",
    seoDescription:
      "Explore Yorkville real estate with Sankalp. Toronto's most prestigious neighbourhood — luxury condos from $1M to $20M+. Average price $2.8M. Your complete guide.",
  },
  {
    slug: "king-city",
    name: "King City",
    city: "King",
    tagline: "Estate living north of the city.",
    description: [
      "King City and the Township of King offer something increasingly rare in the GTA — genuine estate living. Rolling hills, horse farms, conservation land, and multi-acre lots create a landscape that feels more countryside than suburb, yet downtown Toronto is under an hour away.",
      "The area is home to some of the GTA's most prestigious estates — properties on 2-10+ acre lots with custom builds, private ponds, tennis courts, and equestrian facilities. Neighbourhoods like King's Ridge, Kingscross, and the hamlets of Schomberg and Nobleton each have distinct character.",
      "King appeals to buyers who have 'done' the city — families seeking space, privacy, and nature without sacrificing access. The community is tight-knit, the schools are strong, and the quality of life is consistently rated among Ontario's best.",
    ],
    stats: {
      avgPrice: "$2,200,000",
      avgDaysOnMarket: 35,
      priceChangeYoY: "+3.1%",
      activeListings: 65,
    },
    highlights: [
      "Multi-acre estate lots — 2 to 10+ acres available",
      "Equestrian country — riding clubs and horse facilities",
      "Cold Creek Conservation Area and Seneca forest",
      "Strong community identity — farmers' markets, fall fairs",
      "Country Club of King and several premium golf courses",
    ],
    schools: [
      "Country Day School (private, K-12)",
      "Villanova College (private, Catholic)",
      "King City Secondary School (public)",
      "Nobleton Public School",
      "Holy Name Catholic School",
    ],
    amenities: [
      "Country Club of King (golf)",
      "King Heritage & Cultural Centre",
      "Cold Creek Conservation Area",
      "Seneca College King Campus",
      "Local wineries and farm-to-table dining",
    ],
    transitNotes:
      "King City GO Station provides service to Union Station (55 min). Highway 400 corridor for drivers. The area is car-dependent — most properties are rural or semi-rural.",
    idealFor: ["Luxury estate buyers", "Equestrian enthusiasts", "Families seeking acreage and privacy", "Retirees looking for country living near the city"],
    seoTitle: "King City Real Estate Guide — Estates, Acreage, Market Data",
    seoDescription:
      "Explore King City real estate with Sankalp. Estate homes on 2-10+ acres, equestrian properties, country living. Average price $2.2M. Your complete King Township guide.",
  },
];
