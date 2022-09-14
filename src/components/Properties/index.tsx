import { useProperties } from "../../hooks/use-properties";
import Star from "../Icons/Star";

import "./styles.css";

export default function Properties() {
  const properties = useProperties();

  return (
    <div className="properties">
      {properties.map(property => (
        <div className="property" key={property.title}>
          <img className="property__photo" src={property.photo} />
          <div className="property__info">
            <div className="property__type">{property.type}</div>
            <div className="property__rating">
              <Star /> {property.rating.toFixed(2)}
            </div>
          </div>
          <h3 className="property__title">{property.title}</h3>
        </div>
      ))}
    </div>
  );
}
