import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { GetCategory } from "../Features/MenuSlice";
import { GetProduct } from "../Features/ProductSlice";

function CategoryItem({ item, rootItems }) {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.menu.category);
  const products = useSelector((state) => state.product.products);
  const [open, setOpen] = useState(false);

  const closeTimer = useRef(null);

  const children = item.id === 0 ? rootItems || [] : category[item.id] || [];

  const isLoaded = item.id === 0 || category[item.id] !== undefined;
  const hasChildren = isLoaded && children.length > 0;

  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);

    if (item.id !== 0 && category[item.id] === undefined) {
      dispatch(GetCategory(item.id));
    }
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 180);
  };

  const handleclick = (catId) => {
    setOpen(false);
    if (!catId || products[catId] !== undefined) return;
    dispatch(GetProduct(catId));
  };

  useEffect(() => {
    return () => {
      clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <li
      className="relative list-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleclick(item.id)}
    >
      {/* عنوان دسته */}
      <div
        className="
          group flex cursor-pointer items-center justify-between
          gap-3 rounded-xl px-4 py-3
          font-myfont text-base font-medium text-purple-100
          transition-all duration-200
          hover:bg-white/10 hover:text-white
        "
      >
        <div className="flex min-w-0 items-center gap-2.5">
          {item.id === 0 && (
            <i className="fa-solid fa-layer-group text-base text-fuchsia-300" />
          )}

          {item.id === 0 ? (
            <span className="truncate">{item.name}</span>
          ) : (
            <Link to={`/products?catId=${item.id}`} className="truncate">
              {item.name}
            </Link>
          )}
        </div>

        {hasChildren && (
          <i
            className="
              fa-solid fa-angle-left shrink-0
              text-base text-fuchsia-300
              transition-transform duration-200 ease-out
              group-hover:-translate-x-1
            "
          />
        )}
      </div>

      {/* زیرمنو */}
      {open && hasChildren && (
        <div
          className={`
            absolute z-50 min-w-60
            font-myfont
            ${item.id === 0 ? "right-0 top-full pt-2" : "right-full top-0 pl-2"}
          `}
        >
          <ul
            className="
              overflow-visible rounded-2xl
              border border-white/10
              bg-linear-to-br from-purple-900 to-fuchsia-950
              p-2
              shadow-xl shadow-purple-950/30
              ring-1 ring-white/10
              animate-in fade-in duration-200
            "
          >
            {children.map((child) => (
              <CategoryItem key={child.id} item={child} />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export default CategoryItem;
