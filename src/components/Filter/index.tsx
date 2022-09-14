import SearchIcon from "../Icons/Search";

import "./styles.css";

export default function Filter() {
  return (
    <div className="filter">
      <form className="filter__form">
        <div className="filter__city">Helsinki, Finland</div>
        <input className="filter__guests" placeholder="Add guests" />
        <button className="filter__search-button" type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
