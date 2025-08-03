// Starter data
const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "Frozen", genre: "Animation", rating: 7.5 },
  { title: "The Godfather", genre: "Crime", rating: 9.2 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// Start coding here...


const recommend = (movie, minRating = 8) => movie.rating >= minRating;

// 1. Filter movies with rating ≥ 8.
const filteredMovies = movies.filter(movie => recommend(movie));

const filteredMoviesListElement = document.getElementById("filtered-movies-list");
filteredMoviesListElement.innerHTML = filteredMovies
  .map(({ title }) => `<li>${title}</li>`).join(""); 

  filteredMoviesListElement.style.fontSize = "1rem";
  filteredMoviesListElement.style.color = "blue";
  filteredMoviesListElement.style.fontWeight = "bold";
  filteredMoviesListElement.style.fontFamily = "arial";

// 2. Create formatted list of movie titles 
const formattedMovieList = filteredMovies.map(
  ({ title, genre, rating }) => `${title} (${genre}) - ${rating} ⭐`
);

const formattedMovieListElement = document.getElementById("formatted-movie-list");
formattedMovieListElement.innerHTML = formattedMovieList
  .map(item => `<p>${item}</p>`)
  .join("");  

  formattedMovieListElement.style.fontSize = "1rem";
  formattedMovieListElement.style.color = "green";
  formattedMovieListElement.style.fontWeight = "bold";
  formattedMovieListElement.style.fontFamily = "arial";

// 3. Display recommend result for test movie (task 3)
const recommendationResultElement = document.getElementById("recommendation-result");


const testMovie = movies.find(m => m.title === "Frozen");
recommendationResultElement.textContent = testMovie
  ? `Is "${testMovie.title}" recommended? ${recommend(testMovie) ? "Yes" : "No"}`
  : "Test movie not found.";

  recommendationResultElement.style.fontSize = "1rem";
  recommendationResultElement.style.color = "orange";
  recommendationResultElement.style.fontWeight = "bold";
  recommendationResultElement.style.fontFamily = "arial";

