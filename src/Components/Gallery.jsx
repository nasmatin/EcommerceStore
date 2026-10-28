import { useState } from "react";

function Gallery({ images = [], productName = "محصول" }) {
  const validImages = images.filter(Boolean).slice(0, 4);
  const [activeImage, setActiveImage] = useState(0);
  return (
    <section className="w-full min-w-0">
      {/* تصویر اصلی */}
      <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border-2 border-gray-300 bg-white shadow-sm">
        {validImages.length > 0 ? (
          <img
            src={`https://emadtalebloo.com/panelapi/Uploads/Products/${validImages[activeImage]}`}
            alt={productName}
            className="h-full w-full object-contain p-4"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">
            تصویری برای محصول وجود ندارد
          </div>
        )}

        {validImages.length > 1 && (
          <span className="absolute right-3 top-3 rounded-lg bg-white/90 px-3 py-1.5 text-xs text-gray-600 shadow-sm">
            {activeImage + 1} از {validImages.length}
          </span>
        )}
      </div>

      {/* تصاویر کوچک */}
      {validImages.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {validImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`نمایش تصویر ${index + 1}`}
              aria-pressed={activeImage === index}
              className={`h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 bg-fuchsia-50 transition sm:h-24 sm:w-24 ${
                activeImage === index
                  ? "border-fuchsia-800"
                  : "border-transparent hover:border-fuchsia-300"
              }`}
            >
              <img
                src={`https://emadtalebloo.com/panelapi/Uploads/Products/${image}`}
                alt={`${productName} - تصویر ${index + 1}`}
                className="h-full w-full object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
export default Gallery;
