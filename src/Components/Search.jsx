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
    <div
      ref={searchRef}
      dir="rtl"
      className="
        flex flex-row relative
        font-myfont
        h-12
        w-full
        rounded-sm
        border-2 border-fuchsia-600
      "
    >
      <form
        className="flex flex-1 items-center min-w-0"
        onSubmit={handleSubmit}
      >
        <i
          className="
            fa-solid fa-magnifying-glass
            pr-3 
            pl-5
            text-fuchsia-600
  
            text-xl
            shrink-0
          "
        />

        <input
          type="search"
          placeholder="جست و جو"
          onChange={handlechange}
          value={searchvalue}
          className="
            flex-1
            min-w-0
            pr-3 pl-3
            font-semibold
            border-none
            text-fuchsia-800
            outline-none
            bg-transparent
          "
        />
      </form>
      {isOpen && searchvalue.trim().length >= 3 && (
        <div className="absolute top-full right-0 w-full border border-fuchsia-400  bg-white z-50">
          {statusbar === "loading" && <p className="p-3">در حال جست‌وجو...</p>}

          {statusbar === "failed" && (
            <p className="p-3 text-red-500">{errorbar}</p>
          )}

          {statusbar === "succeeded" && products.length === 0 && (
            <p className="p-3 font-semibold">محصولی پیدا نشد.</p>
          )}

          {products.map((product) => (
            <SearchCard
              key={product.id}
              name={product.name}
              image={product.image}
              link={`/products/productdetail?id=${product.id}`}
            ></SearchCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
