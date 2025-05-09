import MainLayout from "../layouts/MainLayout";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import MovieCard from "../components/MovieCard";

function HomePage() {
    return (
        <MainLayout>
            <div className="flex flex-col lg:flex-row gap-4 p-4">
                {/* Left Side – Filters */}
                <aside className="w-full lg:w-1/4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Filter Movies</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Genre</label>
                            <select className="w-full mt-1 p-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600">
                                <option>Action</option>
                                <option>Drama</option>
                                <option>Comedy</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Year</label>
                            <input
                                type="number"
                                className="w-full mt-1 p-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                placeholder="e.g. 2020"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Rating</label>
                            <input type="range" min="0" max="10" className="w-full" />
                        </div>
                    </div>
                </aside>

                {/* Right Side – Movie Cards */}
                <main className="w-full lg:w-3/4">
                    <div className="flex flex-col gap-4">
                        {/* Top Section with Heading and Search */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Movies</h2>
                            <div className="relative w-full sm:max-w-xs sm:ml-auto sm:mr-0">
                                <input
                                    type="text"
                                    placeholder="Search movies..."
                                    className="w-full pl-10 pr-4 py-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />
                                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 dark:text-gray-300 absolute left-3 top-2.5" />
                            </div>
                        </div>


                        {/* Movie Grid */}
                        <div className="flex flex-wrap gap-5">
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                        </div>
                    </div>
                </main>
            </div>
        </MainLayout>
    );
}

export default HomePage;
