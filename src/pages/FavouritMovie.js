import MainLayout from "../layouts/MainLayout";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import MovieCard from "../components/MovieCard";
import {useEffect, useState} from "react";
import {Chip} from "@mui/material";
import {Label} from "@mui/icons-material";

function FavouriteMovie() {

    const [loading, setLoading] = useState(false);
    const [allFavMovies, setAllFavMovies] = useState([]);
    const [allGenres, setAllGenres] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjEzNmZkNjc2MTNlY2RiYjY4MDI2MzdmNjIzZWFmOCIsIm5iZiI6MTc0NjcyODQ2Ny4yNzgsInN1YiI6IjY4MWNmNjEzMzhkNTEyZWZhZGIxY2FhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OPQgXPjc5CbMOYxxfZ1aYimZCbGbfpwmavzep_tDvd0'
        }
    };



    const getFavoriteMovie = async () => {
        const movies = JSON.parse(localStorage.getItem("favouriteMovie")) || [];
        setAllFavMovies(movies);
        console.log(movies)
    }


    const serchInput = async (e) => {
        if (e.target.value === "") {
            getFavoriteMovie().then(() => console.log("Favorite movies fetched successfully"));
            return;
        }
        const searchTerm = e.target.value.toLowerCase();
        const filteredMovies = allFavMovies.filter((movie) =>
            movie.original_title.toLowerCase().includes(searchTerm)
        );
        setAllFavMovies(filteredMovies);
        console.log(filteredMovies)
    }



    useEffect(() => {
        console.log(allFavMovies)
    }, [allFavMovies]);

    useEffect(() => {
        getFavoriteMovie().then(() => console.log("Favorite movies fetched successfully"));
    }, []);

    return (
        <MainLayout>
            {loading && (
                <div className="fixed inset-0 z-50 bg-white bg-opacity-70 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
                </div>
            )}

            <div className="flex flex-col gap-4 p-4">
                {/* Search Bar Top Right */}
                <div className="flex justify-end">
                    <div className="relative w-full sm:w-80">
                        <input
                            type="text"
                            placeholder="Search movies..."
                            onChange={(e) => serchInput(e)}
                            className="w-full pl-10 pr-4 py-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        />
                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 dark:text-gray-300 absolute left-3 top-2.5" />
                    </div>
                </div>

                {/* Movie Cards */}
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Favorite Movies</h2>
                <div className="flex flex-wrap gap-5">
                    <MovieCard allMovies={allFavMovies} />
                </div>
            </div>
        </MainLayout>

    );
}

export default FavouriteMovie
