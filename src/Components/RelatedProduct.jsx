function RelatedProduct({ products = [] }) {
  return (
    <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
      <h2 className="text-lg font-bold text-gray-900">محصولات مشابه</h2>

      {products.length === 0 ? (
        <p className="mt-4 text-sm text-gray-500">
          محصول مشابهی برای نمایش وجود ندارد.
        </p>
      ) : (
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-xl border border-gray-100 p-3 transition hover:border-fuchsia-200 hover:shadow-sm"
            >
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-fuchsia-50">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-2"
                  />
                ) : (
                  <span className="text-3xl text-fuchsia-200">◇</span>
                )}
              </div>

              <p className="mt-3 line-clamp-2 text-sm font-medium leading-6 text-gray-700">
                {product.name}
              </p>

              <p className="mt-2 text-sm font-bold text-fuchsia-900">
                {Number(product.price).toLocaleString("fa-IR")} تومان
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
export default RelatedProduct;
