import { useNavigate } from "react-router";

function SearchCard({ id, image, link, name }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div
      dir="rtl"
      data-product-id={id}
      onClick={handleClick}
      className="
        group flex cursor-pointer items-center gap-3
        rounded-xl border-b border-purple-50
        bg-white p-3
        transition-duration: 300ms;
        hover:border-purple-100 hover:bg-purple-50/60
        hover:shadow-sm
        animate-in fade-in duration-300
      "
    >
      {/* تصویر محصول */}
      <a
        href={link}
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
        className="
          flex size-14 shrink-0 items-center justify-center
          overflow-hidden rounded-xl
          border border-purple-100 bg-purple-50
          transition-all duration-300
          group-hover:border-fuchsia-200
          sm:size-16
        "
      >
        <img
          src={image}
          alt={name}
          className="
            h-full w-full object-contain p-1.5
            transition-transform duration-300
            group-hover:scale-110
          "
        />
      </a>

      {/* اطلاعات محصول */}
      <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
        <h3
          className="
            line-clamp-2 text-sm font-bold
            leading-7 text-purple-950
            transition-colors duration-200
            group-hover:text-fuchsia-700
          "
        >
          {name}
        </h3>
      </div>
    </div>
  );
}

export default SearchCard;
