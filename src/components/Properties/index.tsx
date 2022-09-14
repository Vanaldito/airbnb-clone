import Property from "../Property";
import { useProperties } from "../../hooks/use-properties";

import "./styles.css";

export default function Properties() {
  const properties = useProperties();

  return (
    <div className="properties">
      {properties.map(({ title, type, rating, photo, superHost }) => (
        <Property
          key={title}
          title={title}
          type={type}
          rating={rating}
          photo={photo}
          superHost={superHost}
        />
      ))}
    </div>
  );
}
