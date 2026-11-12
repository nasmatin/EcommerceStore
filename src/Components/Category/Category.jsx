import CategoryCard from "./CategoryCard";
import icon from "../assets/—Pngtree—shop logo vector template design_4146475.png";

function Category() {
  return (
    <section
      dir="rtl"
      className="
        relative overflow-hidden
        px-4 py-12 sm:py-16 lg:py-20
        font-myfont
      "
    >
      {/* Background Decoration */}

      <div
        className="
        absolute top-10 right-0
        size-40 rounded-full
        bg-fuchsia-100/50 blur-3xl
        pointer-events-none
      "
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Title */}

        <div className="mb-12 text-center">
          <h2
            className="
            mt-2 text-2xl sm:text-3xl
            font-extrabold text-gray-800
          "
          >
            دسته‌بندی محصولات
          </h2>

          <div
            className="
            mx-auto mt-4 h-1 w-16
            rounded-full bg-linear-to-l
            from-fuchsia-700 to-purple-400
          "
          />
        </div>

        {/* Categories */}

        <div
          className="
          grid grid-cols-2
          gap-x-4 gap-y-10
          sm:grid-cols-4
          sm:gap-8
          lg:gap-14
          justify-items-center
        "
        >
          <CategoryCard
            image={icon}
            link="/store/products?catId=2014"
            label="مراقبت پوست"
          />

          <CategoryCard
            image={icon}
            link="/store/products?catId=2015"
            label="مراقبت مو"
          />

          <CategoryCard
            image={icon}
            link="/store/products?catId=2017"
            label="آرایشی"
          />

          <CategoryCard
            image={icon}
            link="/store/products?catId=2016"
            label="بهداشتی"
          />
        </div>
      </div>
    </section>
  );
}

export default Category;
