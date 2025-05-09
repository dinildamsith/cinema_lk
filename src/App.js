import './App.css';
import HomePage from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetailsView from "./pages/MovieDetailsView";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MovieDetailsView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
