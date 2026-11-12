import { useState } from "react";

function Gallery({ images = [], productName = "محصول" }) {
  const validImages = images.filter(Boolean).slice(0, 4);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="w-full min-w-0 font-myfont">
      {/* تصویر اصلی */}
      <div
        className="
          group relative mx-auto aspect-square w-full max-w-md
          overflow-hidden rounded-3xl
          border border-purple-100
          bg-linear-to-br from-white via-purple-50/50 to-fuchsia-50/60
          shadow-lg shadow-purple-100/50
          transition-all duration-300
          hover:shadow-xl hover:shadow-purple-200/50
        "
      >
        {validImages.length > 0 ? (
          <img
            src={`https://emadtalebloo.com/panelapi/Uploads/Products/${validImages[activeImage]}`}
            alt={productName}
            className="
              h-full w-full object-contain p-5 sm:p-8
              transition-transform duration-500
              group-hover:scale-105
            "
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-gray-400">
            <i className="fa-regular fa-image text-5xl text-purple-200" />
            <span className="text-sm">تصویری برای محصول وجود ندارد</span>
          </div>
        )}

        {/* شماره تصویر */}
        {validImages.length > 1 && (
          <span
            className="
              absolute right-4 top-4
              rounded-xl border border-purple-100
              bg-white/90 px-3 py-1.5
              text-xs font-bold text-purple-800
              shadow-sm backdrop-blur-sm
            "
          >
            {activeImage + 1} از {validImages.length}
          </span>
        )}

        {/* نشان محصول */}
        <div
          className="
          absolute bottom-4 left-4
          flex size-9 items-center justify-center
          rounded-xl bg-white/90
          text-fuchsia-700 shadow-sm
        "
        >
          <i className="fa-solid fa-heart" />
        </div>
      </div>

      {/* تصاویر کوچک */}
      {validImages.length > 1 && (
        <div className="mt-5 flex justify-center gap-3 overflow-x-auto pb-2">
          {validImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`نمایش تصویر ${index + 1}`}
              aria-pressed={activeImage === index}
              className={`
                relative size-20 shrink-0 overflow-hidden
                rounded-2xl border-2 bg-white p-1
                transition-all duration-300
                sm:size-24
                ${
                  activeImage === index
                    ? "border-fuchsia-600 shadow-md shadow-fuchsia-200/70"
                    : "border-purple-100 opacity-75 hover:border-fuchsia-300 hover:opacity-100"
                }
              `}
            >
              <img
                src={`https://emadtalebloo.com/panelapi/Uploads/Products/${image}`}
                alt={`${productName} - تصویر ${index + 1}`}
                className="
                  h-full w-full rounded-xl object-contain
                  transition-transform duration-300
                  hover:scale-105
                "
              />

              {activeImage === index && (
                <span
                  className="
                  absolute bottom-1 right-1
                  size-2 rounded-full bg-fuchsia-600
                  ring-2 ring-white
                "
                />
              )}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

export default Gallery;
