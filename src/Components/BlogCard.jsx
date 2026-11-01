import { Link } from "react-router";

function BlogCard({ title, image, link }) {
  return (
    <Link
      to={link}
className="relative block w-full h-28 md:h-48 rounded-lg group overflow-visible font-myfont" >
      {/* Background Image */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      {/* Title */}
      <div className="absolute bottom-5 right-5 text-white z-10 ">
        <h3 className="text-lg md:text-xl font-bold text-center">{title}</h3>
      </div>

      {/* Arrow */}
      {/* <div
        className="absolute bottom-4 left-4 z-20 w-6 h-6 rounded-full bg-white shadow-lg
flex items-center justify-center
transition-all duration-300 group-hover:bg-fuchsia-600 group-hover:text-white"
      >
        <span className="text-2xl">←</span>
      </div> */}
    </Link>
  );
}

export default BlogCard;
