function Rating({ averageRating = 0, reviewCount = 0 }) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-2 text-base text-gray-500 animate-in fade-in duration-500">
      <span className="text-lg text-amber-500 transition-transform duration-200 hover:scale-110">
        ★ ★ ★ ★ ★
      </span>

      <span>{averageRating.toLocaleString("fa-IR")}</span>

      <span className="text-gray-300">|</span>

      <span className="transition-colors duration-200 hover:text-fuchsia-700">
        {reviewCount.toLocaleString("fa-IR")} نظر
      </span>
    </div>
  );
}

export default Rating;
