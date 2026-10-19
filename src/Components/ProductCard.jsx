function ProductCard({ id, image, link, label, price }) {
  
  return (
    <div
      dir="rtl"
      className="bg-white rounded-xl shadow-md p-3 flex flex-col items-center text-center"
      data-product-id={id}
    >
      <a href={link} className="w-full flex justify-center">
        <img
          src={image}
          className="h-32 w-32 mb-3 object-cover bg-fuchsia-400 rounded-full"
        />
      </a>

      <div className="flex flex-col gap-1 w-full">
        <h3 className="font-semibold text-sm leading-tight line-clamp-2">
          {label}
        </h3>
        <p className="text-pink-600 font-bold text-base">
          {price} تومان
        </p>
      </div>
    </div>
  );
}

export default ProductCard;