export interface FilterValues {
  location: {
    value: string;
    modifier: (newLocation: string) => () => void;
  };
  guests: {
    value: {
      adults: number;
      children: number;
    };
    modifier: {
      adults: (newAdults: number) => () => void;
      children: (newChildren: number) => () => void;
    };
  };
}
