import { useContext } from "react";
import availableLocations from "../../constants/available-locations";
import FilterValues from "../../contexts/FilterValues";
import LocationIcon from "../Icons/Location";

export default function LocationFilterDrawer() {
  const filterValues = useContext(FilterValues);

  return (
    <ul className="location-filter-drawer">
      {availableLocations.map(location => (
        <li
          className="location-filter-drawer__select-location"
          onClick={filterValues?.location.modifier(location)}
          key={location}
        >
          <LocationIcon /> {location}
        </li>
      ))}
    </ul>
  );
}
