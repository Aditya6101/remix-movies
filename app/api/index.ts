export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
};

// endpoints
export const MOVIES = `https://api.themoviedb.org/3/discover/movie`;
export const MOVIE = (id: number) =>
  `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
export const POSTER = (path: string) =>
  `https://image.tmdb.org/t/p/original/${path}`;
