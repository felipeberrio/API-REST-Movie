const $query = (id) => document.querySelector(id);


// Sections
const headerSection = document.querySelector('#header');
const trendingPreviewSection = $query('#trendingPreview');
const categoriesPreviewSection = $query('#categoriesPreview');
const genericSection = $query('#genericList');
const movieDetailSection = $query('#movieDetail');

// Lists & Containers
const searchForm = $query('#searchForm');
const trendingMoviesPreviewList = $query('.trendingPreview-movieList');
const categoriesPreviewList = $query('.categoriesPreview-list');
const movieDetailCategoriesList = $query('#movieDetail .categories-list');
const relatedMoviesContainer = $query('.relatedMovies-scrollContainer');

// Elements
const headerTitle = $query('.header-title');
const arrowBtn = $query('.header-arrow');
const headerCategoryTitle = $query('.header-title--categoryView');

const searchFormInput = $query('#searchForm input');
const searchFormBtn = $query('#searchBtn');

const trendingBtn = $query('.trendingPreview-btn');

const movieDetailTitle = $query('.movieDetail-title');
const movieDetailDescription = $query('.movieDetail-description');
const movieDetailScore = $query('.movieDetail-score');