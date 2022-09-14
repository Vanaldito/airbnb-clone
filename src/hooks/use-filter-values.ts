import { useState } from "react";
import { FilterValues } from "../types";

export function useFilterValues(): FilterValues {
  const [location, setLocation] = useState("Helsinki, Findland");
  const [guests, setGuests] = useState(0);

  function changeLocation(newLocation: string) {
    return () => {
      setLocation(newLocation);
    };
  }

  function changeGuests(newGuests: number) {
    return () => {
      setGuests(newGuests);
    };
  }

  return {
    location: { value: location, modifier: changeLocation },
    guests: { value: guests, modifier: changeGuests },
  };
}
