import {FaHeart, FaBookmark, FaBars, FaPlay, FaHome} from "react-icons/fa";
import MainLayout from "../layouts/MainLayout";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import CastCarousel from "../components/Cast";
import CrewCarousel from "../components/Crew";
import {toast} from "react-toastify";

const MovieDetailsView = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [movieDetails, setMovieDetails] = useState({});
    const [showTrailer, setShowTrailer] = useState(false);
    const [trailerKey, setTrailerKey] = useState(null);
    const [movieCredits, setMovieCredits] = useState({});
    const [movieFavourite, setMovieFavourite] = useState({});

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjEzNmZkNjc2MTNlY2RiYjY4MDI2MzdmNjIzZWFmOCIsIm5iZiI6MTc0NjcyODQ2Ny4yNzgsInN1YiI6IjY4MWNmNjEzMzhkNTEyZWZhZGIxY2FhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OPQgXPjc5CbMOYxxfZ1aYimZCbGbfpwmavzep_tDvd0'
        }
    };

    const getCredits = async () => {
        setLoading(true);        // Start loading

        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options);
            const data = await res.json();
            console.log(data);
            setMovieCredits(data);   // Set movie credits
        } catch (err) {
            console.error('Error fetching credits:', err);
        } finally {
            setLoading(false);
        }
    }

    const getMovieDetails = async () => {
        try {
            setLoading(true);        // Start loading
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
            const data = await res.json();
            console.log(data);
            setMovieDetails(data);   // Set movie details

        } catch (err) {
            console.error('Error fetching movie details:', err);
        }
        finally {
            setLoading(false);       // Stop loading
        }
    }

    const getMovieVideos = async () => {
        try {
            setLoading(true);        // Start loading
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
            const data = await res.json();
            console.log(data);
            const trailer = data.results.find(video => video.type === 'Trailer');
            if (trailer) {
                setTrailerKey(trailer.key); // Set trailer key
            } else {
                console.log("No trailer found");
                setTrailerKey(null); // Set trailer key to null if not found
            }
        } catch (err) {
            console.error('Error fetching movie videos:', err);
        }
        finally {
            setLoading(false);       // Stop loading
        }
    }

    const handelFavouriteMovie = async (movie) => {
        const existing = JSON.parse(localStorage.getItem("favouriteMovie")) || [];

        // Check if movie already exists
        const isAlreadyFavorited = existing.some(item => item.id === movie.id);

        if (!isAlreadyFavorited) {
            existing.push(movie);
            localStorage.setItem("favouriteMovie", JSON.stringify(existing));
            toast.success(`${movie.title} added to favorites!`);
        } else {
            toast.warn(`${movie.title} is already in favorites.`);
        }
    }

    const checkMovieInLocalStorage = async () => {
        const existing = JSON.parse(localStorage.getItem("favouriteMovie")) || [];
        console.log("Existing favorites:", existing);
        console.log("Checking for ID:", id);

        const isAlreadyFavorite = existing.some(item => item.id == id);

        setMovieFavourite({ isFavourite: isAlreadyFavorite });
    };


    const handleRemoveFromLocalStorage = async (movie) => {
        const existing = JSON.parse(localStorage.getItem("favouriteMovie")) || [];

        // Check if movie already exists
        const isAlreadyFavorited = existing.some(item => item.id === movie.id);

        if (isAlreadyFavorited) {
            const updatedMovies = existing.filter(item => item.id !== movie.id);
            localStorage.setItem("favouriteMovie", JSON.stringify(updatedMovies));
            toast.success(`${movie.title} removed from favorites!`);
        } else {
            toast.warn(`${movie.title} is not in favorites.`);
        }
    }



    useEffect(() => {
        getMovieDetails().then(() => console.log("Movie details fetched successfully"));
        getMovieVideos().then(() => console.log("Movie videos fetched successfully"));
        getCredits().then(() => console.log("Movie credits fetched successfully"));
        checkMovieInLocalStorage().then(() => console.log("Movie in local storage checked successfully"));
    }, []);

    return (
        <MainLayout>

            {loading && (
                <div className="fixed inset-0 z-50 bg-white bg-opacity-70 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
                </div>
            )}


            <div className="text-gray-900 dark:text-white bg-white dark:bg-gray-900 -mt-12">
                {/* Background Banner */}
                <div
                    className="relative h-auto min-h-[400px]  bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}')`,
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-60"></div>

                    <div
                        className="relative z-10 flex flex-wrap md:flex-nowrap items-center h-full px-4 md:px-20 py-10 gap-8">
                        {/* Movie Poster */}
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                            alt="Movie Poster"
                            className="w-full max-w-[160px] h-auto aspect-[2/3] rounded-lg object-cover shadow-lg"
                        />

                        {/* Movie Info */}
                        <div className="flex flex-col flex-1 gap-3 min-w-0">
                            <h1 className="text-2xl md:text-4xl font-bold break-words text-gray-300 dark:text-gray-400">
                                {movieDetails.original_title} <span
                                className="text-gray-300 dark:text-gray-400 text-xl">({movieDetails.release_date})</span>
                            </h1>
                            {
                                movieDetails.genres?.map((genre, index) => (
                                    <span key={genre.id}
                                          className="text-sm md:text-base text-gray-300 dark:text-gray-400">
            {genre.name}{index < movieDetails.genres.length - 1 ? ', ' : ''}
        </span>
                                ))
                            }

                            <p className="text-sm md:text-base text-gray-300 dark:text-gray-400">
                                {movieDetails.runtime} min | {movieDetails.release_date} | {movieDetails.tagline}
                            </p>
                            {/*<p className="text-sm md:text-base text-gray-300 dark:text-gray-400">*/}
                            {/*    {movieDetails?.origin_country[0] || "Unknown"} | {movieDetails.status || "Unknown"}*/}
                            {/*</p>*/}
                            <p className="text-yellow-500 font-semibold text-lg">⭐ {movieDetails.popularity}</p>

                            <div className="flex flex-wrap gap-3 mt-2">
                                <button
                                    className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                                    <FaBars/>
                                </button>
                                {
                                    movieFavourite?.isFavourite ? (
                                        <button
                                            onClick={() => handleRemoveFromLocalStorage(movieDetails)}
                                            className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-red-500 transition">
                                            <FaHeart className="text-red-500"/>
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handelFavouriteMovie(movieDetails)}
                                            className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-red-500 transition">
                                            <FaHeart/>
                                        </button>
                                    )
                                }
                                {/*<button*/}
                                {/*    onClick={() => handelFavouriteMovie(movieDetails)}*/}
                                {/*    className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-red-500 transition">*/}
                                {/*    <FaHeart/>*/}
                                {/*</button>*/}
                                <button
                                    className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-blue-500 transition">
                                    <FaBookmark/>
                                </button>
                                {trailerKey ? (
                                    <button
                                        onClick={() => setShowTrailer(true)}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2 transition"
                                    >
                                        <FaPlay/> Play Trailer
                                    </button>
                                ) : (
                                    <button
                                        disabled
                                        className="bg-gray-400 text-white px-4 py-2 rounded flex items-center gap-2 cursor-not-allowed"
                                    >
                                        <FaPlay className="opacity-60"/> No Trailer Available
                                    </button>
                                )}


                            </div>
                        </div>
                    </div>
                </div>

                {/* Overview */}
                <div className="px-4 md:px-20 py-6">
                    <h2 className="text-xl font-semibold mb-2">Overview</h2>
                    <p className="text-gray-800 dark:text-gray-300 mb-4 text-justify">
                        {
                            movieDetails.overview
                        }
                    </p>
                    {/*<p className="text-gray-700 dark:text-gray-400">*/}
                    {/*    Christian Zübert — <span className="italic">Director, Writer</span>*/}
                    {/*</p>*/}
                </div>

                {/* credits */}
                <div>
                    <CastCarousel movieCredits={movieCredits}/>
                    <CrewCarousel movieCredits={movieCredits}/>
                </div>


                {/* companies */}
                <div className="px-4 md:px-20 py-4">
                    <h2 className="text-xl font-semibold mb-4">Production companies</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {
                            movieDetails.production_companies?.map((company) => (
                                <>
                                    <div
                                        className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
                                    >
                                        <img
                                            src={
                                                company.logo_path
                                                    ? `https://image.tmdb.org/t/p/w500${company.logo_path}`
                                                    : "https://static.vecteezy.com/system/resources/previews/054/264/361/large_2x/document-damage-icon-glyph-icon-for-your-website-mobile-presentation-and-logo-design-vector.jpg"
                                            }
                                            alt="Actor"
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-3">
                                            <h3 className="text-base font-semibold truncate">{company.name}</h3>
                                            {/*<p className="text-sm text-gray-600 dark:text-gray-400 truncate">{company.name}</p>*/}
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>

            {showTrailer && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg w-[90%] max-w-2xl relative">
                        <button
                            onClick={() => setShowTrailer(false)}
                            className="absolute top-0 right-1 text-black dark:text-white text-xl font-bold"
                        >
                            &times;
                        </button>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                width="100%"
                                height="400"
                                src={`https://www.youtube.com/embed/${trailerKey}`}
                                title="Trailer"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}

        </MainLayout>
    );
};

export default MovieDetailsView;
