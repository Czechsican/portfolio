import type { Medium, PhotoInfo } from "./types";

export const photoInfo: Record<string, PhotoInfo> = {
  // 'art/phil.jpg': {
  //   medium: 'film',
  //   blurb: 'Phil, backstage in Calgary.',
  //   location: 'Calgary',
  //   country: 'Canada',
  //   details: [['Camera', 'Rolleiflex'], ['Film', 'Ilford HP5'], ['Year', '2020']],
  // },
  "art/neworleans.jpg": {
    medium: "120mm",
    blurb: "Second Line Funeral Procession",
    location: "New Orleans, Louisiana",
    country: "USA",
    details: [["Camera", "Rolleiflex"]],
  },
  "art/Theresienstadt_Block-A.jpg": {
    medium: "120mm",
    blurb: "The Window, Theresienstadt",
    location: "Terezín",
    country: "Czechia",
    details: [["Camera", "Rolleiflex"]],
  },
  "art/Theresienstadt_admin.jpg": {
    medium: "120mm",
    blurb: "Administrator Office, Theresienstadt",
    location: "Terezín",
    country: "Czechia",
    details: [["Camera", "Rolleiflex"]],
  },
  "art/Theresienstadt_Room.jpg": {
    medium: "120mm",
    blurb: "The Room, Theresienstadt",
    location: "Terezín",
    country: "Czechia",
    details: [["Camera", "Rolleiflex"]],
  },
  "art/2021_09_25_Rolleiflex_D3200_Skull.jpg": {
    medium: "120mm",
    blurb: "Ghouls Night Out",
    location: "P.N.E, Vancouver, BC",
    country: "Canada",
    details: [["Camera", "Rolleiflex"]],
  },
  "art/2025_Feb_Rollei_Kent_07.jpg": {
    medium: "120mm",
    blurb: "Shoes on the Danube Bank",
    location: "Budapest",
    country: "Hungary",
    details: [["Camera", "Rolleiflex"]],
  },    
  "art/2020_09_Canon_Tmax400_31_.jpg": {
    medium: "35mm", 
    blurb: "The Sunshine Bores The Daylights Out of Me",
    location: "Vancouver, BC",
    country: "Canada",
    details: [["Canon AE1", "TMax 400"]],
  },
  "art/2020_11_08_Rollei_Hp5_102020.jpg": {
    medium: "120mm",
    blurb: "Hot Rocks",
    location: "False Creek, Vancouver, BC",
    country: "Canada",
    details: [["Camera", "Rolleiflex"]],
  },
  "art/241031_RolleiFP4_B_06-2.jpg": {
    medium: "120mm",
    blurb: "Cemetary Gates",
    location: "New Orleans, Louisiana",
    country: "USA",
    details: [["Camera", "Rolleiflex"]],
  },  
  "art/2022_06_11_Wedding_Rolleicord_Acros_04.jpg": {
    medium: "120mm",
    blurb: "Wedding Party",
    location: "Grand Valley, Ontario",
    country: "Canada",
    details: [["Camera", "Rolleiflex"]],
  },
  "art/Change_07.jpg": {
    medium: "digital",
    blurb: "Change - Closer Still Promo shot",
    location: "Vancouver, BC",
    country: "Canada",
    details: [["Camera", "Sony A7II"]],
  },  
  "art/Ottawa.jpg": {
    medium: "digital",
    blurb: "Last minute bookstore floor show",
    location: "Ottawa, Ontario",
    country: "Canada",
    details: [["Camera", "Sony A7II"]],
  },  
  "art/california-dunes.jpg": {
    medium: "digital",
    blurb: "Shifting Sands Washing Over Me",
    location: "Imperial Sand Dunes, California",
    country: "USA",
    details: [["Camera", "Sony A7II"]],
  },
  "art/Barca_02.jpg": {
    medium: "digital", // TODO: 'digital' | '120mm' | '35mm'
    blurb: "Alleyways and Avenues",
    location: "Barcelona",
    country: "Catalonia",
    details: [["Camera", "Sony A7II"]],
  },
  "art/strathcona.jpg": {
    medium: "digital", // TODO: 'digital' | '120mm' | '35mm'
    blurb: "Train Yard",
    location: "Vancouver, BC",
    country: "Canada",
    details: [["Camera", "Sony A7II"]],
  },
  "art/SunkenCity5_06_09_19.jpg": {
    medium: "digital", // TODO: 'digital' | '120mm' | '35mm'
    blurb: "Hello Beautiful",
    location: "Sunken City, California",
    country: "USA",
    details: [["Camera", "Sony A7II"]],
  },
  "art/SunkenCity6_06_09_19.jpg": {
    medium: "digital", // TODO: 'digital' | '120mm' | '35mm'
    blurb: "Mark & Keith",
    location: "Sunken City, California",
    country: "USA",
    details: [["Camera", "Sony A7II"]],
  },
  "art/XVX04394.jpg": {
    medium: "digital", // TODO: 'digital' | '120mm' | '35mm'
    blurb: "DUMBO",
    location: "New York City, New York",
    country: "USA",
    details: [["Camera", "Sony A7II"]],
  },
  "art/XVX04545.jpg": {
    medium: "digital", // TODO: 'digital' | '120mm' | '35mm'
    blurb: "Rockers",
    location: `Hadrian's Wall`,
    country: "UK",
    details: [["Camera", "Sony A7II"]],
  },

  // live shots

  "live/2021_12_05_NikonFE_HP5_24.jpg": {
    medium: "35mm",
    blurb: "BOLD - SPEAK OUT",
    location: "Bullet Farm, Vancouver, BC",
    country: "Canada",
    details: [["Camera", "Nikon FE"]],
  },
  "live/flipper_14.jpg": {
    medium: "digital",
    blurb: "Flipper",
    location: "The Astoria, Vancouver, BC",
    country: "Canada",
    details: [["Camera", "Sony A7II"]],
  },
  "live/2022_04_16_HP5_NikonFE_19.jpg": {
    medium: "35mm",
    blurb: "Victim of None",
    location: "Vera Project, Seattle, WA",
    country: "USA",
    details: [["Camera", "Nikon FE"]],
  },
  "live/Fashionism_reverse.jpg": {
    medium: "35mm",
    blurb: "Fashionism",
    location: "Wise Hall, Vancouver, BC",
    country: "Canada",
    details: [["Camera", "Nikon FE"]],
  },
  "live/251024_HolgaHP5_10.jpg": {
    medium: "120mm",
    blurb: "In Stride",
    location: "Red Gate, Vancouver, BC",
    country: "Canada",
    details: [["Camera", "Holga 120"]],
  },
  "live/Holga_Fomo200_04.jpg": {
    medium: "120mm",
    blurb: "Meantime",
    location: "The Cobalt, Vancouver, BC",
    country: "Canada",
    details: [["Camera", "Holga 120"]],
  },
  "live/Holga_Fomo200_03.jpg": {
    medium: "120mm",
    blurb: "Juice",
    location: "The Cobalt, Vancouver, BC",
    country: "Canada",
    details: [["Camera", "Holga 120"]],
  },
  "live/23-02_InitiateTour_25.jpg": {
    medium: "35mm",
    blurb: "Initiate",
    location: "Oxnard, CA",
    country: "USA",
    details: [["Camera", "Nikon FE"]],
  },
  "live/260321_Holga-Kent299_11.jpg": {
    medium: "120mm",
    blurb: "Huge Prick",
    location: "Alf House, Vancouver, BC",
    country: "Canada",
    details: [["Camera", "Holga 120"]],
  },
  "live/241115_HolgaFP4_4.jpg": {
    medium: "120mm",
    blurb: "Destiny Bond",
    location: "Flyover Fest, Tulsa, OK",
    country: "USA",
    details: [["Camera", "Holga 120"]],
  },
  "live/2025_09_Holga_03.jpg": {
    medium: "120mm",
    blurb: "PROWL (double exposure)",
    location: "The Seahorse Tavern, Halifax, NS",
    country: "Canada",
    details: [["Camera", ""]],
  },
  "live/26_10_10 10.jpg": {
    medium: "120mm",
    blurb: "Knucklehead Reunion",
    location: "The Cobalt, Vancouver, BC",
    country: "Canada",
    details: [["Camera", "Holga 120"]],
  },
};

export const mediumLabel: Record<Medium, string> = {
  digital: "Digital",
  "120mm": "120mm film",
  "35mm": "35mm film",
};

export const photoGroups: { folder: string; label: string }[] = [
  { folder: "art", label: "Art" },
  { folder: "live", label: "Live" },
];
