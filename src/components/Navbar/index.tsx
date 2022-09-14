import SearchIcon from "../Icons/Search";
import "./styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a className="logo__link" href="/">
          <img src="/logo.svg" />
        </a>
      </div>
      <div className="navbar__filter">
        <form className="filter__form">
          <div className="filter__city">Helsinki, Finland</div>
          <input className="filter__guests" placeholder="Add guests" />
          <button className="filter__search-button" type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>
    </nav>
  );
}
