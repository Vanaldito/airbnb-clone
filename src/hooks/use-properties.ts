import properties from "../constants/stays.json";

interface Property {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number | null;
  photo: string;
}

export function useProperties(): Property[] {
  return properties;
}
