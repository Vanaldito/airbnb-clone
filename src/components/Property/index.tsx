import Star from "../Icons/Star";

import "./styles.css";

interface PropertyProps {
  title: string;
  photo: string;
  type: string;
  rating: number;
}

export default function Property({
  title,
  photo,
  type,
  rating,
}: PropertyProps) {
  return (
    <div className="property" key={title}>
      <img className="property__photo" src={photo} />
      <div className="property__info">
        <div className="property__type">{type}</div>
        <div className="property__rating">
          <Star /> {rating.toFixed(2)}
        </div>
      </div>
      <h3 className="property__title">{title}</h3>
    </div>
  );
}
