import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSearchItems } from "../Features/SearchSlice";
import { useNavigate } from "react-router";
import SearchCard from "./SearchCard";

function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [searchvalue, setsearchvalue] = useState("");

  const { searchitems, statusbar, errorbar } = useSelector(
    (state) => state.search
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlechange = (e) => {
    const searchitem = e.target.value;
    setsearchvalue(searchitem);
    setIsOpen(searchitem.trim().length >= 3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = searchvalue.trim();

    if (query.length < 3) return;

    setIsOpen(false);
    navigate(`/products?search=${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    const query = searchvalue.trim();

    if (query.length < 3) return;

    const timer = setTimeout(() => {
      dispatch(GetSearchItems(query));
    }, 400);

    return () => clearTimeout(timer);
  }, [searchvalue, dispatch]);

  const products = searchitems[searchvalue.trim()] || [];

  return (
    <div ref={searchRef} dir="rtl" className="relative z-40 w-full font-myfont">
      {/* کادر جست‌وجو */}
      <form
        onSubmit={handleSubmit}
        className="
          flex h-11 w-full min-w-0 items-center
          overflow-hidden rounded-xl
          border border-purple-200 bg-white
          shadow-sm shadow-purple-100/60
          transition-all duration-200
          hover:border-fuchsia-300
          focus-within:border-fuchsia-500
          focus-within:ring-2 focus-within:ring-fuchsia-100
          sm:h-12
        "
      >
        <button
          type="submit"
          aria-label="جست‌وجو"
          className="
            flex h-full shrink-0 cursor-pointer
            items-center justify-center
            px-3 text-fuchsia-700
            transition-colors duration-200
            hover:text-purple-950
            sm:px-4
          "
        >
          <i className="fa-solid fa-magnifying-glass text-base sm:text-lg" />
        </button>

        <input
          type="search"
          placeholder="جست‌وجوی محصولات..."
          onChange={handlechange}
          onFocus={() => {
            if (searchvalue.trim().length >= 3) setIsOpen(true);
          }}
          value={searchvalue}
          className="
            h-full min-w-0 flex-1
            border-none bg-transparent
            px-2 text-right
            font-myfont text-xs font-medium
            text-purple-950 placeholder:text-gray-400
            outline-none
            sm:text-sm
          "
        />

        {searchvalue && (
          <button
            type="button"
            aria-label="پاک کردن جست‌وجو"
            onClick={() => {
              setsearchvalue("");
              setIsOpen(false);
            }}
            className="
              flex h-full shrink-0 cursor-pointer
              items-center px-3 text-gray-400
              transition-colors hover:text-fuchsia-700
            "
          >
            <i className="fa-solid fa-xmark" />
          </button>
        )}
      </form>

      {/* نتایج جست‌وجو */}
      {isOpen && searchvalue.trim().length >= 3 && (
        <div
          className="
            absolute right-0 top-full z-50 mt-2
            max-h-96 w-full overflow-y-auto
            rounded-2xl border border-purple-100
            bg-white p-2
            shadow-xl shadow-purple-200/40
            animate-in fade-in slide-in-from-top-2 duration-200
          "
        >
          {statusbar === "loading" && (
            <div className="flex items-center justify-center gap-3 p-5 text-sm text-purple-700">
              <span className="size-5 animate-spin rounded-full border-2 border-purple-200 border-t-fuchsia-700" />
              در حال جست‌وجو...
            </div>
          )}

          {statusbar === "failed" && (
            <p className="p-4 text-center text-sm text-red-500">{errorbar}</p>
          )}

          {statusbar === "succeeded" && products.length === 0 && (
            <div className="p-6 text-center">
              <i className="fa-solid fa-box-open mb-3 text-2xl text-purple-300" />
              <p className="text-sm font-semibold text-purple-900">
                محصولی پیدا نشد.
              </p>
              <p className="mt-1 text-xs text-gray-400">
                عبارت دیگری را امتحان کن.
              </p>
            </div>
          )}

          {products.length > 0 && (
            <>
              <p className="px-3 py-2 text-xs font-bold text-purple-500">
                نتایج جست‌وجو
              </p>

              {products.map((product) => (
                <SearchCard
                  key={product.id}
                  name={product.name}
                  image={`https://www.emadtalebloo.com/panelapi/Uploads/Products/${product.img1}`}
                  link={`/products/productdetail?id=${product.id}`}
                />
              ))}

              <button
                type="button"
                onClick={handleSubmit}
                className="
                  mt-2 w-full cursor-pointer rounded-xl
                  bg-purple-50 px-3 py-3
                  text-center text-xs font-bold text-fuchsia-800
                  transition-colors hover:bg-fuchsia-100
                "
              >
                مشاهده همه نتایج
                <i className="fa-solid fa-arrow-left mr-2" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
