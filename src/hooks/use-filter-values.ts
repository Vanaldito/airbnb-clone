import { useState } from "react";
import { FilterValues } from "../types";

export function useFilterValues(): FilterValues {
  const [location, setLocation] = useState("Helsinki, Finland");
  const [guestsChildren, setGuestsChildren] = useState(0);
  const [guestsAdults, setGuestsAdults] = useState(0);

  function changeLocation(newLocation: string) {
    return () => {
      setLocation(newLocation);
    };
  }

  function changeGuestsChildren(newChildren: number) {
    return () => {
      setGuestsChildren(newChildren);
    };
  }

  function changeGuestsAdults(newAdults: number) {
    return () => {
      setGuestsAdults(newAdults);
    };
  }

  return {
    location: { value: location, modifier: changeLocation },
    guests: {
      value: {
        children: guestsChildren,
        adults: guestsAdults,
      },
      modifier: {
        children: changeGuestsChildren,
        adults: changeGuestsAdults,
      },
    },
  };
}
