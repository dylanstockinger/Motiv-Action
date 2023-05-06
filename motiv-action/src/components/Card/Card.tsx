type CardProps = {
  famousQuote: FamousQuote;
};

const Card: React.FC<CardProps> = ({ famousQuote }) => {
  return (
    <div className=" max-w-4xl h-44 py-8 px-8 bg-white shadow-lg rounded-lg my-20">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-gray-800 text-4xl font-normal text-center">
          {famousQuote.quote}
        </h2>
      </div>
      <div className="flex justify-end mt-4">
        <p className="text-xl font-medium text-indigo-500">
          {famousQuote.author}
        </p>
      </div>
    </div>
  );
};

export default Card;
