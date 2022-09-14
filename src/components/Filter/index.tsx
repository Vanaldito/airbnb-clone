import { useContext, useState } from "react";
import FilterValues from "../../contexts/FilterValues";
import FilterDrawer from "../FilterDrawer";
import SearchIcon from "../Icons/Search";

import "./styles.css";

export default function Filter() {
  const [fieldToModify, setFieldToModify] = useState<
    null | "guests" | "location"
  >(null);

  function modifyField(fieldName: "guests" | "location") {
    return () => {
      setFieldToModify(fieldName);
    };
  }

  function clearFieldToModify() {
    setFieldToModify(null);
  }

  const filterValues = useContext(FilterValues);

  const totalGuests =
    (filterValues?.guests.value.adults || 0) +
    (filterValues?.guests.value.children || 0);

  return (
    <div className="filter">
      <div className="filter__form">
        <div className="filter__city" onClick={modifyField("location")}>
          {filterValues?.location.value}
        </div>
        <button
          className="filter__guests"
          type="button"
          onClick={modifyField("guests")}
        >
          {totalGuests == 0 ? (
            <span className="filter__guests__placeholder">Add guests</span>
          ) : (
            <span>
              {totalGuests} guest{totalGuests > 1 ? "s" : ""}
            </span>
          )}
        </button>
        <button className="filter__search-button" type="submit">
          <SearchIcon color="orange" />
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
