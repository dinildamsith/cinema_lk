import { useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CrewCarousel({ movieCredits }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (containerRef.current) {
                containerRef.current.scrollBy({ left: 110, behavior: "smooth" });
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const scroll = (direction) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: direction === "left" ? -110 : 110,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="px-4 md:px-20 py-4 relative">
            <h2 className="text-xl font-semibold mb-4">Crew</h2>

            {/* Scroll Buttons */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={() => scroll("right")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
            >
                <FaChevronRight />
            </button>

            {/* Scrollable Container */}
            <div
                ref={containerRef}
                className="flex space-x-2 overflow-x-auto scrollbar-hide"
            >
                {movieCredits?.crew?.map((crew) => (
                    <div
                        key={`${crew.credit_id}-${crew.job}`}
                        className="min-w-[150px] h-[250px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm flex flex-col items-center text-center"
                    >
                        <img
                            src={
                                crew.profile_path
                                    ? `https://image.tmdb.org/t/p/w500${crew.profile_path}`
                                    : "https://static.vecteezy.com/system/resources/previews/054/264/361/large_2x/document-damage-icon-glyph-icon-for-your-website-mobile-presentation-and-logo-design-vector.jpg"
                            }
                            alt={crew.name}
                            className="w-full h-[190px] object-cover"
                        />
                        <div className="p-2">
                            <p className="text-sm font-semibold text-gray-800 dark:text-gray-300 truncate">{crew.original_name}</p>
                            <p className="text-xs text-gray-800 dark:text-gray-300 truncate">{crew.job}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
