import SearchIcon from "../Icons/Search";

import "./styles.css";

export default function Filter() {
  return (
    <div className="filter">
      <div className="filter__form">
        <div className="filter__city">Helsinki, Finland</div>
        <button className="filter__guests" type="button">
          Add guests
        </button>
        <button className="filter__search-button" type="submit">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}
