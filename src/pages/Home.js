import MainLayout from "../layouts/MainLayout";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import MovieCard from "../components/MovieCard";
import {useEffect, useState} from "react";
import {Chip} from "@mui/material";

function HomePage() {

    const [loading, setLoading] = useState(false);
    const [allTrendingMovies, setAllTrendingMovies] = useState([]);
    const [allGenres, setAllGenres] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjEzNmZkNjc2MTNlY2RiYjY4MDI2MzdmNjIzZWFmOCIsIm5iZiI6MTc0NjcyODQ2Ny4yNzgsInN1YiI6IjY4MWNmNjEzMzhkNTEyZWZhZGIxY2FhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OPQgXPjc5CbMOYxxfZ1aYimZCbGbfpwmavzep_tDvd0'
        }
    };

    const getGenre = async () => {
        setLoading(true);
        try {// Start loading
            const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
            const data = await res.json();
            console.log(data.genres);
            setAllGenres(data.genres);
        } catch (err) {
            console.error('Error fetching genres:', err);
        } finally {
            setLoading(false);
        }

    }

    const handelTrendingMovieGet = async () => {
        setLoading(true);        // Start loading

        try {
            const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
            const data = await res.json();
            setAllTrendingMovies(data.results);
        } catch (err) {
            console.error('Error fetching trending movies:', err);
        } finally {
            setLoading(false);
        }
    };



    const serchInput = async (e) => {
        const searchTerm = e.target.value.toLowerCase();

        setLoading(true);        // Start loading

        try {
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}`, options)
            const data = await res.json();
            setAllTrendingMovies(data.results);
        } catch (err) {
            console.error('Error fetching search results:', err);
        } finally {
            setLoading(false);
        }

        console.log(searchTerm)
    }

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    useEffect(() => {
        console.log(allTrendingMovies)
    }, [allTrendingMovies]);

    useEffect(() => {
        handelTrendingMovieGet().then(() => console.log("Trending movies fetched successfully"));
        getGenre().then(() => console.log("Genres fetched successfully"));
    }, []);

    return (
        <MainLayout>
            {loading && (
                <div className="fixed inset-0 z-50 bg-white bg-opacity-70 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
                </div>
            )}


            <div className="flex flex-col lg:flex-row gap-4 p-4">
                {/* Left Side – Filters */}
                {/* Left Side – Filters */}
                <aside className="w-full lg:w-1/4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Filter Movies</h2>


                    <h6 className="text-gray-700 dark:text-gray-300 mb-2">Genres</h6>
                    <div className="flex flex-wrap gap-2">
                        {
                            allGenres.map((genre) => (
                                <Chip key={genre.id} label={genre.name} onClick={() => handleClick(genre)}/>
                            ))
                        }
                    </div>
                </aside>


                {/* Right Side – Movie Cards */}
                <main className="w-full lg:w-3/4">
                    <div className="flex flex-col gap-4">
                        {/* Top Section with Heading and Search */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">All Movies</h2>
                            <div className="relative w-full sm:max-w-xs sm:ml-auto sm:mr-0">
                                <input
                                    type="text"
                                    placeholder="Search movies..."
                                    onChange={(e) => serchInput(e)}
                                    className="w-full pl-10 pr-4 py-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />
                                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 dark:text-gray-300 absolute left-3 top-2.5" />
                            </div>
                        </div>


                        {/* Movie Grid */}
                        <div className="flex flex-wrap gap-5">
                            <MovieCard allMovies={allTrendingMovies}/>
                        </div>
                    </div>
                </main>
            </div>
        </MainLayout>
    );
}

export default HomePage;
