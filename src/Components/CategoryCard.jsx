function CategoryCard({ image, link, label }) {
  return (
    <div dir="rtl" className=" text-center">
      <a href={link}>
        <img
          src={image}
          alt={label}
          className="h-30 w-30 mb-3 bg-fuchsia-400 rounded-full
          transition-all duration-300 ease-out
          hover:scale-105 hover:shadow-lg"
        />
      </a>
      <label className="font-semibold">{label}</label>
    </div>
  );
}
export default CategoryCard;
