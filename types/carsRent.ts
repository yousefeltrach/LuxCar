export interface Car {
  id: string;
  brand: string;
  model: string;
  transmission: "Automatic" | "Manual";
  seats: number;
  pricePerDay: number;
  image: string;
  slug: string;
}

export const cars: Car[] = [
  {
    id: "7f577a38-77ed-409b-9017-a20d1425e3da",
    brand: "Audi",
    model: "A1",
    transmission: "Automatic",
    seats: 4,
    pricePerDay: 1000,
    image: "audi-a1.webp",
    slug: "7f577a38-77ed-409b-9017-a20d1425e3da",
  },
  {
    id: "537cc809-580a-4977-9dd2-2701183f8018",
    brand: "Dacia",
    model: "Duster",
    transmission: "Automatic",
    seats: 5,
    pricePerDay: 450,
    image: "dacia-duster.webp",
    slug: "537cc809-580a-4977-9dd2-2701183f8018",
  },
  {
    id: "94217b92-01dc-4ad9-8e50-2b4bd58c8886",
    brand: "Dacia",
    model: "Sandero",
    transmission: "Manual",
    seats: 5,
    pricePerDay: 300,
    image: "dacia-sandero.webp",
    slug: "94217b92-01dc-4ad9-8e50-2b4bd58c8886",
  },
  {
    id: "ad0b697b-f1f9-4a3c-9e16-c358ed5bd888",
    brand: "Dacia",
    model: "Logain",
    transmission: "Manual",
    seats: 5,
    pricePerDay: 350,
    image: "dacia-logain.webp",
    slug: "ad0b697b-f1f9-4a3c-9e16-c358ed5bd888",
  },
  {
    id: "51bd85a6-e4b6-4432-8458-80e83d4736c9",
    brand: "Renault",
    model: "Clio 5",
    transmission: "Manual",
    seats: 5,
    pricePerDay: 400,
    image: "renault-clio5.webp",
    slug: "51bd85a6-e4b6-4432-8458-80e83d4736c9",
  },
  {
    id: "a0f5ee13-0eaa-4b7d-a9b2-515127edee1b",
    brand: "Peugeot",
    model: "208",
    transmission: "Automatic",
    seats: 5,
    pricePerDay: 450,
    image: "peugeot-208.webp",
    slug: "a0f5ee13-0eaa-4b7d-a9b2-515127edee1b",
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