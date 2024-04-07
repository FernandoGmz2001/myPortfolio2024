import "../styles/Card.css";
interface Card {
  name: string;
  type: string;
  description: string;
  image: string;
  color: string;
}

function Card(props: Card) {
  return (
    <div>
      <div className="project-card" style={{background: props.color}}>
        <div className="card-header">
          <p>{props.type}</p>
          <h3>{props.name}</h3>
          <p className="card-description">{props.description}</p>
        </div>
        <div className="card-links"></div>
        <picture className="project-picture">
          <img
            src={`/public/images/projects/${props.image}.png`}
            alt={props.image}
          />
        </picture>
      </div>
    </div>
  );
}

export default Card;
