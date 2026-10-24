function ProductCard({ id, image, link, label, price }) {
  return (
    <div
      dir="rtl"
      className="cursor-pointer font-myfont bg-fuchsia-50 rounded-xl shadow-2xl p-3 flex flex-col items-center text-center"
      data-product-id={id}
      onClick={() => (window.location.href = link)}
    >
      <img
        src={`https://emadtalebloo.com/panelapi/Uploads/Products/${image}`}
        className="h-32 w-32 mb-3 object-cover "
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
