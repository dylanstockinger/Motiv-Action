import "./Card.css";

type CardProps = {
  famousQuote: FamousQuote;
};

const Card: React.FC<CardProps> = ({ famousQuote }) => {
  return (
    <section className="flex align-center justify-center	m-auto text-black height-{240px} width-{800px} rounded-lg	bg-white mt-24	shadow-2xl	 ">
      <div className="card-details">
        <p className="text-3xl	text-center	">{famousQuote.quote}</p>
        <small className="text-center">{famousQuote.author}</small>
      </div>
    </section>
  );
};

export default Card;
