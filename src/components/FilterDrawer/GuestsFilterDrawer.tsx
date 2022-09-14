import { useContext } from "react";
import FilterValues from "../../contexts/FilterValues";

export default function GuestsFilterDrawer() {
  const filterValues = useContext(FilterValues);

  const adults = filterValues?.guests.value.adults || 0;
  const children = filterValues?.guests.value.children || 0;

  return (
    <div className="guests-filter-drawer">
      <div>
        <div className="guests-filter-drawer__type">Adults</div>
        <p className="guests-filter-drawer__description">Ages 13 or above</p>
        <div className="guests-filter-drawer__value">
          <button
            className="guests-filter-drawer__button"
            onClick={filterValues?.guests.modifier.adults(
              adults - 1 < 0 ? 0 : adults - 1
            )}
          >
            &minus;
          </button>
          <span className="guests-filter-drawer__amount">{adults}</span>
          <button
            className="guests-filter-drawer__button"
            onClick={filterValues?.guests.modifier.adults(adults + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <div className="guests-filter-drawer__type">Children</div>
        <p className="guests-filter-drawer__description">Ages 2-12</p>
        <div className="guests-filter-drawer__value">
          <button
            className="guests-filter-drawer__button"
            onClick={filterValues?.guests.modifier.children(
              children - 1 < 0 ? 0 : children - 1
            )}
          >
            &minus;
          </button>
          <span className="guests-filter-drawer__amount">{children}</span>
          <button
            className="guests-filter-drawer__button"
            onClick={filterValues?.guests.modifier.children(children + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
