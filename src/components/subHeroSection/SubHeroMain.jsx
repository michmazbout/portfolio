import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SubHeroMain = () => {
  const traits = [
    "Multidisciplinary Thinker",
    "Scientific Rigor",
    "Code Fluency",
    "Obsessed With Precision",
    "Field-Tested",
    "Research-Driven",
    "Built For Impact",
    "Self-Taught + Formally Trained",
  ];

  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const amount = 200;
      container.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (!paused && container) {
        container.scrollBy({ left: 1, behavior: "smooth" });
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, [paused]);

  const duplicatedTraits = [...traits, ...traits];

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="w-full bg-darkBackground text-lavenderMist py-4 px-2">
      <div className="max-w-[1200px] mx-auto relative border-y border-glowingPink">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-glowingPink hover:scale-125 transition"
        >
          <FaChevronLeft size={20} />
        </button>

        <div
          ref={scrollRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeaveCapture={handleMouseUp}
          className="overflow-x-auto scrollbar-hide cursor-grab"
        >
          <div className="inline-flex gap-8 whitespace-nowrap px-10 py-2">
            {duplicatedTraits.map((trait, index) => (
              <p
                key={index}
                className="inline-block text-center uppercase text-lg sm:text-xl md:text-2xl xl:text-3xl font-medium"
              >
                {trait}
              </p>
            ))}
          </div>
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-glowingPink hover:scale-125 transition"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SubHeroMain;