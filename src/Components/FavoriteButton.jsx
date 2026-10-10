const FavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-2xl transition-transform duration-200 hover:scale-110"
    >
      {isFavorite ? "❤️" : "♡"}
    </button>
  );
};

export default FavoriteButton;

// const [isFavorite, setIsFavorite] = useState(false);

// <FavoriteButton
//   isFavorite={isFavorite}
//   onClick={() => setIsFavorite(!isFavorite)}
// />