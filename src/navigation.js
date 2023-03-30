window.addEventListener("DOMContentLoaded", navigator, false);

window.addEventListener("hashchange", navigator, false);

function navigator() {
  console.log({ location });
  if (location.hash.startsWith("#trends")) {
    trendsPage();
  } else if (location.hash.startsWith("#search=")) {
    searchPage();
  } else if (location.hash.startsWith("#movie=")) {
    moviePage();
  } else if (location.hash.startsWith("#category=")) {
    categoryPage();
  } else {
    homePage();
  }
  location.hash;
}

function homePage() {
  app()
}
function trendsPage() {
  console.log("ESTAMOS EN TRENDS");
}
function searchPage() {
  console.log("ESTAMOS EN BUSQEUDA");
}
function moviePage() {
  console.log("ESTAMOS EN DETALLES DE PELICULA");
}
function categoryPage() {
  console.log("ESTAMOS EN CATEGORIAS");
}
