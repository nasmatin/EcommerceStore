function CategoryCard({ image, link, label }) {
  return (
    <div dir="rtl" className="group flex flex-col items-center text-center">
      <a
        href={link}
        className="
          relative flex items-center justify-center
          size-36 sm:size-40
          rounded-full
          bg-linear-to-br from-fuchsia-400 via-purple-300 to-fuchsia-700
          p-3
          shadow-[0_8px_25px_rgba(192,38,211,0.16)]
          transition-all duration-500 ease-out
          hover:-translate-y-3
          hover:scale-105
          hover:shadow-[0_18px_35px_rgba(192,38,211,0.3)]
        "
      >
        <div
          className="
            flex size-full items-center justify-center
            overflow-hidden rounded-full
            border-4 border-white
            bg-linear-to-br from-fuchsia-50 to-purple-100
          "
        >
          <img
            src={image}
            alt={label}
            className="
              size-[78%]
              object-contain
              transition-transform duration-700
              group-hover:scale-125
              group-hover:rotate-6
            "
          />
        </div>

        {/* Decorative Glow */}

        <div
          className="
            pointer-events-none absolute -inset-2
            rounded-full border border-fuchsia-300/0
            transition-all duration-500
            group-hover:border-fuchsia-400/60
            group-hover:scale-110
          "
        />
      </a>

      <div
        className="
          mt-5 min-w-32
          rounded-full
         
          bg-white px-5 py-2.5
          shadow-sm
          transition-all duration-300
          group-hover:border-fuchsia-300
          group-hover:bg-fuchsia-50
          group-hover:shadow-md
        "
      >
        <span
          className="
            font-myfont font-bold
            text-sm sm:text-base
            text-gray-700
            transition-colors duration-300
            group-hover:text-fuchsia-800
          "
        >
          {label}
        </span>
      </div>
    </div>
  );
}

export default CategoryCard;
