import Star from "../Icons/Star";

import "./styles.css";

interface PropertyProps {
  title: string;
  photo: string;
  type: string;
  rating: number;
  superHost: boolean;
  beds: number | null;
}

export default function Property({
  title,
  photo,
  type,
  rating,
  superHost,
  beds,
}: PropertyProps) {
  return (
    <div className="property">
      <img
        className="property__photo"
        src={photo}
        loading="lazy"
        width="100%"
      />
      <div className="property__info">
        <div className="property__info__left-side">
          {superHost && <div className="property__super-host">SUPER HOST</div>}
          <div className="property__description">
            <span>{type}</span>
            <span>{beds && ` . ${beds} beds`}</span>
          </div>
        </div>
        <div className="property__rating">
          <Star /> {rating.toFixed(2)}
        </div>
      </div>
      <h3 className="property__title">{title}</h3>
    </div>
  );
}
