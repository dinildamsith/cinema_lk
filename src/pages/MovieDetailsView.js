import { FaHeart, FaBookmark, FaBars, FaPlay } from "react-icons/fa";
import MainLayout from "../layouts/MainLayout";

const MovieDetailsView = () => {
    return (
        <MainLayout>
            <div className="text-gray-900 dark:text-white bg-white dark:bg-gray-900 -mt-12">
                {/* Background Banner */}
                <div
                    className="relative h-auto min-h-[400px] bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://media.assettype.com/newindianexpress%2F2024-05%2F829c5e53-1d2e-4869-a512-83b32a541eed%2Fhitlist.jpg')`,
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-60"></div>

                    <div className="relative z-10 flex flex-wrap md:flex-nowrap items-center h-full px-4 md:px-20 py-10 gap-8">
                        {/* Movie Poster */}
                        <img
                            src="https://media.assettype.com/newindianexpress%2F2024-05%2F829c5e53-1d2e-4869-a512-83b32a541eed%2Fhitlist.jpg"
                            alt="Movie Poster"
                            className="w-full max-w-[160px] h-auto aspect-[2/3] rounded-lg object-cover shadow-lg"
                        />

                        {/* Movie Info */}
                        <div className="flex flex-col flex-1 gap-3 min-w-0">
                            <h1 className="text-2xl md:text-4xl font-bold break-words text-gray-300 dark:text-gray-400">
                                Exterritorial <span className="text-gray-300 dark:text-gray-400 text-xl">(2025)</span>
                            </h1>
                            <p className="text-sm md:text-base text-gray-300 dark:text-gray-400">
                                Thriller, Action • 1h 49m
                            </p>
                            <p className="text-yellow-500 font-semibold text-lg">⭐ 67%</p>

                            <div className="flex flex-wrap gap-3 mt-2">
                                <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                                    <FaBars />
                                </button>
                                <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-red-500 transition">
                                    <FaHeart />
                                </button>
                                <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-blue-500 transition">
                                    <FaBookmark />
                                </button>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2 transition">
                                    <FaPlay /> Play Trailer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overview */}
                <div className="px-4 md:px-20 py-6">
                    <h2 className="text-xl font-semibold mb-2">Overview</h2>
                    <p className="text-gray-800 dark:text-gray-300 mb-4 text-justify">
                        When her son vanishes inside a US consulate, ex-special forces soldier Sara does everything in
                        her power to find him — and uncovers a dark conspiracy.
                    </p>
                    <p className="text-gray-700 dark:text-gray-400">
                        Christian Zübert — <span className="italic">Director, Writer</span>
                    </p>
                </div>

                {/* Cast */}
                <div className="px-4 md:px-20 py-4">
                    <h2 className="text-xl font-semibold mb-4">Top Billed Cast</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {[...Array(6)].map((_, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
                            >
                                <img
                                    src="https://media.assettype.com/newindianexpress%2F2024-05%2F829c5e53-1d2e-4869-a512-83b32a541eed%2Fhitlist.jpg"
                                    alt="Actor"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-3">
                                    <h3 className="text-base font-semibold truncate">Actor Name</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">Character Name</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default MovieDetailsView;
