import { Link } from "react-router";

function BlogCard({ title, image, link }) {
  return (
    <Link
      to={link}
      className="
        relative block w-full
        h-64 sm:h-72 md:h-80
        rounded-2xl
        overflow-hidden
        group
        font-myfont
        border border-purple-200/70
        bg-white
        shadow-[0_5px_20px_rgba(139,92,246,0.10)]
        transition-all duration-500
        hover:-translate-y-2
        hover:border-purple-400/70
        hover:shadow-[0_15px_35px_rgba(139,92,246,0.20)]
      "
    >
      {/* Background Image */}

      <img
        src={image}
        alt={title}
        className="
          absolute inset-0
          w-full h-full
          object-cover
          transition-transform duration-700
          group-hover:scale-110
        "
      />

      {/* Gradient */}

      <div
        className="
        absolute inset-0
        bg-linear-to-t
        from-purple-950/90
        via-purple-900/20
        to-transparent
        opacity-90
        transition-opacity duration-500
        group-hover:opacity-100
      "
      />

      {/* Glass Label */}

      <div
        className="
        absolute bottom-4 right-4 left-4
        z-10
        rounded-xl
        border border-white/30
        bg-white/15
        backdrop-blur-md
        px-4 py-3
        transition-all duration-500
        group-hover:bg-purple-700/40
      "
      >
        <h3
          className="
          text-base sm:text-lg md:text-xl
          font-bold text-white
          text-center
          transition-transform duration-300
          group-hover:-translate-y-0.5
        "
        >
          {title}
        </h3>
      </div>

      {/* Hover Border */}

      <div
        className="
        absolute inset-2
        rounded-xl
        border border-white/0
        pointer-events-none
        transition-all duration-500
        group-hover:border-white/40
      "
      />
    </Link>
  );
}

export default BlogCard;
