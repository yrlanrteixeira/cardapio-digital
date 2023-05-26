import "./card.css";

interface CardProps {
  price: string | number;
  title: string;
  image: string;
}

export function Card({ price, title, image }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p className="card__price-label">Valor: {price}</p>
    </div>
  );
}
