const FavoriteButton = ({ isFavorite, onClick }) => {
 return (
    <button
      type="button"
      onClick={onClick}
      aria-label="علاقه‌مندی"
      aria-pressed={isFavorite}
      className="transition-transform duration-200 hover:scale-110 active:scale-90"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`h-6 w-6 transition-colors duration-200 ${
          isFavorite
            ? "fill-red-500 stroke-red-500"
            : "fill-none stroke-current"
        }`}
        strokeWidth="1.8"
      >
        <path
          d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default FavoriteButton;

// const [isFavorite, setIsFavorite] = useState(false);

// <FavoriteButton
//   isFavorite={isFavorite}
//   onClick={() => setIsFavorite(!isFavorite)}
// />