import { useContext } from "react";
import { useProperties } from "../../hooks/use-properties";
import FilterValues from "../../contexts/FilterValues";
import Property from "../Property";

import "./styles.css";

export default function Properties() {
  const filterValues = useContext(FilterValues);

  const location = filterValues?.location.value.split(", ") || [];
  const city = location[0] || "";
  const country = location[1] || "";

  const guests =
    (filterValues?.guests.value.adults || 0) +
    (filterValues?.guests.value.children || 0);

  const properties = useProperties(city, country, guests);

  return (
    <section className="properties">
      <h2 className="properties__title">Stays in {country}</h2>
      <ul className="properties__ul">
        {properties.map(({ title, type, rating, photo, superHost, beds }) => (
          <li className="properties__li" key={title}>
            <Property
              title={title}
              type={type}
              rating={rating}
              photo={photo}
              superHost={superHost}
              beds={beds}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
