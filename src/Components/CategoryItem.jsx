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

  // آیا اطلاعات این دسته از قبل دریافت شده؟
  const isLoaded = item.id === 0 || category[item.id] !== undefined;

  // فقط وقتی اطلاعات را داریم تصمیم می‌گیریم فلش باشد یا نه
  const hasChildren = isLoaded && children.length > 0;

  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);

    setOpen(true);

    // این فقط حالت پشتیبان است.
    // معمولاً اطلاعات قبلاً preload شده است.
    if (item.id !== 0 && category[item.id] === undefined) {
      dispatch(GetCategory(item.id));
    }
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 150);
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
      className="relative list-none "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleclick(item.id)}
    >
      {/* عنوان دسته */}

      <div
        className="
          flex
          font-myfont
          cursor-pointer
          items-center
          justify-between
          gap-3
          rounded-md
          px-3
          py-2
          text-fuchsia-100
          hover:bg-fuchsia-800
          hover:text-fuchsia-300
        "
      >
        {item.id === 0 ? (
          <span>{item.name}</span>
        ) : (
          <Link to={`/products?catId=${item.id}`}>{item.name}</Link>
        )}

        {/* فقط دسته دارای زیرمجموعه فلش دارد */}

        {hasChildren && <i className="fa-solid fa-angle-left text-xs"></i>}
      </div>

      {/* ================= زیرمنو ================= */}

      {open && hasChildren && (
        <div
          className={`
            absolute
            font-myfont
            z-50
            ${item.id === 0 ? "right-0 top-full" : "right-full top-0 "}
          `}
        >
          <ul
            className="
              w-52
              rounded-md
              bg-fuchsia-800
              p-2
              shadow-lg
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
