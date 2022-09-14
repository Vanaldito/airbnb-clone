export interface FilterValues {
  location: {
    value: string;
    modifier: (newLocation: string) => () => void;
  };
  guests: {
    value: number;
    modifier: (newGuests: number) => () => void;
  };
}
