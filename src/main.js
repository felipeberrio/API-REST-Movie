const API_LINK = "https://api.themoviedb.org/3";

const app = () => {
  getTrendingMoviesPreview();
};

async function getTrendingMoviesPreview() {
  const res = await fetch(API_LINK + "/trending/movie/day?api_key=" + API_KEY);
  const data = await res.json();

  const movies = data.results;
  console.log({ data, movies });

  movies.forEach((movie) => {
    const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')

    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");
    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300/" + movie.poster_path
    );
    movieContainer.appendChild(movieImg)
    trendingPreviewMoviesContainer.appendChild(movieContainer)

  });
}

document.addEventListener("DOMContentLoaded", () => {
  app();
});
