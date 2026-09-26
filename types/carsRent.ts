export const carCategories = [
  "ECONOMY",
  "COMPACT",
  "SEDAN",
  "SUV",
  "LUXURY",
  "VAN",
  "CONVERTIBLE",
  "PICKUP",
] as const;

export const carFuels = ["PETROL", "DIESEL", "ELECTRIC", "HYBRID"] as const;

export type CarCategory = (typeof carCategories)[number];
export type CarFuel = (typeof carFuels)[number];
export type CarTransmission = "Automatic" | "Manual";

export const carFuelLabels: Record<CarFuel, string> = {
  PETROL: "Petrol",
  DIESEL: "Diesel",
  ELECTRIC: "Electric",
  HYBRID: "Hybrid",
};

export interface Car {
  id: string;
  brand: string;
  model: string;
  transmission: CarTransmission;
  fuel: CarFuel;
  category: CarCategory;
  year: number;
  seats: number;
  pricePerDay: number;
  isAvailable: boolean;
  image: string;
  slug: string;
}

export const cars: Car[] = [
  {
    id: "537cc809-580a-4977-9dd2-2701183f8018",
    brand: "Dacia",
    model: "Duster",
    transmission: "Automatic",
    fuel: "DIESEL",
    category: "SUV",
    year: 2019,
    seats: 5,
    pricePerDay: 450,
    isAvailable: true,
    image: "dacia-duster.webp",
    slug: "537cc809-580a-4977-9dd2-2701183f8018",
  },
  {
    id: "94217b92-01dc-4ad9-8e50-2b4bd58c8886",
    brand: "Dacia",
    model: "Sandero",
    transmission: "Manual",
    fuel: "PETROL",
    category: "ECONOMY",
    year: 2018,
    seats: 5,
    pricePerDay: 300,
    isAvailable: true,
    image: "dacia-sandero.webp",
    slug: "94217b92-01dc-4ad9-8e50-2b4bd58c8886",
  },
  {
    id: "ad0b697b-f1f9-4a3c-9e16-c358ed5bd888",
    brand: "Dacia",
    model: "Logan",
    transmission: "Manual",
    fuel: "DIESEL",
    category: "SEDAN",
    year: 2017,
    seats: 5,
    pricePerDay: 350,
    isAvailable: false,
    image: "dacia-logain.webp",
    slug: "ad0b697b-f1f9-4a3c-9e16-c358ed5bd888",
  },
  {
    id: "51bd85a6-e4b6-4432-8458-80e83d4736c9",
    brand: "Renault",
    model: "Clio 5",
    transmission: "Manual",
    fuel: "PETROL",
    category: "COMPACT",
    year: 2021,
    seats: 5,
    pricePerDay: 400,
    isAvailable: true,
    image: "renault-clio5.webp",
    slug: "51bd85a6-e4b6-4432-8458-80e83d4736c9",
  },
  {
    id: "a0f5ee13-0eaa-4b7d-a9b2-515127edee1b",
    brand: "Peugeot",
    model: "208",
    transmission: "Automatic",
    fuel: "PETROL",
    category: "COMPACT",
    year: 2022,
    seats: 5,
    pricePerDay: 450,
    isAvailable: true,
    image: "peugeot-208.webp",
    slug: "a0f5ee13-0eaa-4b7d-a9b2-515127edee1b",
  },
  {
    id: "citroen-c3",
    brand: "Citroën",
    model: "C3",
    transmission: "Automatic",
    fuel: "PETROL",
    category: "ECONOMY",
    year: 2019,
    seats: 5,
    pricePerDay: 350,
    isAvailable: true,
    image: "citroen-c3.svg",
    slug: "citroen-c3",
  },
  {
    id: "hyundai-i10",
    brand: "Hyundai",
    model: "i10",
    transmission: "Manual",
    fuel: "PETROL",
    category: "ECONOMY",
    year: 2018,
    seats: 4,
    pricePerDay: 320,
    isAvailable: true,
    image: "hyundai-i10.svg",
    slug: "hyundai-i10",
  },
  {
    id: "kia-picanto",
    brand: "Kia",
    model: "Picanto",
    transmission: "Manual",
    fuel: "PETROL",
    category: "ECONOMY",
    year: 2020,
    seats: 4,
    pricePerDay: 300,
    isAvailable: true,
    image: "kia-picanto.svg",
    slug: "kia-picanto",
  },
  {
    id: "toyota-yaris",
    brand: "Toyota",
    model: "Yaris",
    transmission: "Automatic",
    fuel: "HYBRID",
    category: "COMPACT",
    year: 2021,
    seats: 5,
    pricePerDay: 400,
    isAvailable: true,
    image: "toyota-yaris.svg",
    slug: "toyota-yaris",
  },
];

export interface Destination {
  name: string;
  description: string;
  image: string;
}

export interface HowItWorksStep {
  number: number;
  title: string;
  description: string;
  icon: "car" | "calendar" | "key";
}

export interface Feature {
  title: string;
  description: string;
  icon: "plane" | "infinity" | "headphones" | "credit-card";
}

export interface Brand {
  name: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavColumn {
  title: string;
  links: NavLink[];
}