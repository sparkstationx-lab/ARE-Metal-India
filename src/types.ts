/**
 * Types and interfaces for ARE Metal India website
 */

export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  specifications: { label: string; value: string }[];
  keyFeatures: string[];
  applications: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  number: string;
  date: string;
  description: string;
}

export interface Client {
  name: string;
  logo: string;
  industry: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "manufacturing" | "products" | "testing" | "warehouse";
  image: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Statistic {
  label: string;
  value: string;
  suffix?: string;
}

export interface CoreValue {
  title: string;
  description: string;
  iconName: string;
}
