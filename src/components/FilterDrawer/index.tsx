import { useContext, useState } from "react";
import FilterValues from "../../contexts/FilterValues";
import CloseIcon from "../Icons/Close";
import SearchIcon from "../Icons/Search";
import GuestsFilterDrawer from "./GuestsFilterDrawer";
import LocationFilterDrawer from "./LocationFilterDrawer";

import "./styles.css";

interface FilterDrawerProps {
  defaultFieldToModify: "location" | "guests";
  closeDrawer: () => void;
}

export default function FilterDrawer({
  defaultFieldToModify,
  closeDrawer,
}: FilterDrawerProps) {
  const [fieldToModify, setFieldToModify] = useState(defaultFieldToModify);

  const filterValues = useContext(FilterValues);

  const totalGuests =
    (filterValues?.guests.value.children || 0) +
    (filterValues?.guests.value.adults || 0);

  return (
    <div className="filter-drawer">
      <header className="filter-drawer__header">
        <div>Edit you search</div>
        <button
          className="filter-drawer__close-button"
          type="button"
          onClick={closeDrawer}
        >
          <CloseIcon />
        </button>
      </header>
      <div className="filter-drawer__fields">
        <div
          className="filter-drawer__field"
          onClick={() => setFieldToModify("location")}
        >
          <div className="filter-drawer__field__title">Location</div>
          <div className="filter-drawer__field__value">
            {filterValues?.location.value}
          </div>
        </div>
        <div
          className="filter-drawer__field"
          onClick={() => setFieldToModify("guests")}
        >
          <div className="filter-drawer__field__title">Guests</div>
          <div className="filter-drawer__field__value">
            {totalGuests == 0 ? (
              <span className="filter-drawer__field__placeholder">
                Add guests
              </span>
            ) : (
              <span>
                {totalGuests} guest{totalGuests > 1 ? "s" : ""}
              </span>
            )}
          </div>
        </div>
      </div>
      {fieldToModify === "location" && <LocationFilterDrawer />}
      {fieldToModify === "guests" && <GuestsFilterDrawer />}
      <button className="filter-drawer__search-button">
        <SearchIcon color="white" /> Search
      </button>
    </div>
  );
}
