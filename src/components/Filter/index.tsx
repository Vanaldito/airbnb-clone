import { useState } from "react";
import { useFilterValues } from "../../hooks/use-filter-values";
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

  const filterValues = useFilterValues();

  return (
    <FilterValues.Provider value={filterValues}>
      <div className="filter">
        <div className="filter__form">
          <div className="filter__city" onClick={modifyField("location")}>
            {filterValues.location.value}
          </div>
          <button
            className="filter__guests"
            type="button"
            onClick={modifyField("guests")}
          >
            Add guests
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
    </FilterValues.Provider>
  );
}
