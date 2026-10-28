function ProductCard({ id, image, link, label, price }) {
  return (
    <div
      dir="rtl"
      className="cursor-pointer font-myfont bg-fuchsia-50 rounded-xl shadow-lg p-3 flex flex-col items-center text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl"
      data-product-id={id}
      onClick={() => (window.location.href = link)}
    >
      <img
        src={`https://emadtalebloo.com/panelapi/Uploads/Products/${image}`}
        alt={label}
        className="h-32 w-32 mb-3 object-cover rounded-full transition-transform duration-300 ease-out hover:scale-105"
      />

      <div className="flex flex-col gap-1 w-full">
        <h3 className="font-semibold text-sm leading-tight line-clamp-2">
          {label}
        </h3>

        <p className="text-fuchsia-700 font-bold text-base">{price} تومان</p>
      </div>
    </div>
  );
}

export default ProductCard;
