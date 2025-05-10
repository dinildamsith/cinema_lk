Here is a more creative version of the README file, now with some added emojis to make it more engaging:

---

# 🎬 **Movie Explorer – Discover Your Favorite Films** 🎥

Welcome to the **Movie Explorer App**! 🌟 This web application allows users to search for movies, view detailed information about them, and discover trending films. It fetches real-time data from the TMDb (The Movie Database) API. 🚀

---

## 🔥 **Features**

* **Search Functionality**: Search for movies by name and get relevant results. 🔍
* **Movie Grid Display**: View movie posters with titles, release years, and ratings. 🎞️
* **Movie Details View**: Click on a movie to see detailed info (overview, genre, cast, trailer). 🎬
* **Trending Movies**: Explore popular movies fetched from the API. 🌍
* **Light/Dark Mode**: Toggle between light and dark themes. 🌞🌙
* **Favorites**: Save your favorite movies to a list stored locally. ❤️
* **Movie Filters**: Filter movies by genre, year, or rating. 🎭
* **YouTube Trailers**: Watch trailers embedded from YouTube. 📹

---

## 📥 **Installation and Setup**

To get started with the **Movie Explorer App**, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/dinildamsith/cinema_lk.git
cd cinema_lk
```

### 2. Install Dependencies

Install all required dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### 3. API Key Configuration

To integrate with the TMDb API, you’ll need an API key.

* [Get your TMDb API key here](https://www.themoviedb.org/settings/api).
* Create a `.env` file in the root directory of the project and add the following line:

```bash
REACT_APP_TMDB_API_KEY=your-api-key-here
```

### 4. Run the App

Start the development server:

```bash
npm start
# or
yarn start
```

The app will be available at `http://localhost:3000`.

---

## 📁 **Project Structure**

The project is organized in a modular way for maintainability:

```
src/
├── components/         # Reusable components like MovieCard, SearchBar, etc.
├── pages/              # Pages for different views (Home, MovieDetails, Favorites)
├── layout/              # Layout
├── context/            # React Context for state management
├── App.js              # Main entry point
├── index.js            # ReactDOM render
└── README.md           # Project documentation
```

---

## 🎯 **Features Overview**


### 1. **Search for Movies** 🔍

* The search bar allows users to input movie names. It fetches results from the TMDb API and displays them in a grid.
* **Infinite scrolling** or a **Load More button** is implemented to fetch additional movies as users scroll.

### 2. **Movie Details View** 📖

* Clicking on a movie poster opens a detailed view, including:

  * Movie title
  * Overview
  * Genres
  * Cast
  * Trailer link (YouTube embed)

### 3. **Trending Movies** 🌟

* The app displays trending movies fetched from the TMDb API in a dedicated section.

### 4. **Light/Dark Mode** 🌞🌙

* Users can toggle between light and dark modes for better readability.

### 5. **Favorites** ❤️

* Users can save their favorite movies in a list stored in local storage.
* The app remembers their favorite movies even after a refresh.

### 6. **Movie Filters** 🎭

* Users can filter movies by genre, rating, or release year.


---

## 🌐 **API Integration**

The app fetches data from the TMDb API using Axios for API requests. The main endpoints used are:

* **Trending Movies**: `/trending/all/day`
* **Search Movies**: `/search/movie`
* **Movie Details**: `/movie/{movie_id}`
* **Genres List**: `/genre/movie/list`

Each movie poster or result links to the detailed view with additional information fetched dynamically from the API.

---

## 🧪 **Testing and Deployment**

1. **Unit Testing**: Add tests for components using Jest and React Testing Library.
2. **Deployment**: Deploy the app to Vercel or Netlify by following their instructions. Make sure to add your `.env` file to the deployment platform.

