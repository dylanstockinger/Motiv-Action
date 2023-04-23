import "./Card.css";

type CardProps = {
  famousQuote: FamousQuote;
};

const Card: React.FC<CardProps> = ({ famousQuote }) => {
  return (
    <section>
      <div className="card-details">
        <p>{famousQuote.quote}</p>
        <small>{famousQuote.author}</small>
        <div className="icon"></div>
      </div>
    </section>
  );
};

export default Card;
