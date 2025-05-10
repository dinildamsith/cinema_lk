import './App.css';
import HomePage from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetailsView from "./pages/MovieDetailsView";
import TrendingMovie from "./pages/TrendingMovie";
import FavouriteMovie from "./pages/FavouritMovie";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movieDetails/:id" element={<MovieDetailsView />} />
                <Route path="/trending" element={<TrendingMovie/>} />
                <Route path="/favorites" element={<FavouriteMovie/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
