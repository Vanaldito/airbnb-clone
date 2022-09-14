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

export function useProperties(
  city: string,
  country: string,
  guests: number
): Property[] {
  return properties.filter(
    property =>
      property.city === city &&
      property.country === country &&
      property.maxGuests >= guests
  );
}
