import { useEffect, useState } from "react";
import slider1 from "../assets/8f4a757e1f8a4290aaaeab58e5dd3aca.jpeg";
import slider2 from "../assets/f6781d1f14de4d4fa1d51823cc2c024d.jpeg";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const sliders = [
    { image: slider1, link: "#" },
    { image: slider2, link: "#" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliders.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliders.length) % sliders.length);
  };

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      dir="rtl"
      className="w-full px-3 sm:px-5 py-3 bg-transparent"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* GLASS FRAME */}

      <div
        className="
          relative max-w-7xl mx-auto
          rounded-2xl sm:rounded-3xl
          border-2 border-purple-600/50
          bg-purple-500/15
          p-1.5 sm:p-2
          shadow-[0_0_18px_rgba(139,92,246,0.25),inset_0_0_12px_rgba(167,139,250,0.20)]
          backdrop-blur-xl
        "
      >
        {/* IMAGE AREA */}

        <div
          className="
            relative isolate overflow-hidden
            w-full aspect-[2.6/1]
            rounded-xl sm:rounded-2xl
            bg-transparent
          "
        >
          {sliders.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              aria-hidden={currentSlide !== index}
              tabIndex={currentSlide === index ? 0 : -1}
              className={`
                absolute inset-0
                transition-all duration-1000 ease-in-out
                ${
                  currentSlide === index
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-105 pointer-events-none z-0"
                }
              `}
            >
              <img
                src={slide.image}
                alt={`بنر ${index + 1}`}
                className="block w-full h-full object-contain object-center"
              />
            </a>
          ))}

          {/* SLIDE NUMBER */}

          <div
            className="
              absolute top-2 right-2 sm:top-5 sm:right-5
              z-20 flex items-center gap-1
              rounded-lg
              border border-purple-200/50
              bg-purple-900/40 backdrop-blur-lg
              px-2.5 py-1.5 sm:px-3
              text-white font-bold text-xs sm:text-base
            "
          >
            <span>0{currentSlide + 1}</span>
            <span className="text-white/60">/</span>
            <span className="text-white/70">0{sliders.length}</span>
          </div>

          {/* PREVIOUS BUTTON */}

          <button
            type="button"
            onClick={prevSlide}
            aria-label="اسلاید قبلی"
            className="
              absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20
              flex items-center justify-center
              w-7 h-7 sm:w-11 sm:h-11
              rounded-lg sm:rounded-xl
              border border-purple-200/60
              bg-white/40 backdrop-blur-xl
              text-purple-900
              shadow-md
              transition-all duration-300
              hover:bg-purple-600 hover:text-white
            "
          >
            <i className="fa-solid fa-chevron-left text-xs sm:text-base" />
          </button>

          {/* NEXT BUTTON */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="اسلاید بعدی"
            className="
              absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20
              flex items-center justify-center
              w-7 h-7 sm:w-11 sm:h-11
              rounded-lg sm:rounded-xl
              border border-purple-200/60
              bg-white/40 backdrop-blur-xl
              text-purple-900
              shadow-md
              transition-all duration-300
              hover:bg-purple-600 hover:text-white
            "
          >
            <i className="fa-solid fa-chevron-right text-xs sm:text-base" />
          </button>

          {/* SLIDE INDICATORS ON IMAGE */}

          <div
            className="
              absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2
              z-20 flex items-center justify-center gap-2
              rounded-full
              border border-white/40
              bg-purple-900/35 backdrop-blur-xl
              px-3 py-1.5 sm:py-2
            "
          >
            {sliders.map((slide, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`اسلاید ${index + 1}`}
                className={`
                  h-1.5 sm:h-2 rounded-full
                  transition-all duration-500
                  ${
                    currentSlide === index
                      ? "w-6 sm:w-8 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                      : "w-1.5 sm:w-2 bg-white/50 hover:bg-white"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
