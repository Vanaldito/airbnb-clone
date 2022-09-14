import { useState } from "react";
import FilterDrawer from "../FilterDrawer";
import SearchIcon from "../Icons/Search";

import "./styles.css";

export default function Filter() {
  const [fieldToModify, setFieldToModify] = useState<
    null | "guests" | "location"
  >(null);
  const [location, setLocation] = useState("Helsinki, Findland");
  const [guests, setGuests] = useState(0);

  function modifyField(fieldName: "guests" | "location") {
    return () => {
      setFieldToModify(fieldName);
    };
  }

  function clearFieldToModify() {
    setFieldToModify(null);
  }

  return (
    <div className="filter">
      <div className="filter__form">
        <div className="filter__city" onClick={modifyField("location")}>
          {location}
        </div>
        <button
          className="filter__guests"
          type="button"
          onClick={modifyField("guests")}
        >
          Add guests
        </button>
        <button className="filter__search-button" type="submit">
          <SearchIcon />
        </button>
      </div>
      {fieldToModify && (
        <FilterDrawer
          defaultFieldToModify={fieldToModify}
          closeDrawer={clearFieldToModify}
        />
      )}
    </div>
  );
}
