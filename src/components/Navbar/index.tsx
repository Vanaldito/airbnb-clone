import Filter from "../Filter";
import "./styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a className="logo__link" href="/">
          <img src="/logo.svg" />
        </a>
      </div>
      <Filter />
    </nav>
  );
}
