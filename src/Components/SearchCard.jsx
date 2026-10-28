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
      className="flex flex-col gap-4 bg-white p-2 border-b border-gray-200 cursor-pointer transition-all duration-200 hover:shadow-md hover:border-fuchsia-200 animate-in fade-in  sm:flex-row sm:items-center sm:gap-5"
    >
      {/* تصویر محصول */}
      <a
        href={link}
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
        className="shrink-0 self-center sm:self-auto"
      >
        <img
          src={image}
          alt={name}
          className="h-15 w-15 rounded-full bg-fuchsia-300 object-contain p-2 transition-transform duration-300 hover:scale-110 sm:h-10 sm:w-10"
        />
      </a>

      {/* اطلاعات محصول */}
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div>
          <h3 className="line-clamp-2 text-base font-semibold leading-7 text-gray-800 transition-colors duration-200 hover:text-fuchsia-800">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
