function ProductReview({ reviews = [] }) {
  return (
    <section className="font-myfont mt-0 rounded-2xl border-2 border-gray-300 bg-white p-5 shadow-sm sm:p-7 animate-in fade-in duration-500">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-gray-900 transition-colors duration-200 hover:text-fuchsia-800">
          نظرات کاربران
        </h2>

        <button
          type="button"
          className="rounded-xl border border-fuchsia-800 px-5 py-2.5 text-sm font-semibold text-fuchsia-800 transition-all duration-200 hover:bg-fuchsia-50 hover:scale-[1.02]"
        >
          ثبت نظر
        </button>
      </div>

      {reviews.length === 0 ? (
        <p className="mt-4 text-sm leading-7 text-gray-500">
          هنوز نظری برای این محصول ثبت نشده است.
        </p>
      ) : (
        <div className="mt-5 space-y-4">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="border-b border-gray-100 pb-4 last:border-0 transition-colors duration-200 hover:border-fuchsia-200"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-semibold text-gray-800 transition-colors duration-200 hover:text-fuchsia-800">
                  {review.userName}
                </span>

                <span className="text-sm text-amber-500 transition-transform duration-200 hover:scale-110">
                  {"★".repeat(review.rating)}
                </span>
              </div>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                {review.comment}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductReview;
