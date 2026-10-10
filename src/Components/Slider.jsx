import { useEffect, useState } from "react";
import slider1 from "../assets/8f4a757e1f8a4290aaaeab58e5dd3aca.jpeg";
import slider2 from "../assets/f6781d1f14de4d4fa1d51823cc2c024d.jpeg";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliders = [
    {
      image: slider1,
      link: "#",
    },
    {
      image: slider2,
      link: "#",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(
        (currentSlide) => (currentSlide + 1) % sliders.length
      );
    }, 3000);

    return () => clearInterval(timer);
  },);

  return (
    <div className="relative w-full overflow-hidden">

      {/* اسلایدها */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliders.map((slide, index) => (
          <a
            key={index}
            href={slide.link}
            className="w-full shrink-0"
          >
            <img
              src={slide.image}
              className="block w-full  object-contain"
              alt={`slider ${index + 1}`}
            />
          </a>
        ))}
      </div>

      {/* نقطه‌ها */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {sliders.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
              currentSlide === index
                ? "bg-black scale-110"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* دکمه قبلی */}
      <button
        onClick={() =>
          setCurrentSlide(
            (currentSlide - 1 + sliders.length) % sliders.length
          )
        }
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 
                   w-7 h-7 sm:w-9 sm:h-9 
                   flex items-center justify-center
                   rounded-full bg-white/70 hover:bg-white"
      >
        <i className="fa-solid fa-chevron-left text-sm sm:text-xl"></i>
      </button>

      {/* دکمه بعدی */}
      <button
        onClick={() =>
          setCurrentSlide((currentSlide + 1) % sliders.length)
        }
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 
                   w-7 h-7 sm:w-9 sm:h-9 
                   flex items-center justify-center
                   rounded-full bg-white/70 hover:bg-white"
      >
        <i className="fa-solid fa-chevron-right text-sm sm:text-xl"></i>
      </button>

    </div>
  );
}

export default Slider;