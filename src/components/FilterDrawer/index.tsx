import { useContext, useState } from "react";
import FilterValues from "../../contexts/FilterValues";
import CloseIcon from "../Icons/Close";
import SearchIcon from "../Icons/Search";
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
          <div className="filter-drawer__field__placeholder">Add guests</div>
        </div>
      </div>
      {fieldToModify === "location" && <LocationFilterDrawer />}
      <button className="filter-drawer__search-button">
        <SearchIcon color="white" /> Search
      </button>
    </div>
  );
}
